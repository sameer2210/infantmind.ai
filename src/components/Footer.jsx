import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-violet-50 text-black py-12 sm:py-16 px-4 sm:px-5 md:px-10" aria-label="Footer">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 sm:gap-12 md:flex-row md:items-start">

        {/* Left Section: Brand & Call to Action */}
        <div className="flex flex-col items-center md:items-start max-w-lg w-full">
          <p className="font-general text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-4">
            Join InfantMind.ai
          </p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild a <br /> better future for b<b>a</b>bies <br /> t<b>o</b>gether."
            containerClass="!text-black text-center md:text-left !text-3xl sm:!text-4xl md:!text-5xl !font-black !leading-[1.1]"
          />
          <Button onClick={() => {
    window.location.href = "https://www.spandavidyaai.com/#contact";
  }}title="Contact Us" containerClass="mt-6 sm:mt-8 cursor-pointer bg-black text-white" />
        </div>

        {/* Right Section: Links & Socials */}
        <div className="flex flex-col items-center gap-8 md:items-end md:gap-16 w-full">
          <nav aria-label="Footer navigation links" className="flex gap-8 sm:gap-12 font-circular-web text-xs sm:text-sm font-semibold uppercase tracking-wider text-black">
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-right">
              <a href="#about" className="hover:text-blue-500 transition-colors py-1">About</a>
              <a href="#features" className="hover:text-blue-500 transition-colors py-1">Features</a>
              <a href="#story" className="hover:text-blue-500 transition-colors py-1">Story</a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-right">
              <a href="#" className="hover:text-blue-500 transition-colors py-1">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors py-1">Terms of Service</a>
              <a href="#" className="hover:text-blue-500 transition-colors py-1">Press</a>
            </div>
          </nav>

          <div className="flex gap-4 sm:gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex size-11 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-11 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex size-11 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-11 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-16 flex flex-col items-center justify-between border-t border-gray-300 pt-6 text-xs text-gray-500 md:flex-row">
        <p>&copy; {currentYear} InfantMind.ai. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Crafted with care for parents everywhere.</p>
      </div>
    </footer>
  );
};

export default Footer;