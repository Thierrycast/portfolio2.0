import styles from './homeSection.module.scss'

export default function HomeSection() {
  return (
    <section className={styles.container} >
        <div className={styles.left_div} >
            <p>Olá, eu sou</p>
            <h2>Thierry Castro</h2>
            <p>DESENVOLVEDOR FULLSTACK</p>
            <div></div>
            <span>Te desejo boas vindas!</span>
        </div>

        <div className={styles.right_div}  >
            <p>Aqui você vai encontrar um pouco do meu <span>trabalho</span> e meus <span>contatos</span>.</p>
            <button>Currículo</button>
        </div>
    </section>
  )
}
