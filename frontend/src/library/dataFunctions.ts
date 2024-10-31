import axios, { AxiosError } from 'axios' 





export const submitData = async (data:object)=>{console.log(data)
    await axios.post('http://localhost:3000/api/newWriting',data)
}


export const checkAxiosErrorMessage = (error:unknown)=>{

    if(axios.isAxiosError(error)){
        const errorMessage = error.response?.data.message
        return errorMessage
        
    }
}

export const registerDataUser = async (data:object)=>{
  
  try {
    
      await axios.post('http://localhost:3000/api/register',data)
  } catch (error) {
    console.log(error)
  }      
        
  
}



export const logInUser = async (data:object) =>{

        
    const response = await axios.post('http://localhost:3000/api/login',data)

    if(!response) throw new AxiosError("Algo salio mal :(")

    return response


}




export const findChaptes = async(data:object)=>{

    try {
        
        const response = await axios.post('http://localhost:3000/api/getChapters',data)
        return response
    } catch (error) {
        console.log(error)
    }



}