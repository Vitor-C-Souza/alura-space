import Banner from '../../componentes/banner/index.jsx'
import Cabecalho from '../../componentes/Cabecalho.js'
import Menu from '../../componentes/Menu/index.js'

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
        </>
    )
}