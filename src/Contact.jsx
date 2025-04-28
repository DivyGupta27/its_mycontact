import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeFun = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value }); 
  };
  const submitForm = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/auth/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    console.log(data);
    if(data.success){
        toast.success(`${data.message}`
          // , {
          //   position: "top-center",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: false,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "colored",
          //   }
          );
            setContact({
              name: "",
              email: "",
              subject: "",
              message: ""
            })
    }
    else{
        toast.error(`${data.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    }
  };
  return (
    <div className="grid bg-gray-300 h-screen max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="dark:text-gray-600">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img
          src="https://mambaui.com/assets/svg/doodle.svg"
          alt=""
          className="py-6 pr-36 h-52 md:h-64"
        />
      </div>
      <form noValidate="" className="space-y-6" onSubmit={submitForm}>
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            name="name"
            value={contact.name}
            onChange={changeFun}
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={contact.email}
            onChange={changeFun}
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={contact.subject}
            onChange={changeFun}
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={contact.message}
            onChange={changeFun}
            className="w-full bg-white p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-600 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
