import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layouts/header/Header'
import Sobre from './components/Home/Sobre'
import Acervo from './components/Home/Acervo'
import LinhaDoTempo from './components/Home/LinhaDoTempo'
import DivinasAxilas from './components/Home/DivinasAxilas'
import VoceComSuvaco from './components/Home/VoceComSuvaco'
import Footer from './layouts/footer/Footer'

import PageSobre from './components/pasteSobre/PageSobre'
import PageTimeline from './components/pasteTimeline/PageTimeline';

import Ano2012 from './components/pasteTimeline/anos/Ano2012';

import sectionsPosts from './components/json/sections.json'

function App() {

  return (
    <div>
          <Header/>
          <Routes>

            {/* Página principal */}
            <Route path="/" element={
              <>
              {/* Criação de cada section post baseado no arquivo json*/}
              <Sobre {...sectionsPosts.sections[1]}/>
              <Acervo {...sectionsPosts.sections[2]}/>
              <LinhaDoTempo {...sectionsPosts.sections[3]}/>
              <DivinasAxilas {... sectionsPosts.sections[4]}/>
              <VoceComSuvaco {... sectionsPosts.sections[5]}/>
          
              </>
            }
            />

            {/* Outras páginas*/}
            <Route path="/sobre" element={<PageSobre  {... sectionsPosts.sections[1]}/>} /> 
            <Route path="/timeline" element={<PageTimeline {... sectionsPosts.sections[3]}/>} />
            <Route path="/Ano2012" element={<Ano2012/>} />
            
          </Routes>
        
        <Footer/>
    </div>
  )
}

export default App
