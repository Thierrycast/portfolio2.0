import { Dispatch, SetStateAction } from "react"
import styles from './Sidebar.module.scss'


interface SidebarProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}

export default function Sidebar(props : SidebarProps) {

    const {isOpen, setIsOpen} = props

    const scrollToSection = (sectionId : string) => {
      const section = document.getElementById(sectionId);
      if (section) {
      
        setIsOpen(false);
        
        setTimeout(() => {

          const headerHeight = 70; 
          const yOffset = section.getBoundingClientRect().top - headerHeight;
    
          window.scrollBy({top: yOffset});
        }, 500); 
      }
    };


    return(
        <div className={isOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu}>
     
     <ul> 
        <li><a onClick={() => scrollToSection('home')}>Início</a></li>
        <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
        <li><a onClick={() => scrollToSection('tecnologies')}>Conhecimentos</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projetos</a></li>
        <li><a onClick={() => scrollToSection('contacts')}>Contatos</a></li>
      </ul>
               
        </div>
  );
    
}