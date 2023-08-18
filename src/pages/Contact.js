import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const email_apikey = process.env.REACT_APP_EMAILAPI_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_viau6j6",
        "template_3jn28hm",
        e.target,
        `${email_apikey}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name}onChange={handleForm} />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleForm}  />
        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleForm}  />
        <label>Message</label>
        <textarea type="text" name="message" value={formData.message} onChange={handleForm}  />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
