import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { Dashboard } from './pages/dashboard'
import { Sendmoney } from './pages/send'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/> 
        <Route  path="/signin" element={<Signin/>}/> 
        <Route  path="/dashboard" element={<Dashboard/>}/>
        <Route path="/sendmoney" element={<Sendmoney/>}></Route> 
      </Routes>
   </BrowserRouter>
  )
}

export default App
