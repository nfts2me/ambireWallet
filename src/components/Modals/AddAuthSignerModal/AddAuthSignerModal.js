import { useCallback, useEffect, useState } from "react"
import { BsXLg } from "react-icons/bs"
import { LedgerSubprovider } from '@0x/subproviders/lib/src/subproviders/ledger' // https://github.com/0xProject/0x-monorepo/issues/1400
import { ledgerEthereumBrowserClientFactoryAsync } from '@0x/subproviders/lib/src' // https://github.com/0xProject/0x-monorepo/issues/1400
import TrezorConnect from '@trezor/connect-web'
import { TrezorSubprovider } from '@0x/subproviders/lib/src/subproviders/trezor' // https://github.com/0xProject/0x-monorepo/issues/1400

import { ledgerGetAddresses, PARENT_HD_PATH } from "lib/ledgerWebHID"
import { latticeConnect, latticeGetAddresses, latticeInit } from "lib/lattice"
import { validateAddAuthSignerAddress } from "lib/validations/formValidations"
import { isFirefox } from "lib/isFirefox"

import { useToasts } from "hooks/toasts"
import { Button, Loading, Modal, TextInput } from "components/common"
import LatticePair from "components/common/LatticePair/LatticePair"
import SelectSignerAccount from "components/common/SelectSignerAccount/SelectSignerAccount"

import { ReactComponent as TrezorIcon } from 'resources/providers/trezor.svg'
import { ReactComponent as LedgerIcon } from 'resources/providers/ledger.svg'
import { ReactComponent as GridPlusIcon } from 'resources/providers/grid-plus.svg'
import { ReactComponent as MetaMaskIcon } from 'resources/providers/metamask-fox.svg'

import styles from './AddAuthSignerModal.module.scss'
import cn from 'classnames'

const AddAuthSignerModal = ({ onAddBtnClicked, selectedAcc, selectedNetwork }) => {
  const { addToast } = useToasts()

  const [disabled, setDisabled] = useState(true)
  const [signerAddress, setSignerAddress] = useState({
    address: '',
    index: 0,
  })
  const [modalToggle, setModalToggle] = useState(true)
  const [latticeToggle, setLatticeToggle] = useState(false)
  const [signersToChoose, setChooseSigners] = useState(null)
  const [showLoading, setShowLoading] = useState(false)
  const [textInputInfo, setTextInputInfo] = useState('')
  const [validationFormMgs, setValidationFormMgs] = useState({ 
    success: false, 
    message: ''
  })

  const onSignerAddressClicked = useCallback(value => {
    setSignerAddress(value)
    modalHandler()
    if (signersToChoose) setTextInputInfo(`${signersToChoose.signerName} address # ${value.index + 1}`)
    setChooseSigners(null)
  }, [signersToChoose])
  
  async function connectLedgerAndGetAccounts() {
    if (isFirefox()) {
      await connectLedgerAndGetAccountsU2F()
    } else {
      await connectLedgerAndGetAccountsWebHID()
    }
  }

  async function connectLedgerAndGetAccountsU2F() {
    const provider = new LedgerSubprovider({
      networkId: 0, // @TODO: is this needed?
      ledgerEthereumClientFactoryAsync: ledgerEthereumBrowserClientFactoryAsync,
      baseDerivationPath: PARENT_HD_PATH
    })
    // NOTE: do not attempt to do both of these together (await Promise.all)
    // there is a bug in the ledger subprovider (race condition), so it will think we're trying to make two connections simultaniously
    // cause one call won't be aware of the other's attempt to connect
      const addresses = await provider.getAccountsAsync(100)
      setChooseSigners({ addresses, signerName: 'Ledger' })
      setModalToggle(true)
  }

  async function connectLedgerAndGetAccountsWebHID() {
    let error = null
    try {
      const addrData = await ledgerGetAddresses()
      if (addrData.length === 1) {
        return onSignerAddressClicked({
          address: addrData[0],
          index: 0,
        })
      } else {
        setChooseSigners({ address: addrData, signerName: 'Ledger' })
        setModalToggle(true)
      }
    } catch (e) {
      console.log(e)
      if (e.statusCode && e.id === 'InvalidChannel') {
        error = "Invalid channel"
      } else if (e.statusCode && e.statusCode === 25873) {
        error = "Please make sure your ledger is connected and the ethereum app is open"
      } else {
        error = e.message
      }
    }

    if (error) {
      addToast(`Ledger error: ${error.message || error}`, { error: true })
    }
  }

  async function connectTrezorAndGetAccounts() {
    /*
      const engine = new Web3ProviderEngine({ pollingInterval: this.pollingInterval })
      engine.addProvider(new TrezorSubprovider({ trezorConnectClientApi: TrezorConnect, ...this.config }))
      engine.addProvider(new CacheSubprovider())
      engine.addProvider(new RPCSubprovider(this.url, this.requestTimeoutMs))
      */
    TrezorConnect.manifest({
      email: 'contactus@ambire.com',
      appUrl: 'https://wallet.ambire.com'
    })
    const provider = new TrezorSubprovider({
      trezorConnectClientApi: TrezorConnect,
    })
    const addresses = await provider.getAccountsAsync(100)
    setChooseSigners({ addresses, signerName: 'Trezor' })
    setModalToggle(true)
  }

  async function connectWeb3AndGetAccounts() {
    // @TODO: pending state; should bein the LoginORSignup (AddAccount) component
    if (typeof window.ethereum === 'undefined') {
      // @TODO catch this
      throw new Error('MetaMask not available')
    }
    const ethereum = window.ethereum
    const permissions = await ethereum.request({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    })

    const accountsPermission = permissions.find(
      (permission) => permission.parentCapability === 'eth_accounts'
    )

    if (!accountsPermission) {
      throw new Error('No accounts connected')
    }

    const addresses = accountsPermission.caveats[0].value

    if (addresses.length === 1)
      return onSignerAddressClicked({
        address: addresses[0],
        index: 0,
      })

    setChooseSigners({ addresses, signerName: 'Web3' })
    setModalToggle(true)
  }

  const setLatticeAddresses = ({ addresses, deviceId, commKey, isPaired }) => {
    setChooseSigners({
      addresses, signerName: 'Lattice', signerExtra: {
        type: 'Lattice',
        deviceId: deviceId,
        commKey: commKey,
        isPaired: isPaired
      }
    })

    setLatticeToggle(false)
    setModalToggle(true)
  }
  
  async function connectGridPlusAndGetAccounts() {
    if (selectedAcc.signerExtra && 
      selectedAcc.signerExtra.type === 'Lattice' && 
      selectedAcc.signerExtra.isPaired) {
        const { commKey, deviceId } = selectedAcc.signerExtra
        const client = latticeInit(commKey)

        setShowLoading(true)

        const { isPaired, errConnect } = await latticeConnect(client, deviceId)
        if (errConnect) {
          setShowLoading(false)
          setLatticeToggle(false)
          addToast(errConnect.message || errConnect, { error: true })

          return
        }

        if (!isPaired) {
          setShowLoading(false)
          setLatticeToggle(false)
          // Canceling the visualization of the secret code on the device's screen.
          client.pair('')

          addToast(`The Lattice device is not paired! Please re-add your account!.`, { error: true })
          
          return 
        }

        const { res, errGetAddresses } = await latticeGetAddresses(client)
        if (errGetAddresses) {
            setShowLoading(false)
            setLatticeToggle(false)
            addToast(`Lattice: ${errGetAddresses}`, { error: true })

            return
        }
        
        if (res) {
          setShowLoading(false)
          setLatticeToggle(false)
          setLatticeAddresses({ addresses: res, deviceId, commKey, isPaired: true })
        }
      } else {
        setLatticeToggle(true)
      }
  }

  const modalHandler = () => {
    setModalToggle(prevState => !prevState)
  }

  const wrapErr = async fn => {
    try {
      await fn()
    } catch (e) {
      console.error(e)
      addToast(`Unexpected error: ${e.message || e}`, { error: true})
    }
  }

  const handleSelectSignerAccountModalCloseClicked = useCallback(() => setChooseSigners(null), [])

  const onTextInput = value => {
    if (textInputInfo.length) setTextInputInfo('')
    setSignerAddress({ ...signerAddress, address: value })
  }

  useEffect(() => {
    const isAddressValid = validateAddAuthSignerAddress(signerAddress.address, selectedAcc.id)
    
    setDisabled(!isAddressValid.success)

    setValidationFormMgs({ 
      success: isAddressValid.success, 
      message: isAddressValid.message ? isAddressValid.message : ''
    })

  }, [selectedAcc, signerAddress.address])


  const stepOne = <>
    <div className={cn(styles.subtitle, styles.chooseSignerSubtitle)}>Choose Signer</div>
    <div className={styles.signers}>
      <div className={styles.signer} onClick={() => wrapErr(connectTrezorAndGetAccounts)}>
        <TrezorIcon width={172} />
      </div>
      <div className={styles.signer} onClick={() => wrapErr(connectLedgerAndGetAccounts)}>
        <LedgerIcon width={172} />
      </div>
      <div className={styles.signer} onClick={() => wrapErr(connectGridPlusAndGetAccounts)}>
        <GridPlusIcon width={127} className={styles.gridplus}/>
      </div>
      <div className={styles.signer} onClick={() => wrapErr(connectWeb3AndGetAccounts)}>
        <MetaMaskIcon width={70} className={styles.metamask} />
      </div>
    </div>

    <div className={styles.subtitle}>- or -</div>

    <div className={styles.manualSigner}>
      <TextInput
          placeholder="Enter signer address manually"
          className={styles.signerAddress}
          value={signerAddress.address}
          info={textInputInfo}
          onInput={onTextInput}
      />

      <Button
          className={styles.button}
          disabled={disabled}
          onClick={() => onAddBtnClicked(signerAddress)}
          primaryGradient
      >
        Add
      </Button>
    </div>
    { validationFormMgs.message &&
        <div className={styles.validationeError}><BsXLg size={12}/>&nbsp;{validationFormMgs.message}</div>
    }
  </>

  const stepTwo = <>
    {latticeToggle && <LatticePair addresses={setLatticeAddresses}/>}

    {modalToggle && signersToChoose && <SelectSignerAccount
        showTitle
        signersToChoose={signersToChoose.addresses}
        selectedNetwork={selectedNetwork}
        onSignerAddressClicked={onSignerAddressClicked}
        description={`You will authorize the selected ${signersToChoose.signerName} address to sign transactions for your account.`}
        onCloseBtnClicked={handleSelectSignerAccountModalCloseClicked}
    />}
  </>

  const steps = [stepOne, stepTwo]
  const currentStep = (latticeToggle || (modalToggle && signersToChoose)) ? 1 : 0

  return <Modal
    title="Add Signer"
    className={styles.wrapper}
    isBackBtnShown={currentStep > 0}
    isTitleCentered
    onBack={() => {
      setLatticeToggle(false)
      setModalToggle(false)
    }}
    >
     {steps[currentStep]}
    </Modal>
}

export default AddAuthSignerModal