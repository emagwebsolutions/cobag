import  Link  from 'next/link'
import Hamburgeropen from './Hamburgeropen'
import Hamburgerclose from './Hamburgerclose'
import React, { useRef,useEffect } from 'react'



const Nav = ()=>{

    const nav = useRef<HTMLElement>(null)

    const opennav = ( e:React.MouseEvent<HTMLDivElement> )=>{
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'false'){
            cur && cur.setAttribute('data-nav', 'true')
        }
    }

    const closenav = ( e:React.MouseEvent<HTMLDivElement> )=>{ 
        const cur = nav.current? nav.current : ''
        const navElem = cur ? cur.getAttribute('data-nav') : ''
        if(navElem === 'true'){
            cur && cur.setAttribute('data-nav', 'false')
        }
    }


    useEffect(() => {
        const onclick = (ev: any) => {
            if(ev.target.matches('nav')){
                ev.target.setAttribute('data-nav', 'false')
            }
        }
          
        window.addEventListener('click', onclick);
        
        return () => {
          window.removeEventListener('click', onclick);
        }
      }, []);


    return (
        <> 
 

        <Hamburgeropen opennav = {opennav}  name="U & A Creation" />

        <nav data-nav="false" ref={nav} className="nav">
            <div className="nav-wrapper">

            <Hamburgerclose closenav = {closenav}  />

            <div className="logo">
                <img src="./images/logo.jpg" alt="Logo" />
            </div>
            <ul>
                <li className="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/#">About Us</Link>
                </li>
                <li>
                    <Link href="/#">Services</Link>
                </li>
                <li>
                    <Link href="/#">Portfolio</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav