import { Header } from '~/src/components/header/header'
import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gray-900 text-gray-50 '>
      <Header/>
        <div className='m-4'>
          {children}
        </div>
        <Providers/>
      </body>
    </html>
  )
}
