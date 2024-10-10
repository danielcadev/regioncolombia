"use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Lock, User } from "lucide-react"

interface SignInFormProps {
  onError: (error: string) => void;
}

export function SignInForm({ onError }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })
      if (result?.error) {
        onError(result.error)
      } else if (result?.ok) {
        console.log("Inicio de sesión exitoso, redirigiendo...")
        router.push("/admin/dashboard")
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error)
      onError("Ocurrió un error inesperado. Por favor, intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input name="email" id="email" type="email" className="pl-8" required placeholder="tu@email.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <div className="relative">
          <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input name="password" id="password" type="password" className="pl-8" required placeholder="••••••••" />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          "Iniciando sesión..."
        ) : (
          <>
            <User className="mr-2 h-4 w-4" /> Iniciar sesión con Email
          </>
        )}
      </Button>
    </form>
  )
}