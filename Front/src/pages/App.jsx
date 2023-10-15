import React from 'react'
import Navbar from "../componentes/navBar";
import Footer from "../componentes/footer"
import Cards from "../componentes/cards"
import Carrusel from "../componentes/carrusel" 
import '../App.css'

function App() {

  return (
    <div>
      <Navbar />
        <div>
          <Carrusel/>
          <Cards />
        
      </div> 
    <Footer />
    </div>

    
  )
}

export default App;
