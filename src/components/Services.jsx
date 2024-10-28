import React from "react";
import web_icon from "../assets/web-icon.png";
import mobile_icon from "../assets/mobile-icon.png";
import ui_icon from "../assets/ui-icon.png";
import graphics_icon from "../assets/graphics-icon.png";
import right_arrow from "../assets/right-arrow.png";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Delivering dynamic, responsive web & mobile applications through robust
        expertise in MongoDB, Express, React, and Node.js, ensuring seamless
        user experience and backend efficiency.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={web_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Web Development
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Web development involves creating dynamic, responsive websites that
            deliver engaging user experiences through modern technologies and
            design practices.
          </p>
          <a
            href="https://www.geeksforgeeks.org/web-development/"
            className="flex items-center gap-2 text-sm mt-5"
            target="_blank"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={mobile_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Mobile App Development
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Mobile app development using React Native enables the creation of
            high-performance, cross-platform applications with a native look and
            feel, ensuring seamless user experiences.
          </p>
          <a
            href="https://reactnative.dev/"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={ui_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            UI/ UX design
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Integrating UI/UX in development ensures that applications are not
            only visually appealing but also user-friendly, enhancing overall
            functionality and user satisfaction.
          </p>
          <a
            href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
        <div
          className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <img src={graphics_icon} alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            AI & ML Integration
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Integrating AI and ML into web and mobile applications enhances
            functionality, personalizes user experiences, and drives data-driven
            decision-making.
          </p>
          <a
            href="https://www.computer.org/publications/tech-news/trends/ai-and-machine-learning-integration"
            target="_blank"
            className="flex items-center gap-2 text-sm mt-5"
          >
            Read more <img src={right_arrow} alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
