import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import SecaoWebinar from './components/SecaoWebinar'
import SecaoDemo from './components/SecaoDemo'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <SecaoWebinar/>
        <SecaoDemo/>
      </div>
    </main>
  )
}
