import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
 const [error, setError] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const phone = form.current.phone_number.value;
    const name = form.current.phone_number.value;
    const message = form.current.message.value;

    if(!email || !phone || !name ||!message){
      setError("Please fill in all fields.");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
      setError("Please enter a valid email.")
      return false;
    }
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid phone number (e.g., 123-456-7890).");
      return false;
    }
  
    emailjs
      .sendForm("service_63zbp6s", "template_nuxyp54", form.current, {
        publicKey: "jzvu7aHQTAvWg_wTS",
      })
      .then(
        () => {
          form.current.reset()
          console.log("sent message");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="ContactPage" className=" text-white h-auto min-h-screen">
      <div className="container">
        <br />
        <br />
        <div className=" flex flex-col justify-center items-center py-20 gap-2">
          <h1 className="font-bold text-5xl">Contact</h1>
          <br />
          <div>Feel free to contact me!</div>
        </div>
        <div className="grid justify-center items-center font-bold">
          <form className="grid gap-2 w-[75vw] sm:w-[50vw] lg:w-[25vw]" ref={form} onSubmit={sendEmail}>
              {(error && error.includes("fill") && (<span className="text-red-500 text-sm">{error}</span>))}
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control text-black"
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
              />
     
            </div>
            <div className="form-group">
              {" "}
              <label>Phone</label>
              <input
                className="form-control text-black"
                type="tel"
                name="phone_number"
                placeholder="123-456-7890"
              />
            </div>
            {(error && error.includes("phone")) && (<span className="text-red-500 text-sm">{error}</span>)}
        

            <div className="form-group">
              {" "}
              <label>Name</label>
              <input
                className="form-control text-black"
                type="text"
                name="user_name"
                placeholder="John Smith"
              />
            </div>
    

            <div className="form-group">
              {" "}
              <label>Message</label>
              <textarea
                className="form-control h-60"
                name="message"
                placeholder="Hello"
              />
            </div>

            <br />
            <div className="form-group flex justify-center ">
              <input
                className="cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out bg-transparent form-control text-white border-white font-bold w-[auto]"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact
