import { BrowserRouter } from 'react-router-dom'
import { Layout } from './pages/Layout'






export default function App() {

  
  return (
    <div className="bg-red-900 h-fit relative">


      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
      
    </div>
  )
}