import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Aboutme = () => {
  return (
    <>
      <Header />
      <main className="w-4/5 sm:w-full md:w-4/5 mx-auto mt-12 md:mt-20 mb-12 md:mb-20 p-8 md:p-12 border-4 border-[#e96406] rounded-lg bg-white bg-opacity-90">
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-[#e96406] mb-6">About Me</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Hello, I'm Koustubh Badshah, an engineering student pursuing B.Tech
            from LNCT Bhopal. I'm passionate about web development,
            cybersecurity, ethical hacking, information technology, and
            information security. I enjoy creating websites and web applications
            that are secure, user-friendly, and innovative. I also like to
            explore and learn new technologies and tools that can help me
            improve my skills and knowledge in these domains. I have completed
            several projects and courses related to web development and
            cybersecurity, which you can find on my portfolio page. I'm also an
            eager learner who is always ready to learn new things and gain
            experience. I believe that learning is a lifelong process that never
            ends. I also like to collaborate with like-minded people and grow
            together. I think that teamwork and communication are essential for
            any successful project or career. I'm always open to new
            opportunities and challenges that can help me grow as a web
            developer and a cybersecurity enthusiast. If you are interested in
            working with me or knowing more about me, please feel free to
            contact me through my email or social media links. Thank you for
            visiting my website and have a great day! 😊
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Aboutme;
