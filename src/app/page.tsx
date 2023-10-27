import Image from 'next/image'
import styles from './page.module.css'

import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import TechnologiesSection from '@/components/TechnologiesSection'
import ProjectsSection from '@/components/projectsSection'
import ContactsSection from '@/components/ContactsSection'

export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <AboutSection/>
      <TechnologiesSection/>
      <ProjectsSection/>
      <ContactsSection/>
    </>
  )
}
