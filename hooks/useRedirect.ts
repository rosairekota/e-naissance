import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const useRedirect = async ()=>{
    const session = await getServerSession()
    if (session) {
      redirect('/admin')
    }
}