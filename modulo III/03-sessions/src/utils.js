import bcrybt, { hash } from "bcrypt"

export const generaHash=password=>bcrybt.hashSync(password, bcrybt.genSaltSync(10))
export const validaHash=(pass, hash)=>bcrybt.compareSync(pass, hash)