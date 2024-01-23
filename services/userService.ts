import { SHOPBUY_API_URL } from "@/config"
import { IAuth } from "@/types/auth"

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
        const res = await fetch(`${SHOPBUY_API_URL}/users/login`, {
            method: 'POST',
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
            headers: { "Content-Type": "application/json" }
          })
      const result = await res.json()
      return  {res, result} as any
    }catch{
      console.error('Impossible de récupérer les informations de l\'utilisateur')
    }
  }
 
