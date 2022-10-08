
import "./App.css"
import RickMorty from "./components/RickMorty"
import header from './assets/Header.webp'

function App() {
  return (
    <div>
      <img className="header" src={header} alt="" />
      <RickMorty/>
    </div>
  )

}

export default App



