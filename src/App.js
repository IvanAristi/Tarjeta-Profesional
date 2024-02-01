
//import './App.css'
import { AboutMe } from './components/AboutMe';
import { Avatar } from './components/Avatar';
import { Footer } from './components/Footer';
import { MyInfo } from './components/MyInfo';
import { SocialNetworks } from './components/SocialNetworks';
import './App.css'


const nombre = "Ivan Dario Aristizabal"
const profesion = 'Future Fullstack Developer'
const correo = 'darivanarsa@Gmail.com'



function App() {

  return (
    <div className="App">

  <div className='container2'>
    <Avatar name = {nombre}  />
    <MyInfo  name= {nombre}  profesion = {profesion} correo={correo} />
    <SocialNetworks/>
    <AboutMe />
    <Footer/>
    </div>



    </div>
  );
}

export default App;
