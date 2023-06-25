import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import SecaoWebinar from './components/SecaoWebinar'
import SecaoDemo from './components/SecaoDemo'
import Footer from './components/Footer'
import SecaoVideo from './components/SecaoVideo'
import FooterCopy from './components/FooterCopy'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <SecaoWebinar/>
        <SecaoVideo/>
        <SecaoDemo/>
        <Footer/>
        <FooterCopy/>
      </div>
    </main>
  )
}
