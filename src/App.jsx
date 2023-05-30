import { Sidebar } from './componentes/Sidebar'
import { Header } from './componentes/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Alan Rehfeldt"
            content="Primeiro post"
          />
          <Post 
            author="Gabriel"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
