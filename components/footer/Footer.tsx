import styles from '../styles/Footer.module.scss'
import  Link  from 'next/link'

const Footer = ()=>{
    return (
        <footer>
            <div className="social gap-2 flex justify-content-center">
            <i className="fa fa-facebook fa-lg"></i>
            <i className="fa fa-instagram fa-lg"></i>
            </div>

            <div className="contact gap-2 flex justify-content-center">
                <div>
                    0212 445 778
                </div>
                <div>
                    Kumasi - Ghana
                </div>
            </div>

            <p>
            2022 © COUNCIL OF BISHOPS AND APOSTLES, GHANA | PRIVACY POLICY
            </p>
     
        </footer>
    )
}

export default Footer
