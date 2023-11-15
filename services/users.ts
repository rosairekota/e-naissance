
import { MANAGEMENT_API_URL } from "@/config/api-urls"
import { IUser } from "@/types/user"

export const fetchUsers = async (authorize?:string): Promise<IUser[]>  =>{
 try {
  const usersData = (await fetch(`http://143.110.169.188:3800/api/auth`, {
    method: 'GET',
    headers: { "Content-Type": "application/json",  'Authorization': 'Bearer ' + authorize}
  })).json()
  return usersData
 } catch (error) {
   throw new Error("error to")
 }
}


export const addUser = async (authorize:string, payload:Partial<IUser>): Promise<IUser[]>  =>{
  try {
   const newUser = (await fetch(`http://143.110.169.188:3800/api/auth/register`, {
     method: 'POST',
     body: JSON.stringify(payload),
     headers: { "Content-Type": "application/json",  'Authorization': 'Bearer ' + authorize??''}
   })).json()
   return newUser
  } catch (error) {
    throw new Error("error to")
  }
 }