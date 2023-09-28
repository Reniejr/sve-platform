import React from 'react'

//*
import { Stardos_Stencil } from 'next/font/google'

//* Components
import Hero from '@/modules/homepage/components/Hero';
import AboutUs from '@/modules/homepage/components/AboutUs';
import OurServices from '@/modules/homepage/components/OurServices';
import Testimonials from '@/modules/homepage/components/Testimonials';
import Faq from '@/modules/homepage/components/Faq';
import Gallery from '@/modules/homepage/components/Gallery';
import JoinNetwork from '@/modules/homepage/components/JoinNetwork';
import ContactUs from '@/modules/homepage/components/ContactUs';

//* Styles
import globals from '@/styles/Main.module.scss';
import styles from '@/modules/homepage/styles/HomePage.module.scss';

const font = Stardos_Stencil({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block"
})

const Home = () => {
  return (
    <div className={`${globals["page"]} ${globals["full-page"]}`}
      id={styles["homepage"]}
    >
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <Testimonials />
      <Faq/>
      <Gallery/>
      <JoinNetwork/>
      <ContactUs/>
    </div>
  )
}

export async function getStaticProps({locale}){
  const messages = {
    header: (await import(`../translations/header/${locale}.json`)).default,
    homepage: (await import(`../translations/home/${locale}.json`)).default,
    about_us: (await import(`../translations/about-us/${locale}.json`)).default,
    our_services: (await import(`../translations/our-services/${locale}.json`)).default,
    testimonials: (await import(`../translations/testimonials/${locale}.json`)).default,
    faq: (await import(`../translations/faq/${locale}.json`)).default,
    join_network: (await import(`../translations/join-network/${locale}.json`)).default,
    contact_us: (await import(`../translations/contact-us/${locale}.json`)).default,
    footer: (await import(`../translations/footer/${locale}.json`)).default,
  }
  return {
    props: {
      messages
    }
  }
}

export default Home