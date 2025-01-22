

import './App.css'
import Charts from './components/Charts/Charts'
import MyNavBar from './components/Nav-bar/MyNavBar'
import PriceOptions from './components/price-options/PriceOptions'

function App() {
 

  return (
    <>
    <MyNavBar></MyNavBar>
    <PriceOptions></PriceOptions>
    <hr />
    <Charts></Charts>
 
    </>
  )
}

export default App
