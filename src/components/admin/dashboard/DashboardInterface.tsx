// /app/admin/dashboard/page.tsx
import React from 'react';
import { auth } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ImageIcon, FileText, Settings } from "lucide-react";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardCard = ({ title, icon: Icon, link }: { title: string; icon: React.ElementType; link: string }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-lg font-bold">{title}</CardTitle>
      <Icon className="h-6 w-6 text-primary" />
    </CardHeader>
    <CardContent>
      <Link href={link}>
        <Button className="w-full mt-4">View {title}</Button>
      </Link>
    </CardContent>
  </Card>
);

export default async function DashboardPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === 'ADMIN';

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Quick Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Action</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isAdmin && <DropdownMenuItem>Manage Users</DropdownMenuItem>}
            <DropdownMenuItem>View Content</DropdownMenuItem>
            {isAdmin && <DropdownMenuItem>Manage Media</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {isAdmin && <DashboardCard title="Users" icon={Users} link="/admin/dashboard/users" />}
        <DashboardCard title="Content" icon={FileText} link="/admin/dashboard/content" />
        {isAdmin && <DashboardCard title="Media" icon={ImageIcon} link="/admin/dashboard/media" />}
        <DashboardCard title="Settings" icon={Settings} link="/admin/dashboard/settings" />
      </div>
      
      {isAdmin && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>New user registered</span>
                <span className="text-sm text-muted-foreground">2 minutes ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span>New media uploaded</span>
                <span className="text-sm text-muted-foreground">1 hour ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Content updated</span>
                <span className="text-sm text-muted-foreground">3 hours ago</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}