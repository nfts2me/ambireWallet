import cn from 'classnames'
import styles from './ProtocolsWrapper.module.scss'

const ProtocolsWrapper = ({ children, tokenLabelChildren, className }) => (
  <div className={styles.category} key="category-tokens">
    <div className={styles.title}>
      <div className={styles.token}>
        Token
        {tokenLabelChildren}
      </div>
      <h3 className={styles.balance}>
        Balance
      </h3>
      <h3 className={styles.price}>
        Price
      </h3>
      <h3 className={styles.value}>
        Value
      </h3>
      {/* <h3 className={styles.pending}>
          Pending
      </h3>
      <h3 className={styles.pending}>
          Pending+
      </h3> */}
      <div className={styles.actions}>
        Actions
      </div>
    </div>
    <div className={cn(styles.list, className)}>
      {children}
    </div>
</div>
)

export default ProtocolsWrapper