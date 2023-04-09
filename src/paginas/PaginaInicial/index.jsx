import styles from "./PaginaInicial.module.scss";

import Banner from "componentes/banner/index.jsx";
import Cabecalho from "componentes/Cabecalho/index.jsx";
import Galeria from "componentes/Galeria/index.jsx";
import Menu from "componentes/Menu/index.jsx";
import Populares from "componentes/Populares/index.jsx";
import Rodape from "componentes/rodape/index.jsx";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}
