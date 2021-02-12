import Head from 'next/head'
import Link from 'next/link'
// import Date from '../components/date'
import Layout, { siteTitle } from 'components/layout'


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
<Layout>
      <Head>
        <title>Chart - {siteTitle}</title>
      </Head>
  <div className="space-y-8">  
    <div className="flex flex-row">
      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      
      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 text-center">
          <img className="text-center h-50 w-50" src="./images/Montino Gallina.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>

      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>
    </div>


    <div className="flex flex-row">
      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>

    
      
      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>


      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>

      <div className="h-70 w-60 mx-auto bg-white rounded-xl shadow-md">
      <div className="md">
        <div className="md:flex-shrink-0 content-center">
          <img className="h-50 w-50" src="./images/peluche.jpg" alt="Peluche" />
        </div>
        <div className="p-8 text-center">
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Peluche Giocattolo</a>
        </div>
      </div>
      </div>
    </div>
  </div>    


</Layout>

  )
  }
