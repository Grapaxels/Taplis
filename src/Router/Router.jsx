import React from 'react'
import { Route , Routes , BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Marque from '../Components/Marque'
import Home from '../pages/Home'
import WhatsNew from '../pages/WhatsNew'
import CordSets from '../pages/CordSets'
import CorSets from '../pages/CorSets'
import IndoWesterns from '../pages/IndoWesterns'
import KaftanSets from '../pages/KaftanSets'
import KurtiSets from '../pages/KurtiSets'
import Middies from '../pages/Middies'
import Sale from '../pages/Sale'
import Copyright from '../Components/Copyright'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Marque />
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/WhatsNew' element={<WhatsNew />} />
    <Route path='/CordSets' element={<CordSets />} />
    <Route path='/CorSets' element={<CorSets />} />
    <Route path='/IndoWesterns' element={<IndoWesterns />} />
    <Route path='/KaftanSets' element={<KaftanSets />} />
    <Route path='/KurtiSets' element={<KurtiSets />} />
    <Route path='/Middies' element={<Middies />} />
    <Route path='/Sale' element={<Sale />} />
    </Routes>
    <Footer />
    <Copyright/>
    </BrowserRouter>
    </>
    
  )
}
