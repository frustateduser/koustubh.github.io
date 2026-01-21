import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contactme = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");

    const clearForm = () => {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    };

    const handelSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("subject", subject);
      formData.append("message", message);

      await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          redirect: "manual",
        }).then((response) => {
            console.log("Message sent successfully:", response);
            alert("Message sent successfully!");
            clearForm();
        }).catch((error) => {
          console.error("Error sending message:", error);
        });

      
    };


  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e96406] mb-8">Contact Me</h1>

        <form id="myForm" className="w-full max-w-2xl bg-white bg-opacity-95 p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-[#e96406] mb-6 text-center">Get In Touch</h1>
          
          <fieldset className="mb-6 border-0 p-0">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-800">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label htmlFor="phone" className="block mb-2 font-bold text-gray-800">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+91 XXXXX XXXXX"
                value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label htmlFor="subject" className="block mb-2 font-bold text-gray-800">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="What is this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
          </fieldset>

          <fieldset className="mb-8 border-0 p-0">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-800">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
                value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300 min-h-32 resize-vertical"
            ></textarea>
          </fieldset>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="submit" 
              onClick={handelSubmit}
              className="px-8 py-3 bg-[#e96406] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
            <button 
              type="reset"
              onClick={clearForm}
              className="px-8 py-3 bg-gray-400 text-gray-800 font-bold rounded-lg hover:bg-gray-500 transition-colors duration-300 transform hover:scale-105"
            >
              Clear Form
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Contactme;
