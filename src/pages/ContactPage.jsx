import React, { useRef } from "react";
import { Footer, Navbar } from "../components";
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
  e.preventDefault();

  const form = document.getElementById("myForm"); // Get the form element by its ID

  let email = {
    name: form.querySelector("#Name").value,
    email: form.querySelector("#Email").value,
    message: form.querySelector("#Message").value
  };

  console.log(email);

  emailjs.sendForm("service_qc34lbd", "template_v6tmwlz", form, "jK5fnraftXHJYMBQ2") // Pass the form element as the third parameter
    .then(function() {
      console.log("SUCCESS!");
    })
    .catch(function(error) {
      console.log("FAILED...", error);
    });
};
// const sendEmail = (e) =>{
//   e.preventDefault();
//   let email = {
//     name:"",
//     email:"",
//     message:""
//   }
//   email.name = document.getElementById("Name").value ;
//   email.email = document.getElementById("Email").value ;
//   email.message = document.getElementById("Message").value ;
//   console.log(email)
//   // window.open('mailto:garcjorge1117@gmail.com');
//   // console.log("thanj yiy");

//   emailjs.sendForm('contact_service', 'contact_form', this)
//   .then(function() {
//       console.log('SUCCESS!');
//   }, function(error) {
//       console.log('FAILED...', error);
//   });
// }
const ContactPage = () => {

  const form1 = useRef();

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form id="myForm" ref={form1}  onSubmit={sendEmail}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  name="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
