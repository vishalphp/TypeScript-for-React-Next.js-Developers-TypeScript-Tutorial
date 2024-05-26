import React, { Children } from 'react'
import styles from './FlexCard.module.css'

type childrenPros = {
 children: React.ReactNode
 layer: number
}

const FlexCard = ({children, layer}: childrenPros) => {

  return (
    <div className={`${styles.display_flex} ${styles[`layer__${layer}`]}`}>{children}</div>
  )
}

export default FlexCard;