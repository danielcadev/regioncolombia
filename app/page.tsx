import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Layout/Navbar'
import Scene3d from '@/components/MainPage/Scene3d'
import Cards from '@/components/MainPage/Cards'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Scene3d/>
      <main className=" mx-auto py-12 px-4 sm:px-6 lg:px-8"> 
       <Cards/>
      </main>
    </div>
  )
}