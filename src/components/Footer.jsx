import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="w-full h-28 bg-dark text-white text-lg md:text-xl font-bold tracking-widest flex justify-center items-center shadow-2xl bg-black bg-opacity-90 mt-auto"
        style={{ fontVariant: "small-caps" }}
      >
        <p>&copy; {new Date().getFullYear()} Koustubh Badshah</p>
      </footer>
      <div
        id="scroll-icon"
        className="fixed bottom-32 right-5 z-40 cursor-pointer"
      >
        <button
          onClick={scrollToTop}
          title="Go to top of the page"
          className="text-black hover:text-[#e96406] transition-colors duration-300 p-2 rounded-lg hover:bg-white hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="39"
            fill="currentColor"
            className="bi bi-arrow-up-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"></path>
          </svg>
        </button>
      </div>
      <a
        href="https://www.buymeacoffee.com/koustubhbadshah"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40"
        title="Buy me a coffee"
      >
        <button className="bg-[#FF5F5F] hover:bg-[#ff4444] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 flex items-center gap-2">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=koustubhbadshah&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
        </button>
      </a>
    </>
  );
};

export default Footer;

