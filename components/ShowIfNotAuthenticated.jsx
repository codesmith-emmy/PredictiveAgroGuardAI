"use client"
import { useUser } from "@stackframe/stack"
export function ShowIfNotAuthenticated({children}){
    const user = useUser()
    return (!user)?children:<></>
}