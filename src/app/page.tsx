import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import SecaoWebinar from './components/SecaoWebinar'
import SecaoDemo from './components/SecaoDemo'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <SecaoWebinar/>
        <SecaoDemo/>
        <Footer/>
      </div>
    </main>
  )
}
