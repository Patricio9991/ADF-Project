import axios from 'axios' 





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
  
        
 await axios.post('http://localhost:3000/api/register',data)
        
  
}



export const logInUser = async (data:object) =>{

        
    return await axios.post('http://localhost:3000/api/login',data)


}
