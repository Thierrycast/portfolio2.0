'use client'

import index from '../AboutSection'
import styles from './projectsSection.module.scss'

import fuja from '../../assets/jobs/fuja.png'

const projects = [
  {
    name: "Projeto Fuja",
    description: "Desenvolvimento de um site para uma empresa de audiovisual, utilizando React, TypeScript e responsividade.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: '../../assets/jobs/fuja.png'
  },
  {
    name: "Portfólio Fotografo",
    description: "Criação de um portfólio online para um fotógrafo, com o uso de Next.js, TypeScript e Sass.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: "Imagem: Insira a URL aqui" 
  },
  {
    name: "APIs de Tarefas",
    description: "Desenvolvimento de três APIs com o mesmo propósito: gerenciar tarefas. Feitas em TypeScript, C# e Java.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: "Imagem: Insira a URL aqui" 
  },
  {
    name: "Projeto Fuja",
    description: "Desenvolvimento de um site para uma empresa de audiovisual, utilizando React, TypeScript e responsividade.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: "Imagem: Insira a URL aqui" 
  },
  {
    name: "Portfólio Fotografo",
    description: "Criação de um portfólio online para um fotógrafo, com o uso de Next.js, TypeScript e Sass.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: "Imagem: Insira a URL aqui" 
  },
  {
    name: "APIs de Tarefas",
    description: "Desenvolvimento de três APIs com o mesmo propósito: gerenciar tarefas. Feitas em TypeScript, C# e Java.",
    repo: "Repositório: Insira a URL aqui", 
    site: "Site: Insira a URL aqui", 
    img: "Imagem: Insira a URL aqui" 
  },
];



export default function ProjectsSection() {

  return (
    <div id='projects' className={styles.container}>

      <div>
        <h1>Projetos( )</h1>
        <p>Clique para saber mais sobre os projetos.</p>
      </div>

      <div className={styles.projects} >
      {projects.map((project, index)=>(
        <div key={index} className={styles.projects_item} >
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>

          <div className={styles.item_links} >
            <a href="">Visitar repositorio</a>
          </div>
        </div>

      ))}
      </div>
      <span>Repositórios no GitHub</span>

    </div>
  )
}