import React from "react";
import profile_img from "../assets/profile-img.png";
import profile_img2 from "../assets/profile-img2.png";
import hand from "../assets/hand-icon.png";

import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";
import resume from "/Bachir_Ahmed_Khan_MERN_CV.pdf";

{
  /* <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
         Hi! I'm Basir Khan{" "}
         <img src="./assets/hand-icon.png" alt="" className="w-6" />
      </h3> */
}

// const Header = () => {
//   return (
//     <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
//       <img src={profile_img} alt="" className="rounded-full w-32" />
//       <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
//         Hi! I'm Basir Khan{" "}
//         <img src="./assets/hand-icon.png" alt="" className="w-6" />
//       </h3>
//       <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
//         Software Developer from Bangalore focused on MERN Full-Stack.
//       </h1>
//       <p className="max-w-2xl mx-auto font-Ovo">
//         I am a Software Developer with a strong focus on MERN Full-Stack
//         Development. Proficient in HTML, CSS, JavaScript, and Tailwind, I create
//         responsive and user-friendly web interfaces. My expertise extends to the
//         full MERN stack, including MongoDB, Express, React, and Node.js.
//         Additionally, I possess skills in SQL (Oracle) and have hands-on
//         experience with AI/ML Integration.
//       </p>

//       <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
//         <a
//           href="#contact"
//           className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
//         >
//           contact me <img src={right_arrow_white} alt="" className="w-4" />
//         </a>

//         <a
//           href="../../dev-icon.png"
//           download
//           className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
//         >
//           my resume <img src={download_icon} alt="" className="w-4" />
//         </a>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-20 flex flex-col items-center justify-center gap-4">
      <img src={profile_img2} alt="" className="rounded-full w-32 mt-8" />
      <h3 className="flex items-end gap-2 text-2xl md:text-3xl mb-1 font-Ovo">
        Hi! I'm Basir Khan
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[50px] font-Ovo">
        Software Engineer | MERN Full-Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Dynamic Software Developer specializing in MERN Full-Stack technologies,
        creating innovative solutions that blend front-end elegance with robust
        back-end functionality.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={resume}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
