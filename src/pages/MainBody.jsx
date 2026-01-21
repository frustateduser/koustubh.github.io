import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

const MainBody = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center grow">
        <img 
          src="profile.jpg" 
          alt="profile" 
          id="profile" 
          className="w-48 h-48 sm:w-40 sm:h-40 lg:w-56 lg:h-56 border-4 border-primary rounded-full block mx-auto mt-20 lg:mt-32 transition-transform duration-500 hover:scale-110" 
        />
        <article className="w-full flex flex-col items-center">
          <div className="icon-box">
            <Link to="/about" className="flex justify-center items-center h-full w-full text-black text-2xl md:text-3xl no-underline [&:hover]:text-[#e96406] transition-all duration-500 flex-col">
              <p>About Me</p>
            </Link>
          </div>
          <div className="icon-box">
            <a
              href="https://www.linkedin.com/in/koustubhbadshah/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-full w-full text-black [&:hover]:text-[#e96406] transition-all duration-500 flex-col gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="w-10 h-10 md:w-12 md:h-12"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="icon-box">
            <a
              href="https://github.com/frustateduser"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-full w-full text-black [&:hover]:text-[#e96406] transition-all duration-500 flex-col gap-2"
            >
              <svg
                height="48"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width="48"
                data-view-component="true"
                className="w-10 h-10 md:w-12 md:h-12"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <p>GitHub</p>
            </a>
          </div>
          <div className="icon-box">
            <a
              href="https://twitter.com/koustubhbadshah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-full w-full text-black [&:hover]:text-[#e96406] transition-all duration-500 flex-col gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-twitter-x w-10 h-10 md:w-12 md:h-12"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
              <p>Twitter</p>
            </a>
          </div>
          <div className="icon-box">
            <Link 
              to="/contact"
              className="flex justify-center items-center h-full w-full text-black [&:hover]:text-[#e96406] transition-all duration-500 flex-col gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-person-lines-fill w-10 h-10 md:w-12 md:h-12"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></path>
              </svg>
              <p>Contact Me</p>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MainBody;
