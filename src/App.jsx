import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App"> 
      <Navbar/>
      {/* <h1 className="title">Mi primer proyecto React</h1> */}
      <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
     
     
    </div>
  )
}

export default App
