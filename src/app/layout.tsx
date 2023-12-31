import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {ToastContainer, Slide} from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thierry Castro',
  description: 'Bem-vindo ao meu portfolio pessoal, onde compartilho minha jornada, habilidades e projetos. Explore meu trabalho e entre em contato!',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons:'/iconpage.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          
          style={{fontSize : "1.4rem"}}
        />
      </body>
    </html>
  )
}
