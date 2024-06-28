import { CgGym } from "react-icons/cg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] w-full">
      <div className="container mx-auto px-4 py-8 text-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
          {/* Company Information */}
          <ul className="space-y-6">
            <li className="flex items-center justify-center">
              <CgGym className="text-4xl text-[#F2FD84]" />
              <span className="ml-2 text-2xl font-bold font-serif">GymBro</span>
            </li>
            <li className="text-sm md:text-base text-gray-400">
              We focus on the needs of middle to big market businesses to
              improve and grow their return.
            </li>
            <li className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300">
                <FaGithubSquare size={24} />
              </a>
            </li>
          </ul>

          {/* Quick Links */}
          <ul>
            <li className="text-lg font-bold mb-4">Quick Links</li>
            {["Home", "About", "Contact", "Classes", "Timetable"].map(
              (link) => (
                <li
                  key={link}
                  className="text-sm md:text-base text-gray-400 hover:text-white transition duration-300">
                  {link}
                </li>
              )
            )}
          </ul>

          {/* Classes */}
          <ul>
            <li className="text-lg font-bold mb-4">Classes</li>
            {["Yoga Fusion", "Cardio Kick", "Fit Fusion", "Cycle Fusion"].map(
              (classType) => (
                <li
                  key={classType}
                  className="text-sm md:text-base text-gray-400 hover:text-white transition duration-300">
                  {classType}
                </li>
              )
            )}
          </ul>

          {/* Sign Up */}
          <ul>
            <li className="text-lg font-bold mb-4">Sign Up</li>
            <li className="text-sm md:text-base text-gray-400">
              Subscribe to our newsletter!
            </li>
            <li className="text-sm md:text-base text-gray-400">
              Stay updated and informed with our latest classes, events, news,
              and best offers.
            </li>
            <form className="flex flex-col items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md w-full border-none outline-none focus:ring-2 focus:ring-[#F2FD84]"
              />
              <button
                type="submit"
                className="bg-[#F2FD84] text-black font-bold py-2 px-4 rounded-md mt-2 hover:bg-[#d1e075] transition duration-300">
                Subscribe
              </button>
            </form>
          </ul>
        </div>

        <div className=" border-t border-gray-500 pt-6 mt-12">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} | All Rights Reserved
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ by Deepak Singh Jethi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
