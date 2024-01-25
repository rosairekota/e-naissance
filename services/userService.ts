import { SHOPBUY_API_URL } from "@/config"
import { USSD_API_URL, fetchUssdApiWithToken } from "@/config/api-urls"
import { IAuth } from "@/types/auth"
import { getToken, hashData } from "./global"

export const fetchUserMe = async (token: string)=>{
    try {
      const res = await fetch(`${SHOPBUY_API_URL}/users/me`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" , 'Authorization': `Bearer ${token}`}
      })
      const result = await res.json()
      return  result
    }catch{
      console.error('Impossible de récupérer les informations de l\'utilisateur')
    }
  }

  export const loginUser = async (credentials: IAuth)=>{
    try {
      
        const res = await fetchUssdApiWithToken(`${USSD_API_URL}/authentication`, {
            method: 'POST',
            body: JSON.stringify({username: await hashData(credentials.username), password: await hashData(credentials.password)}),
          })
      const result = await res.json()
      return  {res, result, accessToken: getToken()} as any
    }catch{
      console.error('Impossible de récupérer les informations de l\'utilisateur')
    }
  }
 
