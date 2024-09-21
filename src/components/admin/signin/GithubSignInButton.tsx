"use client"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface SignInButtonProps {
  provider: string
  callbackUrl?: string
}

const providerIcons = {
  github: Github,
  // Añade aquí más iconos para otros proveedores si es necesario
}

export default function SignInButton({ provider, callbackUrl = "/admin/dashboard" }: SignInButtonProps) {
  const Icon = providerIcons[provider as keyof typeof providerIcons] || Github

  return (
    <Button 
      variant="outline" 
      className="w-full" 
      onClick={() => signIn(provider, { callbackUrl })}
    >
      <Icon className="mr-2 h-4 w-4" />
      Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </Button>
  )
}