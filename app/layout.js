import '../styles/global.scss';

//* Router
import { useRouter } from 'next/router';

//*Font
import { Stardos_Stencil } from 'next/font/google'

const font = Stardos_Stencil({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block"
})

//* Components
import MainHeader from '@/modules/_main/components/MainHeader';
import MainFooter from '@/modules/_main/components/MainFooter';

export default function RootLayout({ children }) {
  const { pathname } = useRouter()

  return (
    <>
      <style jsx global>{`
        html{
          font-family: ${font.style.fontFamily}
        }
      `}</style>
      {
        pathname !== "/" ? null :
        <MainHeader/>
      }
      { children }
      {
        pathname !== "/" ? null : <MainFooter/>
      }
    </>
  )
}

