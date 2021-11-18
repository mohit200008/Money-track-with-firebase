// styles
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import Transactions from './Transactions'

export default function Home() {
  const { user } = useAuthContext()
  const { documents,error } = useCollection(
    'transactions',
    ["uid","==", user.uid],
    ["createdAt", "desc"]
    )
  return (
    <div className={styles.container}>
      <div className={styles.content}>
         {error && <p>{error}</p>}
         {documents && <Transactions transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
         <TransactionForm uid={user.uid} />
      </div>
    </div>
  )
}
