import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight:["100", "200","300","400","500","600","700","800","900"], subsets:['latin']})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diogo Sarti',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}