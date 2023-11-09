import styles from './aboutSection.module.scss'

export default function index() {
  return (
    <div id='about' className={styles.container} >
         <h1>Sobre( )</h1>
         {/* <p className={styles.about_text} >Olá, meu nome é <span>Thierry Barreto de Castro</span>, tenho 20 anos, moro em Sardoá-MG e sou <span>Desenvolvedor de Software Fullstack</span>. Sempre tive contato com tecnologia e nos últimos anos tenho me identificado bastante com essa área, o que me levou a estudar programação.</p> */}

         <p className={styles.about_text}>
            Meu nome é <span>Thierry Barreto de Castro</span>, tenho 20 anos, e sou um <span>desenvolvedor de software fullstack</span>.<br/><br/> Atualmente, estou cursando Análise e Desenvolvimento de Sistemas (ADS) e aprimorando meus estudos em novas tecnologias e linguagens. Estou sempre em busca de novas oportunidades para aprender e crescer, e estou ansioso para contribuir para o desenvolvimento de produtos inovadores que possam impactar positivamente a vida das pessoas.
        </p>


         <h2>Trajetória:</h2>

        <div className={styles.trajetoriaContainer} >
            <div className={styles.trajetoria} >
                <div className={styles.item_trajetoria} >
                    <div className={styles.bolinha}  />
                    <p>Análise e Desenvolvimento de Sistemas (ADS)</p>
                </div>
                <div className={styles.item_trajetoria} >
                    <div className={styles.bolinha}  />
                    <p>Desenvolvimento de Software Cubos Academy</p>
                </div>
                <div className={styles.item_trajetoria} >
                    <div className={styles.bolinha}  />
                    <p>Entrevistador Técnico Cubos Academy</p>
                </div>
                <div className={styles.item_trajetoria} >
                    <div className={styles.bolinha}  />
                    <p>Desenvolvedor <br/>Freelancer</p>
                </div>

            </div>
        </div>

    </div>
  )
}
