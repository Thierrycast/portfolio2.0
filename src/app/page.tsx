import Image from 'next/image'
import styles from './page.module.css'

import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <AboutSection/>
    </>
  )
}
