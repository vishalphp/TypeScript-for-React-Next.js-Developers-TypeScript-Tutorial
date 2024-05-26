'use client'
import React from 'react'
import downloadStyle from './download.module.css'

type buttonProps = {
    buttonname?: string,
    downloadlink?: string
}
type downloadButtonDataProps = {
    children?: React.ReactNode,
    downloadButtonData: buttonProps[],
}

const HeroDownloadButton = ({children, downloadButtonData}:downloadButtonDataProps) => {

  const buttonClick =()=>{
    window.open(downloadButtonData[1]?.downloadlink,"_blank");
  }

    return (
        <>
          <button onClick={buttonClick} className={`${downloadStyle.download__button}`}>{downloadButtonData[0]?.buttonname}</button>
        </>
  )
}
export default HeroDownloadButton;