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
                <Link href="/"><a><img src="/logo.jpg" alt="Logo" /></a></Link>
            </div>

            <ul>
                <li className="active">
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                </li>

                <li>
                    <Link href="/whoweare">
                        <a>WHO WE ARE</a>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/codeofcontact">
                        <a>CODE OF ETHICS</a>  
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>CONTACT US</a>
                    </Link>
                </li>
  
            </ul>

            </div>
        </nav>
        </>
    )
}

export default Nav