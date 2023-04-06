import Banner from '../../Componentes/Banner/index.jsx'
import Cabecalho from '../../Componentes/Cabecalho'
import Menu from '../../Componentes/Menu/index.jsx'

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