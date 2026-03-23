"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


// --------- MENU DATA -------------
const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contactus" },
];

function Header1() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed py-4 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="px-4">
        <div className="container">
          <div className="row items-center">
            
            {/* Desktop */}
            <div className="hidden lg:flex !items-center justify-between">
              
              {/* Logo */}
              <div className="col-lg-2">
                <Link href="/">
                <p className="p-0 m-0 uppercase text-black! !no-underline">Addyodha Digital</p>
                </Link>
              </div>

              {/* Menu */}
              <div className="col-lg-5 flex justify-between">
                {mainLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="!no-underline !text-[#303313]"
                  >
                    <p className="p-0 m-0">{link.label}</p>
                  </Link>
                ))}
              </div>

              {/* Button */}
              <div className="col-lg-2">
                <Link href="/contactus" className="!no-underline">
                  <p className="p-0 m-0 bg-[#FF5000] text-white w-full text-center py-2">
                    Schedule a Call
                  </p>
                </Link>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex justify-between lg:hidden">
                            <p className="p-0 m-0 uppercase text-black! !no-underline">Addyodha Digital</p>


              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-3xl text-gray-500 hover:bg-gray-100"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                <div className="fixed overflow-y-auto top-0 right-0 w-full h-full bg-white shadow-lg p-5 flex flex-col">
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="self-end text-gray-600"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>

                  <nav className="mt-4 flex flex-col items-start space-y-4">
                    {mainLinks.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="!text-[#303313] !no-underline"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Header1;