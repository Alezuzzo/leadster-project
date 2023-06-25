import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import WebinarSection from './components/WebinarSection'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <WebinarSection/>
      </div>
    </main>
  )
}
