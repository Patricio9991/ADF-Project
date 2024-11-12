import { BrowserRouter } from 'react-router-dom'
import { Layout } from './pages/Layout'






export default function App() {

  
  return (
    <div className=" bg-red-800 sm:w-full sm:min-h-screen md:h-fit ">


      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      
    </div>
  )
}