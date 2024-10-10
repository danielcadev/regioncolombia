"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { SignInForm } from "@/components/admin/signin/SignInForm"
import SignInButton from "@/components/admin/signin/GithubSignInButton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Verificar el estado de autenticación
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/session');
        const session = await response.json();
        if (session && session.user) {
          console.log("Usuario autenticado, redirigiendo al panel")
          router.push("/admin/dashboard")
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error al verificar la autenticación:", error)
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [router])

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p className="mt-4 text-muted-foreground">Verificando estado de autenticación...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Card className="w-[350px] max-w-[90vw]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Iniciar sesión</CardTitle>
          <CardDescription className="text-center">
            Elige tu método de inicio de sesión preferido
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <SignInForm onError={handleError} />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                O continúa con
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <SignInButton provider="github"/>
            {/* Añade aquí más botones de proveedores si es necesario */}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-center text-muted-foreground">
            Al iniciar sesión, aceptas nuestros Términos de Servicio y Política de Privacidad
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}