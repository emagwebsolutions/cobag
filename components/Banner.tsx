import React from "react"
import { Children } from '../types/Types'
import Nav from "./nav/Nav"
import Footer from "./footer/Footer"
import Meta from "./Meta"

type banner = {
  img: string 
  title: string 
}

const Banner = ( { img,title }: banner ) => {
  return (
        <>
          <div className="banner">
            <h1 className="banner-heading">{title}</h1>
          </div>

          <style jsx>
            {
              `
              .banner{
                  background-image: url(${img});
                  background-size: cover; 
                  background-position: center;
                  width: 100vw;
                  height: 80vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }

              .banner-heading{
                font-size: 10rem;
                color: #fff;
                text-shadow: 1rem 1rem 1rem rgba(0,0,0, .7);
              }
              
              `
            }

          </style>
        </>



      )
}

export default Banner