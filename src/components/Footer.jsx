import React from "react";
import {} from "react-router-dom";
import { Facebook, Twitter, Linkedin , LocateIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white py-9">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo Section */}
       
        <div className="md:col-span-3 border-r-[1px] border-[#424242]  ">
        <img src="public/assets/icons/boses.png" width="200px" height="auto" className="h-auto md:align-start  align-center " alt="logo"></img>
          <a href="/" className="text-md uppercase font-semibold">
            SUBASH MATRIC Higher <br /> secondary school , Tirupur-641 687
          </a>
        </div>

        {/* Services Section */}
        <div className="md:col-span-3 md:py-5 border-[#424242] border-r-[1px] ">
          <h3 className="text-md font-medium mb-4 ">Education services</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="block hover:text-gray-300">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">
                Games Events
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">
                Social services
              </a>
            </li>
          </ul>
          {/* <hr className="rotate-90 opacity-30 px-0" /> */}
        </div>

        {/* Resources Section */}
        <div className="md:col-span-3 border-r-[1px] border-[#424242] md:py-5 b-l ">
          <h3 className="text-md font-medium mb-4 ">Government Approval</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="block hover:text-gray-300">
                Formation
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-300">
                Resources Growth
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-3">
          <div className="space-y-4 text-sm">
            {/* Social Icons */}
            <div className="flex justify-center  gap-8">
              <a href="#" className="hover:opacity-80 p-2 border  hover:rounded-md hover:bg-black hover:scale-125  ">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 p-2 border  hover:rounded-md hover:bg-black hover:scale-125">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 p-2 border  hover:rounded-md hover:bg-black hover:scale-125">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-md  ">
              <span className="text-md font-semibold">
                Stay Connected with Our School{" "}
              </span> <br />
              Subscribe to our newsletter for updates on events, announcements,
              and important dates.
              <br />
              <span className="text-gray-700">
                By subscribing, you agree to receive school-related
                communications.
              </span>
              <br />
              <span className="text-gray-700">
                We respect your privacy and will never share your information.
              </span>
            </h3>

            <div className="flex gap-2 justify-center ">
              <input
                type="email"
                placeholder="xyz@gmail.com"
                className="bg-transparent border-gray-600 border-2 rounded-xs text-center md:px-10 md:py-4 px-5 text-sm"
              />
              <button className="bg-gradient-to-r px-4 py-2  from-gold-400 rounded-xs to-purple-400 hover:opacity-90 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-12 justify-center text-center border-[#424242] ">
          <h3 className="text-xl md:text-md font-black mb-4 text-start uppercase ">
            Location <LocateIcon className="inline block"  />
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2082.060005240115!2d77.31987088641216!3d11.082288431288315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9077acc144a35%3A0x5c2fac3089534ffa!2sSubash%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1737963553916!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            className="rounded-sm w-[350px] rounded-sm h-[320px] md:w-[1250px] md:h-[250px] border-black border-[3px] p-5 "
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="mt-2 border-t border-gray-700 pt-1 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Subash School Tirupur. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
    
      </div>
    </footer>
  );
}
