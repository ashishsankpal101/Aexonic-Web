import '../styles/globals.scss'
import '../public/scss/style.scss'
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  })
  return <Component {...pageProps} />
}

export default MyApp
