import Image from 'next/image'
import styles from './page.module.css'

import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
    </>
  )
}
