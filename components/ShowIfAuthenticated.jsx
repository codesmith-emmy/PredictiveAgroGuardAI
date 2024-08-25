"use client"
import { useUser } from "@stackframe/stack"
export function ShowIfAuthenticated({children}){
    const user = useUser()
    return (user)?children:<></>
}