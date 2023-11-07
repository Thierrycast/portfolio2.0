'use client'

import style from './header.module.scss'
import Image from 'next/image';
import Logo from '@/assets/logo.svg'
import ButtonMenu from '../buttonMenu';
import Sidebar from '../Sidebar';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
      <ul className={style.menuDesktop}>
        <li><a onClick={() => scrollToSection('home')}>Início</a></li>
        <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
        <li><a onClick={() => scrollToSection('tecnologies')}>Conhecimentos</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projetos</a></li>
        <li><a onClick={() => scrollToSection('contacts')}>Contatos</a></li>
      </ul>

      <div className={style.menuMobile} >
            <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
           </div>

    </header>
  )
}
