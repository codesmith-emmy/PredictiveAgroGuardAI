"use client"
import { useUser } from "@stackframe/stack"
export function IsAuthenticated({children}){
    useUser({ or:"redirect"})
    return children
}