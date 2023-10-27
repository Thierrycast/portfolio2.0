import styles from './aboutSection.module.scss'

export default function index() {
  return (
    <div id='about' className={styles.container} >
         <h1>Sobre( )</h1>
         <p>Olá, meu nome é <span>Thierry Barreto de Castro</span>, tenho 20 anos, moro em Sardoá-MG e sou <span>Desenvolvedor de Software Fullstack</span>. Sempre tive contato com tecnologia e nos últimos anos tenho me identificado bastante com essa área, o que me levou a estudar programação.</p>
         <h2>Trajetória:</h2>

        <div className={styles.trajetoriaContainer} >
        <div className={styles.trajetoria} >
            <div className={styles.linha}>
                <div className={styles.bolinha}>
                    <span></span>
                    <p>Desenvolvimento de Software Fullstack Cubos Academy</p>
                </div>
                <div className={styles.bolinha}>
                    <span></span>
                    <p>Análise e Desenvolvimento de Sistemas (ADS)</p>
                </div>
                <div className={styles.bolinha}>
                    <span></span>
                    <p>Entrevistador Técnico Cubos Academy</p>
                </div>
                <div className={styles.bolinha}>
                    <span></span>
                    <p>Desenvolvedor Freelancer</p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}
