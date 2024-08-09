
import './App.css'

import { RouterR } from './components/Menu/RouterR'
import { Header } from './components/Header';


function App() {
  

  return (
    <>


      


        <header className="head">          
        
          <Header 
            logo={'https://i.pinimg.com/564x/bd/1d/00/bd1d004e0903f0a5bc813c1c4cc7f9ee.jpg'} 
            mainBody={'Bienvenido a mi portafolio. Tal vez no hay mucho aquí pero espero que con el tiempo crezca y cambie mucho. Todo lo que ves lo hice yo.'} 
            toolbarBody={'toolbarbody'}/>
          
            
              <RouterR/>

            <footer className="footer">
              <p>Footer content here</p>
            </footer>


    </header>
        
      

  
      
    </>
  )
}

export default App
