'use client'

import styles from './projectsSection.module.scss'
import {projects} from '@/data/projects'

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