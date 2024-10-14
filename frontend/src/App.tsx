import { BrowserRouter } from 'react-router-dom'
import { Layout } from './pages/Layout'






export default function App() {

  
  return (
    <div className=" bg-red-800 w-full h-screen">


      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      
    </div>
  )
}