import { Interface, getAddress, formatUnits } from 'ethers/lib/utils'

import { verifiedContracts, tokens } from '../consts/verifiedContracts'
import networks from '../consts/networks'
import ERC20ABI from 'adex-protocol-eth/abi/ERC20'

const ERC20 = new Interface(ERC20ABI)
const TRANSFER_SIGHASH = ERC20.getSighash(ERC20.getFunction('transfer').format())

// @TODO custom parsing for univ2 contracts, exact output, etc.
export function getTransactionSummary(txn, networkId, accountAddr) {
    const [, value, data] = txn
    const to = getAddress(txn[0])
    let callSummary, sendSummary
    const network = networks.find(x => x.id === networkId || x.chainId === networkId)
    if (!network) return 'Unknown newtork (unable to parse'

    const contractKey = network.id + ':' + getAddress(to)
    const contractInfo = verifiedContracts[contractKey]
    const tokenInfo = tokens[to]

    const nativeAsset = network ? network.nativeAssetSymbol : 'unknown native token'
    if (parseInt(value) > 0) sendSummary = `send ${(parseInt(value)/1e18).toFixed(4)} ${nativeAsset} to ${contractInfo ? contractInfo.name : to}`
    if (data !== '0x') {
        if (data.startsWith(TRANSFER_SIGHASH)) {
            const [to, amount] = ERC20.decodeFunctionData('transfer', data)
            if (tokenInfo) {
                callSummary = `send ${(amount/Math.pow(10, tokenInfo[1])).toFixed(4)} ${tokenInfo[0]} to ${to}`
            } else {
                // @TODO: maybe we can call the contract and get detailed data
                callSummary = `send ${amount/1e18} unknown token to ${to}`
            }
        } else if (contractInfo) {
            const iface = new Interface(contractInfo.abi)
            const parsed = iface.parseTransaction({ data, value })
            // @TODO: some elegant way to try-catch potential issues here
            if (parsed.name === 'swapExactETHForTokens') {
                const tokenAddr = parsed.args.path[parsed.args.path.length - 1]
                const output = tokenInfo ? `${formatUnits(parsed.args.amountOutMin, tokenInfo[1])} ${tokenInfo[0]}` : `${parsed.args.amountOutMin} of token ${tokenAddr}`
                const contractNote = ` on ${contractInfo.name}`
                const recipientNote = parsed.args.to.toLowerCase() === accountAddr.toLowerCase() ? `` : ` and send it to ${parsed.args.to}`
                return `Swap ${formatUnits(value, 18)} ${nativeAsset} for at least ${output}${contractNote}${recipientNote}`
            } else {
                callSummary = `Interaction with ${contractInfo.name}: ${parsed.name}`
            }
        } else callSummary = `unknown call to ${contractInfo ? contractInfo.name : (tokenInfo ? tokenInfo[0] : to)}`
    }
    return [callSummary, sendSummary].filter(x => x).join(', ')
}

export function getContractName(txn, networkId) {
    const [to] = txn
    const network = networks.find(x => x.id === networkId || x.chainId === networkId)
    const contractKey = network.id + ':' + getAddress(to)
    const contractInfo = verifiedContracts[contractKey]
    return contractInfo ? contractInfo.name : null
}
