import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-violet-50 text-black py-16 px-5 md:px-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
        
        {/* Left Section: Brand & Call to Action */}
        <div className="flex flex-col items-center md:items-start max-w-lg">
          <p className="font-general text-sm uppercase tracking-widest text-gray-500 mb-4">
            Join InfantMind.ai
          </p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild a <br /> better future for b<b>a</b>bies <br /> t<b>o</b>gether."
            containerClass="!text-black text-center md:text-left !text-4xl md:!text-5xl !font-black !leading-[1.1]"
          />
          <Button title="Contact Us" containerClass="mt-8 cursor-pointer bg-black text-white" />
        </div>

        {/* Right Section: Links & Socials */}
        <div className="flex flex-col items-center gap-10 md:items-end md:gap-16">
          <div className="flex gap-12 font-circular-web text-sm font-semibold uppercase tracking-wider text-black">
            <div className="flex flex-col gap-4 text-center md:text-right">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
              <a href="#story" className="hover:text-blue-500 transition-colors">Story</a>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-right">
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Press</a>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="flex size-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110">
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