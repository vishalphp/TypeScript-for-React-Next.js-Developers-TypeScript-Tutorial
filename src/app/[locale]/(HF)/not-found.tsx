import Container from '@/component/container/Container'
import { GridCard } from '@/component/flexCard/FlexCard'
import React from 'react'

export default function NotFound() {
  return (
    <>
    <Container>
    <GridCard layer={1}>
    <div className='linehight-50 p-40'>
     <h1>Custom Root Not Found Page</h1>
     <p>This is custom not found page developed by developer not coming through next js default page.</p>
     </div>
     </GridCard>
     </Container>
    </>
  )
}
