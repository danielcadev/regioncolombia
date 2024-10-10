// components/admin/users/UserManagementContainer.tsx
"use client"

import { Session } from "next-auth"
import dynamic from 'next/dynamic'

const UserManagement = dynamic(() => import('@/components/admin/users/UserManagement'), { ssr: false })

interface UserManagementContainerProps {
  initialSession: Session
}

export default function UserManagementContainer({ initialSession }: UserManagementContainerProps) {
  return <UserManagement initialSession={initialSession} />
}