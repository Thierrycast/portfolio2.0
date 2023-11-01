import styles from './homeSection.module.scss'

export default function HomeSection() {
  return (

    <div className={styles.home} >
      <section id='home' className={styles.container} >
          <div className={styles.left_div} >
              <div>
                <p>Olá, eu sou</p>
                <h2>Thierry Castro</h2>
                <p>DESENVOLVEDOR FULLSTACK</p>
                <div></div>
                <span>Te desejo boas vindas!</span>
              </div>

              
          </div>

          <div className={styles.right_div}  >
              <p>Aqui você vai encontrar um pouco do meu <span>trabalho</span> e meus <span>contatos</span>.</p>
              <a target='_blank' href='https://docs.google.com/document/d/1la5h_fkWi6YI20JM0pwotjAA0AErxRdxC3LB2lEQDyM/edit?usp=sharing' >Currículo</a>
          </div>
      </section>
    </div>

    
  )
}
