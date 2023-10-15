import { getProjects, getPage } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
export default async function Home() {

  const projects = await getProjects()
  return (
   <div className=''>
    <h1 className='text-7xl font-extrabold'>Hallo from <span className='bg-gradient-to-r from-orange-200 to-purple-600
    bg-clip-text text-transparent'>Slomka</span>!</h1>
    <p className='mt-3 text-xl text-gray-500'>Hallo auf der neuen seite</p>

    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

   
   {projects.map((project) => (
    
     
     <Link href={`/projects/${project.slug}`} key={project._id} className='hover:scale-105 hover:border-blue-500 transition p-3 border border-gray-500 rounded-md'>
      {project.image && (
        
        <Image src={project.image} alt={project.name} width={250} height={100} className="object-cover rounded-lg border"/>
      )}


      <div className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-orange-500 to-blue-500'>

    {project.name}
      </div>
    
    </Link>
    

   ))}
 </div>
   </div>
  )
}