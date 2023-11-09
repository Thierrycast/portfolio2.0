"use client"
import React from 'react';
import { useState } from 'react';

import Styles from './contactsSection.module.scss';

import iconWhatsapp from '@/assets/icon-whatsapp.svg';
import iconGithub from '@/assets/icon-github.svg';
import iconLinkedin from '@/assets/icon-linkedin.svg';

import Image from 'next/image';

import api from '@/services/api';

import {ToastError, ToastSuccess } from '@/helpers/Toasts';
import {toast} from 'react-toastify'
 

export default function ContactsSection() {

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      return ToastError("Preencha todos os campos do formulário.")
    }
    try {

      const sendEmail = await toast.promise((api.post(`/send-email`, {
        nome: form.nome,
        email: form.email,
        mensagem: form.mensagem,
      })),{
      pending: 'Enviando...',
      success: 'Email enviado',
      error: 'Falha ao enviar'
      })

      setForm({ nome: "", sobrenome: "", email: "", mensagem: "" });

      
      return sendEmail

    } catch (error) {
      setForm({ nome: "", sobrenome: "", email: "", mensagem: "" });
      return ToastError('Falha ao enviar')
    }
  };

  const handleChangeInput = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };

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
            <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='Nome completo'  
                  name="nome"
                  value={form.nome}
                  onChange={handleChangeInput}
                />
                <input 
                  type="email"  
                  placeholder='E-mail'
                  name="email"
                  value={form.email}
                  onChange={handleChangeInput}
                />
                <textarea 
                  placeholder='Mensagem'
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChangeInput}
                />
                <button>Enviar</button>
            </form>
        </div>
      </div>
    </div>
  )
}
