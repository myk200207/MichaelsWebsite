import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
 const [error, setError] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const phone = form.current.phone_number.value;
    const name = form.current.user_name.value;
    const message = form.current.message.value;

    if(!email || ! phone || !name || !message){
      setError("Please fill in all fields.");
      return;
    }
    

    emailjs
      .sendForm("service_63zbp6s", "template_nuxyp54", form.current, {
        publicKey: "jzvu7aHQTAvWg_wTS",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact "
      className="bg-themeSecondColor text-white h-auto min-h-screen"
    >
      <div className="container">
        <br />
        <br />
        <div className=" flex flex-col justify-center items-center py-20 gap-2">
          <h1 className="font-bold text-5xl">Contact</h1>
          <br />
          <p>My journey</p>
          <div>Let's stay in touch!</div>
        </div>
        <div className="grid justify-center items-center font-bold">
         
          <form className="grid gap-2 w-[25vw]" ref={form} onSubmit={sendEmail}>
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
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
              />
            </div>

            <div className="form-group">
              {" "}
              <label>Name</label>
              <input
                className="form-control text-black"
                type="email"
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
            <br/>
            <div className="form-group flex justify-center ">
              <input
                className="bg-blue-600 form-control text-white border-blue-600 font-bold w-[50%]"
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
