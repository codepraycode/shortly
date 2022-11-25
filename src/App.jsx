import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PreFooter from '../components/PreFooter';
import Shorter from '../components/Shorter';
import StatsInfo from '../components/StatsInfo';


const App = () => {
  return (
    <>
      <Header/>
      <Shorter/>
      <StatsInfo/>
      <PreFooter/>
      <Footer/>
    </>
  )
}

export default App