import React from 'react';
import Head from 'next/head';

import Logo from '../assets/images/rocketseat.svg'
import { Container } from '../styles/pages/Home';


const Home: React.FC =()=> {
  return (
    <Container >
      <Head>
        <title>Home page</title>
      </Head>

        <Logo/>
        <h1>ReactJs Structured</h1>
        <p>A ReactJS + Next.js structured made by Roketseat</p>

    </Container>
  )
}

export default Home;
