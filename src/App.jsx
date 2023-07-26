import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Template from './layouts/Template'
import Services from './pages/Services'
import Service from './pages/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/'>
				<Routes>
					<Route element={<Template />}>
						<Route path='/' element={<Home />}/>
						<Route path='/services' element={<Services />}/>
						<Route path='/services/:service' element={<Service />}/>
					</Route>
					<Route path='*' element={<Notfound />}/>
				</Routes>
			</BrowserRouter>
    </>
  )
}

export default App
