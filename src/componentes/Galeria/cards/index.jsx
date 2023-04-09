import React from 'react'

import Card from './card/index.jsx'

export default function Cards( {itens, styles} ) {
  return (
    <ul className={styles.galeria__cards}>
            {itens.map((foto) => (<Card key={foto.id} foto={foto} styles={styles} />))}
        </ul>
  )
}
