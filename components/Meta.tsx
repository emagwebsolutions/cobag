import React from "react"
import Head from "next/head"
import { Title } from '../types/Types'



const Meta = ( { title }: Title ) => {
  return (

        <Head>
          <meta name="description" content="Bible School in Ghana Santasi" />
          <meta name="keywords" content="Bible,School,Ghana,Santasi" />
          <link rel="icon" href="/favicon.ico" />
          <title>{ title }</title>
        </Head>

      )
}

export default Meta