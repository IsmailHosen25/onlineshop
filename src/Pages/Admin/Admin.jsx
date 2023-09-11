import { useState } from 'react'
import styles from './Admin.module.css'
import Adminpage from './AdC/Adminpage'
import AdNavProvider from './Context and Hook/NavHandleContext'

export default function Admin() {
  return (
    <div className={styles.admin}>
      <h1 className={styles.adh}>Addmin Panal</h1>
      <AdNavProvider>
          <Adminpage/>
      </AdNavProvider>
    </div>
  )
}
