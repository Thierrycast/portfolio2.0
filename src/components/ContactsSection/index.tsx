"use client"

import Styles from './contactsSection.module.scss'

import iconWhatsapp from '@/assets/icon-whatsapp.svg'
import iconGithub from '@/assets/icon-github.svg'
import iconLinkedin from '@/assets/icon-linkedin.svg'

import Image from 'next/image'

export default function ContactsSection() {
  return (
    <div id='contacts' className={Styles.container} >
      <h1>Contatos( )</h1>
      <div className={Styles.line} />
      <div className={Styles.contacts_infos} >
        <div className={Styles.left} >
            <h2>Tem um projeto de desenvolvimento e deseja conversar?</h2>
            <p>
                Entre em contato em uma das minhas <span>redes sociais</span> abaixo ou preencha o <span>formulário</span>.</p>
            <div className={Styles.social_medias} >
                <a target="_blank" href="https://wa.me/5533999595927">
                    <Image alt='' src={iconWhatsapp}/>WhatsApp
                </a>

                <a target="_blank" href="https://github.com/Thierrycast">
                    <Image alt='' src={iconGithub} /> Github
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/thierry-castro/">
                    <Image alt='' src={iconLinkedin} /> LinkedIn
                </a>
            </div>
        </div>

        <div className={Styles.right} >
            <form action="">
                <input type="text" placeholder='Nome completo' />
                <input type="text" placeholder='E-mail' />
                <textarea placeholder='Mensagem' name="" id=""></textarea>
                <button>Enviar</button>
            </form>
        </div>
      </div>
    </div>
  )
}
