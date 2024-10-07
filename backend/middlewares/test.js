import bcrypt from 'bcrypt'

const password = "CalaCodigoz99"
const password2 = "LanaAurora"
const hash = await bcrypt.hash(password,10)


const match = await bcrypt.compare(password2,hash)

console.log(match)