import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

//pages폴더는 실제 사이트에 뜰 View를 담당하는 폴더

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>puretension's portfolio</title>
        <meta name="description" content= "just me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <h1>HOME!!</h1> */}
      <h1 className="text-3xl font-bold underline">
        안녕하세요!
    </h1>
      
    </Layout>
  )
}
