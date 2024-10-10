"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

export function useAuth(requiredRole: "USER" | "ADMIN" = "USER", initialSession: Session | null = null) {
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(initialSession)
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">(
    initialSession ? "authenticated" : "loading"
  )

  useEffect(() => {
    let isMounted = true

    const checkAuth = async () => {
      try {
        const currentSession = await auth()
        console.log("Current session:", currentSession)
        
        if (isMounted) {
          setSession(currentSession)
          setStatus(currentSession ? "authenticated" : "unauthenticated")
        
          if (!currentSession) {
            router.push("/admin/signin")
          } else if (requiredRole === "ADMIN" && currentSession.user?.role !== "ADMIN") {
            console.log("User role:", currentSession.user?.role)
            router.push("/admin/dashboard")
          }
        }
      } catch (error) {
        console.error("Auth check failed", error)
        if (isMounted) {
          setStatus("unauthenticated")
          router.push("/admin/signin")
        }
      }
    }

    if (!initialSession) {
      checkAuth()
    }

    return () => {
      isMounted = false
    }
  }, [requiredRole, router, initialSession])

  return { session, status }
}