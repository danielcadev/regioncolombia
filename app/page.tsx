
import Scene3d from '@/components/MainPage/Scene3d'
import Cards from '@/components/MainPage/Cards'
import SearchBar from '@/components/MainPage/SearchBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
     
      <Scene3d/>
      <main className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white"> 
       <Cards/>
      </main>
    </div>
  )
}