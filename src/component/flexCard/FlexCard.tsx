import React from 'react'
import styles from './FlexCard.module.css'

type childrenPros = {
 children?: React.ReactNode
 layer?: number,
 className?: string,
 dangerouslySetInnerHTML?: { __html: string };
}

const FlexCard = ({children, layer, className}: childrenPros) => {

  return (
    <div className={`${styles.display_flex} ${styles[`layer__${layer}`]} ${className}`}>{children}</div>
  )
}

export const GridCard = ({children, layer, className}: childrenPros) => {

  const classNameBreak= className?.split(' ');
  const coombinedClass = [ styles.display_grid, layer? styles[`layer__${layer}`]:'', ...classNameBreak? classNameBreak.map(classValue => styles[`${classValue}`] || classValue):[]].join(' ');

  return (
    <div className={`${styles.display_grid} ${styles[`layer__${layer}`]}  ${styles[`${className}`]} `} >{children}</div>
  )
}


export const GridCardDangerouslySetInnerHTML = ({layer, className, dangerouslySetInnerHTML}: childrenPros) => {

  const classNameBreak= className?.split(' ');
  const coombinedClass = [ styles.display_grid, layer? styles[`layer__${layer}`]:'', ...classNameBreak? classNameBreak.map(classValue => styles[`${classValue}`] || classValue):[]].join(' ');
  
  return (
    <div className={`${coombinedClass}`}  dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
  )
}


export default FlexCard;