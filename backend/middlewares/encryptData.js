import bcrypt from 'bcrypt'
import CryptoJS from 'crypto-js';

// Clave secreta (puedes almacenar esto en tus variables de entorno)
const secretKey = 'mysecretkey123456';  // Asegúrate de usar una clave segura

// Función para encriptar datos
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};

// Función para desencriptar datos
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};


export const encryptUserPassword = async (req,res,next)=>{
    try {
        const {username,phoneNumber,email,password} = req.body
        


        const hashedPassword = await bcrypt.hash(password, 10);

        req.body = {
            username,
            password:hashedPassword,
            email,
            phoneNumber
        }

        next()

    } catch (error) {
        console.log(error)
    }
}