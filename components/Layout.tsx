import React from "react"
import { Children } from '../types/Types'
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import Meta from "./Meta"



const Layout = ( { children }: Children ) => {
  return (
          <>
          <Meta title="COBOGS " />
            <Nav />
            <main>
              { children }
            </main>
            <Footer />
          </>
      )
}

export default Layout