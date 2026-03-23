"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Header from "@/app/componets/header";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ContactForm() {
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: {
      ecommerce: false,
      seo: false,
      webDesign: false,
      digitalMarketing: false,
      contentMarketing: false,
      NewRegistration: false,
      ProductListing: false,
      AccountManagement: false,
      GlobalSelling: false,
    },
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      if (name === "acceptTerms") {
        setFormData({ ...formData, acceptTerms: checked });
      } else {
        setFormData({
          ...formData,
          services: {
            ...formData.services,
            [name]: checked,
          },
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", formData);

      if (res.data.success) {
        toast.success("✅ We will contact you soon!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: {
            ecommerce: false,
            seo: false,
            webDesign: false,
            digitalMarketing: false,
            contentMarketing: false,
            NewRegistration: false,
            ProductListing: false,
            AccountManagement: false,
            GlobalSelling: false,
          },
          message: "",
          acceptTerms: false,
        });
      } else {
        toast.error(`❌ ${res.data.message || "Something went wrong."}`);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        toast.error(
          `❌ ${err.response?.data?.message || err.message || "Error occurred"}`
        );
      } else {
        toast.error("❌ Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="lg:px-[100px] px-[40px] bg-[#FFF] lg:pt-[150px] pt-[100px] overflow-hidden pb-[80px]">
        <div className="flex justify-center">
          <div className="col-lg-8 pt-[80px]">
            <h1 className="text-2xl font-bold text-center mb-3">
              Ready to Elevate Your Sales? Let&apos;s Connect!
            </h1>
            <p className="text-center lg:text-[0.88vw] text-[3vw] text-sm mb-[80px]">
              Whether you need expert support for website and email selling or
              have a sales consultant, we&apos;re here to help. Reach out to us,
              and let&apos;s grow your e-commerce business together!
            </p>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4 ">
                <p className="block text-sm font-medium mb-2">
                  Services Required?
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {Object.entries(formData.services).map(
                    ([serviceKey, checked]) => (
                      <div className="flex items-center" key={serviceKey}>
                        <input
                          type="checkbox"
                          id={serviceKey}
                          name={serviceKey}
                          checked={checked}
                          onChange={handleChange}
                          className="!mr-2"
                        />
                        <label htmlFor={serviceKey} className="text-sm">
                          {serviceKey
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="col-lg-12 mb-4 ">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded p-2 h-32"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              {/* Terms */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="!mr-2"
                  required
                />
                <label htmlFor="acceptTerms" className="text-sm">
                  I accept the{" "}
                  <a href="#" className="underline text-black font-bold">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF4F00] w-full  text-white py-3 px-4 rounded flex items-center justify-center"
              >
                {loading ? (
                  <span className="loader border-2 border-t-2 border-white rounded-full w-4 h-4 mr-2 animate-spin"></span>
                ) : null}
                {loading ? "Processing..." : "Submit"}
              </button>
            </form>
          
          </div>
        </div>
      </section>


    </>
  );
}

export default React.memo(ContactForm);