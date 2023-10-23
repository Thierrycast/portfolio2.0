import { Span } from 'next/dist/trace'
import style from './header.module.scss'
import Image from 'next/image';
import Logo from '@/assets/logo.svg'

export default function Header() {

  

  return (
    <header className={style.container} >
        <Image src={Logo} alt='Logo' className={style.logo}/>
        <ul className={style.menu} >
            <li><a>Início</a></li>
            <li><a>Sobre</a></li>
            <li><a>Conhecimentos</a></li>
            <li><a>Projetos</a></li>
            <li><a>Contatos</a></li>
        </ul>
    </header>
  )
}
