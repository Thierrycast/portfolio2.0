'use client'

import style from './header.module.scss'
import Image from 'next/image';
import Logo from '@/assets/logo.svg'

export default function Header() {

  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 70; 
      const yOffset = section.getBoundingClientRect().top - headerHeight;

      window.scrollBy({
        top: yOffset,
      });
    }
  };

  return (
    <header className={style.container}>
      <Image onClick={() => scrollToSection('home')} src={Logo} alt="Logo" className={style.logo} />
      <ul className={style.menu}>
        <li><a onClick={() => scrollToSection('home')}>Início</a></li>
        <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
        <li><a onClick={() => scrollToSection('tecnologies')}>Conhecimentos</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projetos</a></li>
        <li><a onClick={() => scrollToSection('contacts')}>Contatos</a></li>
      </ul>
    </header>
  )
}
