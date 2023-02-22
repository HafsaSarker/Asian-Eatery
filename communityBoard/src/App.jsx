import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './locations';
import './App.css';

const App = () => {
  const locations = data.map((place) => {
    return <Card 
      img = {place.imgSrc}
      name = {place.name}
      type = {place.type}
      info = {place.info}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {locations}
      </div>

    </div>
  )
}

export default App