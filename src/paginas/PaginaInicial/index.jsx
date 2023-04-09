import Banner from '../../componentes/banner/index.jsx'
import Cabecalho from '../../componentes/Cabecalho/index.jsx'
import Galeria from '../../componentes/Galeria/index.jsx'
import Menu from '../../componentes/Menu/index.jsx'
import Rodape from '../../componentes/rodape/index.jsx'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial () {
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />  
                    <Banner />                                                            
                </section>
            </main>
            <div className={styles.galeria}>
                <Galeria />
            </div>
            <Rodape />
        </>
    )
}