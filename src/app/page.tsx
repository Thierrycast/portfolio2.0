import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import TechnologiesSection from '@/components/TechnologiesSection'
import ProjectsSection from '@/components/projectsSection'
import ContactsSection from '@/components/ContactsSection'

import Style  from './page.module.scss'

export default function Home() {
  return (
    <div className={Style.container_body} >
      <HomeSection/>
      <AboutSection/>
      <TechnologiesSection/>
      <ProjectsSection/>
      <ContactsSection/>
    </div>
  )
}
