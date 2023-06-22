import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'
import Favorites from './favorites'
import Home from './Home'
import './index.css'

const App=()=> {

  return(
<Router>
<Routes>

<Route path="/" element={<Home />} />
<Route path="/favorites" element={<Favorites />}/>
<Route path="*" element={<Navigate to="/" />} />

</Routes>
</Router>
  )
  
}

export default App
