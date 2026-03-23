"use client";
import Image from "next/image";
import Header from "@/app/componets/header";

import React from "react";

function Home() {
  return (
    <>
      <Header />

      <section className="lg:pt-[80px] pt-[90px] lg:pb-[100px] pb-[50px] relative overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/assets/aboutbg.svg"
          alt="background"
          width={1080}
          height={1080}
          className="w-full"
          priority
        />

        <div className="container px-4">
          <div className="row lg:pt-[100px] pt-[50px] items-center justify-between">
            
            {/* Top Heading */}
            <div className="col-lg-12 lg:mb-[100px] mb-[50px] text-center">
              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.2vw] leading-[3.2vw] flex justify-center gap-3 items-center">
                <Image
                  src="/assets/ico.svg"
                  alt="icon"
                  width={1080}
                  height={1080}
                  className="w-3"
                  loading="lazy"
                />
                WELCOME TO ADDYODHA DIGITAL
              </p>

              <p className="lg:text-[30px] text-[25px] lg:leading-[35px] leading-[30px] font-bold text-[#000124]">
                Helping brands grow faster in the digital world
              </p>
            </div>

            {/* Left Content */}
            <div className="col-lg-5 mb-4">
              <p className="lg:text-[30px] text-[25px] lg:leading-[35px] leading-[30px] font-bold text-[#000124]">
                We empower businesses to scale digitally
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                Addyodha Digital is a modern digital marketing and growth agency focused on helping startups, brands, and enterprises build a strong online presence. We specialize in delivering result-driven strategies that increase visibility, drive engagement, and generate quality leads.
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                Our team works closely with clients to understand their goals and create customized marketing strategies across SEO, social media, paid advertising, and branding. We ensure your business reaches the right audience at the right time with the right message.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 mb-4">
              <Image
                src="/assets/Mask group.svg"
                alt="about"
                width={1080}
                height={1080}
                className="w-full"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* Second Section */}
        <div className="container px-4">
          <div className="row lg:pt-[100px] pt-[50px] items-center justify-between">
            
            {/* Heading */}
            <div className="col-lg-12 lg:mb-[100px] mb-[50px] text-center">
              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.2vw] leading-[3.2vw] flex justify-center gap-3 items-center">
                <Image
                  src="/assets/ico.svg"
                  alt="icon"
                  width={1080}
                  height={1080}
                  className="w-3"
                  loading="lazy"
                />
                OUR APPROACH
              </p>

              <p className="lg:text-[30px] text-[25px] lg:leading-[35px] leading-[30px] font-bold text-[#000124]">
                Scalable, flexible & performance-driven
              </p>
            </div>

            {/* Left Content */}
            <div className="col-lg-5 mb-4">
              <p className="lg:text-[30px] text-[25px] lg:leading-[35px] leading-[30px] font-bold text-[#000124]">
                Together we build success
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                At Addyodha Digital, we believe every business is unique. That’s why we focus on creating tailored strategies based on your industry, target audience, and growth goals. From brand awareness to lead generation, we ensure measurable results.
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                We use data-driven insights, analytics, and modern tools to optimize campaigns and maximize ROI. Whether it’s improving search rankings, running high-converting ads, or building a strong social presence — we handle everything.
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                Our goal is not just short-term growth but long-term success. We continuously monitor, analyze, and improve strategies to ensure your business stays ahead in the competitive digital landscape.
              </p>

              <p className="lg:text-[1vw] text-[3vw] text-[#636363] lg:leading-[1.3vw] leading-[3.2vw]">
                If you are a startup, business owner, or brand looking to grow online, Addyodha Digital is your trusted growth partner.
              </p>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 mb-4">
              <Image
                src="/assets/Group 17903.svg"
                alt="growth"
                width={1080}
                height={1080}
                className="w-full"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

  
    </>
  );
}

export default React.memo(Home);