import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-center p-6 md:p-8 m-5 bg-cover bg-center border-4 border-[#e96406] rounded-lg shadow-lg" style={{backgroundImage: "url(bghead.jpg)"}}>
      <article className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <img src="logo.png" alt="logo" className="w-24 h-24 md:w-28 md:h-28 border-4 border-[#e96406] rounded-lg shadow-lg" />
        <h1 className="text-3xl md:text-4xl italic font-bold text-white tracking-widest drop-shadow-lg" style={{fontVariant: "small-caps"}}>
          Koustubh Badshah
        </h1>
      </article>
    </header>
  );
};

export default Header;
