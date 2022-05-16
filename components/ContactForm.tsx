import React, { SyntheticEvent, useState } from 'react'

const ContactForm = () => {

  const [ inputs,setInputs ] = useState({})


  const handleInput = (e:any) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }

  const sendForm = ( e:SyntheticEvent ) => {
    e.preventDefault()

    console.log(inputs)

  
  }

    return (
      <>
        <h2>Contact Us</h2>
        <form onSubmit={sendForm}>

          <div className="form-group">
            <input type="text" onChange={handleInput} name="firstname" id="firstname" placeholder=' ' />
            <label htmlFor="firstname">First Name</label>
          </div>

          <div className="form-group">
            <input type="text" onChange={handleInput} name="lastname"  id="lastname" placeholder=' ' />
            <label htmlFor="lastname">Last Name</label>
          </div>

          <div className="form-group">
            <input type="text" onChange={handleInput} name="email"  id="email" placeholder=' '/>
            <label htmlFor="email">Email</label>
          </div>

          <textarea  onChange={handleInput} name="message"  className="" ></textarea>
          <button type="submit">SEND</button>
        </form>

      <style jsx>
        {`
        .form-group{
          position: relative;
        }
          input{
            width: 100%;
            padding: .2em; 
            border: solid .1px #ccc;
            margin-bottom: 1.2em;
          }
          textarea{
            width: 100%;
          }
          button{
            width: 100%;
            padding: .5em;
            cursor: pointer;
          }

          label{
            position: absolute;
            top: 0;
            left: 1rem;
            font-size: 1.2rem;
          }

          h2{
            margin-bottom: 1em;
          }
          
        `}
      </style>
      </>
    )

}

export default ContactForm 