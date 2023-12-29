import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Link href={'/dashboard'} className='px-6 py-2 text-black uppercase bg-blue-300 border'>Dashboard</Link>
    </main>
  )
}
