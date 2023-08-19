import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
const renderAlert = () => (
    <div className="renderAlert">
        <p>Your Message has been submitted Successfully</p>
    </div>
)
export default function Contact() {
  const email_apikey = process.env.REACT_APP_EMAILAPI_KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(false)

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
          setStatus(true)
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
    <div className="form-container">
        
      <form onSubmit={sendEmail}>
      { status && renderAlert()}
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
    </div>
  );
}
