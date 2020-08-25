import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Nextjs / Tailwind / MDX Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose">
        <h1>
          Homepage Title
        </h1>
        <Link href="/article"><a>Article</a></Link>
      </main>

      <footer>
      </footer>
      
    </div>
  )
}
