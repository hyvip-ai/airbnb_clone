import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>AirBnB - Clone | NextJs</title>
      </Head>
        <Header />
        <Banner />

    </React.Fragment>
  )
}
