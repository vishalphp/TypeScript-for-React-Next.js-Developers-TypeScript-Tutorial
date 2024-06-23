'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { getAPIData, FetchedData } from '@/utils/getAPI';
import Container from '../container/Container';


const API_URL = 'https://swapi.dev/api/starships/';


export default function API() {

    const [data, setData] = useState<FetchedData[]>([]);

    const setAPIData = useCallback(async()=>{
        const res =  await getAPIData({ apiURL: API_URL });
        setData(res.results);
    },[])

     useEffect(()=>{
        setAPIData();
    },[setAPIData])

    /*useEffect(()=>{
     console.log(data); 
     console.log("data change");
    },[data]);*/

  return (
    <>
    <div className='fullwidth graybackground faapiwraooer'>
        <Container>
            {data.map((resApi, index)=>{
                    return <div key={index} className='faqwrap'><div className='question'>{resApi.name}</div><div className='answer'>{resApi.manufacturer}</div></div>
            })}
      </Container>
      </div>
    </>
  )
}
