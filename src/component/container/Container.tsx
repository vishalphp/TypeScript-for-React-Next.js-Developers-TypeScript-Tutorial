import React from 'react';
import containerStyle from './container.module.css'

type containerProps = {
    children: React.ReactNode
}

export default function Container({children}: containerProps) {
  return (
    <div className={containerStyle.container}>{children}</div>
  )
}
