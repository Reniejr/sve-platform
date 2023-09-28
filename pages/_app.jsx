//* Layout
import RootLayout from '../app/layout';

//* Redux
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

//* Translations
import { NextIntlProvider, IntlErrorCode } from 'next-intl';

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
            <RootLayout>
                <Component { ...pageProps } />
            </RootLayout>
        </NextIntlProvider> 
      </Provider>

    )
}

export default myApp