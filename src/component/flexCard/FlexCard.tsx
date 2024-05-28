import React, { Children } from 'react'
import styles from './FlexCard.module.css'

type childrenPros = {
 children: React.ReactNode
 layer?: number,
 className?: string
}

const FlexCard = ({children, layer, className}: childrenPros) => {

  return (
    <div className={`${styles.display_flex} ${styles[`layer__${layer}`]} ${className}`}>{children}</div>
  )
}

export default FlexCard;