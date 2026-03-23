"use client";
import Image from "next/image";
import Header from "@/app/componets/header";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loadVideo, setLoadVideo] = useState(false);

  // Lazy load videos after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 800); // delay for better performance

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden lg:pt-[150px]">
        
        {/* Background Video Lazy */}
        {loadVideo && (
          <video
            className="absolute left-0 w-full h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          >
            <source src="/assets/hd.mp4" type="video/mp4" />
          </video>
        )}

        <div className="container px-4 ">
          <div className="row justify-center">
            <div className="col-lg-8 text-center flex justify-center">
              <div>
                <p className="lg:text-[49.5px] text-[30px] lg:leading-[53px] leading-[35px] text-[#fff] font-bold">
                  <span className="text-[#FF5000]">
                    Grow Your Business with Addyodha Digital
                  </span>{" "}
                  Marketing Experts
                </p>

                <p className="lg:text-[16px] text-[14px] leading-[18px] text-[#fff] mt-4 mb-4 ">
                  From brand building to performance marketing, Addyodha Digital helps businesses scale faster,
                  increase visibility, and generate high-quality leads across digital platforms.
                </p>

                <Link href="/contactus" className="no-underline">
                  <button className="bg-[#FF5000] mt-6 text-white px-4 py-3 text-[16px] rounded-full transition">
                    Get Free Digital Strategy Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="px-4 lg:pt-[150px] pt-[50px]">
        <div className="container">
          <div className="row items-start">
            
            {/* Left Content */}
            <div className="col-lg-6 mb-4 ">
              <div>
                <span className="lg:text-[35px] text-[25px] lg:leading-[40px] leading-[30px] font-bold text-[#000124]">
                  Addyodha Digital
                  <span className="flex">
                    Advantages
                    <Image
                      src="/assets/hero.svg"
                      alt="hero"
                      width={1080}
                      height={1080}
                      className="w-10"
                      loading="lazy"
                    />
                  </span>
                </span>
              </div>

              {/* Item 1 */}
              <div className="col-lg-12 mb-4 pt-5 ">
                <div className="flex items-center gap-2 text-[23px] leading-[27px] font-bold text-[#000124]">
                  <Image
                    src="/assets/house.svg"
                    alt="icon"
                    width={1080}
                    height={1080}
                    className="w-8"
                    loading="lazy"
                  />
                  <p className="p-0 m-0 ">Strong Digital Presence</p>
                </div>
                <p className="text-[14px] text-[#636363] pt-3">
                  We help your brand build a powerful online presence across multiple digital platforms,
                  ensuring maximum reach, engagement, and customer trust.
                </p>
              </div>

              {/* Item 2 */}
              <div className="col-lg-12 mb-4 ">
                <div className="flex items-center gap-2 text-[23px] leading-[27px] font-bold text-[#000124]">
                  <Image
                    src="/assets/end.svg"
                    alt="icon"
                    width={1080}
                    height={1080}
                    className="w-8"
                    loading="lazy"
                  />
                  <p className="p-0 m-0 ">Complete Digital Solutions</p>
                </div>
                <p className="text-[14px] text-[#636363] pt-3">
                  From SEO and social media marketing to paid ads and branding,
                  we provide end-to-end digital marketing solutions tailored to your business needs.
                </p>
              </div>

              {/* Item 3 */}
              <div className="col-lg-12 mb-4">
                <div className="flex items-center gap-2 text-[23px] leading-[27px] font-bold text-[#000124]">
                  <Image
                    src="/assets/s.svg"
                    alt="icon"
                    width={1080}
                    height={1080}
                    className="w-8"
                    loading="lazy"
                  />
                  <p className="p-0 m-0 ">Fast Growth & Results</p>
                </div>
                <p className="text-[14px] text-[#636363] pt-3">
                  Our data-driven strategies ensure quick and measurable results,
                  helping your business grow faster and achieve higher ROI in less time.
                </p>
              </div>

              <Link href="/contactus" className="no-underline">
                <button className="bg-[#FF5000] mt-3 text-white px-4 py-3 text-[14px] rounded-full transition">
                  Schedule Demo
                </button>
              </Link>
            </div>

            {/* Right Video Section */}
            <div className="col-lg-6 mb-4 max-h-screen top-[200px] sticky bg-gradient-to-b from-[rgba(66,22,251,0.1)] to-[rgba(255,255,255,0.1)] ">
              
              {loadVideo && (
                <video
                  className="w-full pt-4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                >
                  <source src="/assets/know-us_en 11.mp4" type="video/mp4" />
                </video>
              )}

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Home);