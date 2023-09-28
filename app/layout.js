import '../styles/global.scss';

//* Router
import { useRouter } from 'next/router';

//* Components
import MainHeader from '@/modules/_main/components/MainHeader';
import MainFooter from '@/modules/_main/components/MainFooter';

export default function RootLayout({ children }) {
  const { pathname } = useRouter()

  return (
    <>
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

