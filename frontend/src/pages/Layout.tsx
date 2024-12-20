import { IoChevronBackSharp } from "react-icons/io5";
import { Link,Routes,Route, useLocation } from "react-router-dom";
import Home from "./Home.js";
import Books from "./Books.js";
import WritingSection from "./WritingSection.js";
import PrivateRouteAuthor from "../components/PrivateRouteAuthor.js";
import Register from "./Register.js";
import LogIn from "./LogIn.js";

import {ADFbooks} from "../books/booksInfo.ts"
import ReadingPage from "./ReadingPage.tsx";



export function Layout() {
    const location = useLocation(); // Accedemos a la ubicación aquí
    // console.log(location.pathname);  // Mostramos el pathname actual
  
    const backArrow = location.pathname === '/' ? 'invisible':'visible'

    const novelsURL = ADFbooks.filter((item)=>{return item.titulo})

    return (
      <div className="">

        <Link to="/">
          <IoChevronBackSharp size={30} className={`sm:hidden absolute left-0 top-5 hover:cursor-pointer ${backArrow}`} />
        </Link>
  
        {/* Rutas dentro del layout */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historias" element={<Books />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          {novelsURL.map((item)=>{return <Route path={`read/${item.titulo}`} element={<ReadingPage  />} /> })}
          


            <Route element={<PrivateRouteAuthor/>}> {/*Ruta privada para escribir*/}
                <Route path="/nuevo" element={<WritingSection />} />
            </Route>

        </Routes>
      </div>
    );
  }