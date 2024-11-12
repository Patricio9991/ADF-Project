import { Fragment } from "react/jsx-runtime";
import { FaBookReader } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

import BookModal from "./BookModal";
import { useState } from "react";
import Swal from 'sweetalert2'

import cookie from 'js-cookie'

interface bookInfo{
    title:string,
    imgSRC: string,
    sinopsis:string,

}


export default function BookCard({title,imgSRC,sinopsis}:bookInfo){

    const [modalFlag,setModalFlag] = useState(false)

    const loggedIn = cookie.get().username? true : false
    console.log(loggedIn)

    return(
        <Fragment>
            <div className="w-[300px] p-6 hover:w-[310px] cursor-pointer">
                <h2 className="text-2xl font-semi-bold text-center pb-2
                relative inline-block text-black  before:absolute before:left-0 before:bottom-0 before:w-0 before:h-1.5 before:bg-purple-500 before:transition-all before:duration-500 hover:before:w-full">{title}</h2>
                <div className="bg-sky-500 shadow-lg pointer-events-none md:pointer-events-auto" onClick={()=>setModalFlag(true)}>
                    <img src={imgSRC || ""} alt={title}/>
                </div>
                <div className="flex flex-row gap-3 pt-2 ">

                    <FaBookReader size={30} className="hover:text-sky-600"/>

                    <CiStar  size={30} className="hover:text-yellow-400"/>
                    <FaMoneyBill size={30} className=" hover:text-green-500"/>
                    
                    
                    <a
                        className={`ml-auto hover:text-emerald-400`}
                        href={loggedIn ? `/downloads/${title}.pdf` : "#"}
                        download={loggedIn ? `${title}.pdf` : ""}
                        onClick={(e) => {
                            if (!loggedIn) {
                                e.preventDefault(); // Evita la acción predeterminada
                                Swal.fire({
                                    title: `Descargar ${title}?`,
                                    text: "Debes iniciar sesión para descargar el archivo.",
                                    icon: "question",
                                    showCancelButton: true,
                                    confirmButtonText: 'Iniciar sesión',
                                    cancelButtonText: 'Cancelar',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        // Redirigir a la página de inicio de sesión si es necesario
                                        window.location.href = '/login'; // Cambia esto a la ruta de tu inicio de sesión
                                    }
                                });
                            }else {
                                // Si el usuario está logueado, iniciamos la descarga
                                
                                Swal.fire({
                                    title: '¡Descarga en curso!',
                                    text: `¡${title} se descargará pronto!`,
                                    icon: 'success',
                                });
                                // Ajusta el tiempo de espera según sea necesario
                            }
                        }}
>
    <FaFileDownload size={30} />
</a>
                    
                    
                    {modalFlag ? <div className=""><BookModal title={title} imgSRC={imgSRC} sinopsis={sinopsis}
                    close={()=>setModalFlag(false)}/></div>: ""}
                </div>



            

        </div>
        </Fragment>
    )
}