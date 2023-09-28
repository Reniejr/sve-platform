//* Layout
import RootLayout from '../app/layout';

//* Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

//* Translations
import { NextIntlProvider, IntlErrorCode } from 'next-intl';

//*Font
import { Stardos_Stencil } from 'next/font/google'

const font = Stardos_Stencil({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block"
})

//* NEXTJS INTL FN
function onError(error) {
    if (process.env.NODE_ENV !== 'production') {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        console.warn(error);
      } else {
        console.error(error);
      }
    }
}

function getMessageFallback({ namespace, key, error }) {
    const path = [namespace, key].filter((part) => part != null).join('.');

    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return `${path} is not yet translated`;
    }
    return `Fix translation message at: ${path}`;
}

function myApp({ Component, pageProps }){
  //console.log("pageProps", pageProps)
    return (
      <Provider store={store}>
        <NextIntlProvider 
          messages={pageProps.messages} 
          onError={onError}
          getMessageFallback={getMessageFallback}
          >
            <style jsx global>{`
              html{
                font-family: ${font.style.fontFamily}
              }
            `}</style>
            <RootLayout>
                <Component { ...pageProps } />
            </RootLayout>
        </NextIntlProvider> 
      </Provider>

    )
}

export default myApp