import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";

const Contactme = () => {
  const [state, handleSubmit] = useForm("mpqqbdze");

  if (state.succeeded) {
    return (
      <>
        <Header />
        <div className="text-center border-4 border-[#e96406] bg-white bg-opacity-95 p-12 rounded-lg shadow-lg m-20">
          <h2 className="text-2xl font-bold text-[#e96406] mb-4">
            Thank You for Contacting Me!
          </h2>
          <p className="text-gray-700">
            I'll get back to you as soon as possible.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#e96406] mb-8">
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          id="myForm"
          className="w-full max-w-2xl bg-white bg-opacity-95 p-8 md:p-12 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-[#e96406] mb-6 text-center">
            Get In Touch
          </h1>

          <fieldset className="mb-6 border-0 p-0">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-800"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label
              htmlFor="phone"
              className="block mb-2 font-bold text-gray-800"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+XX XXXXX XXXXX"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </fieldset>

          <fieldset className="mb-6 border-0 p-0">
            <label
              htmlFor="subject"
              className="block mb-2 font-bold text-gray-800"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="What is this about?"
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </fieldset>

          <fieldset className="mb-8 border-0 p-0">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-800"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here..."
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#e96406] transition-colors duration-300 min-h-32 resize-vertical"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </fieldset>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="px-8 py-3 bg-[#e96406] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Contactme;
