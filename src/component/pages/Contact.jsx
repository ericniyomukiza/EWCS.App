import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,FaBars, FaTimes,
  FaFacebookF, FaInstagram,
  FaTwitter, FaYoutube, FaArrowRight, FaHeart
} from "react-icons/fa";

function Contact() {
const [menuOpen, setMenuOpen] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  
 const [message, setMessage] = useState("");
 const receiverNumber = "250787180358";
 
   const defaultMessage =
     "Hello 👋 Wild Connector Safaris, I’d love to enquire about a safari.";
 
   const sendWhatsAppMessage = () => {
     if (!message.trim()) {
       alert("Please write a message.");
       return;
     }
 
     const whatsappUrl = `https://wa.me/${receiverNumber}?text=${encodeURIComponent(
       message
     )}`;
 
     window.open(whatsappUrl, "_blank");
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Thank you ${formData.name}! Your message has been received.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: ""
    });

  };
  return (
    <div className="bg-[#f7f4ed] min-h-screen">


      {/* Navbar */}
<nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">

  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl">
        Wc
      </div>

      <div>
        <p className="text-yellow-400 text-xs tracking-[4px]">
          <b>Edison</b>
        </p>

        <h1 className="text-white text-2xl font-bold">
          Wild Connector
        </h1>

        <p className="text-yellow-400 text-xs tracking-[4px]">
          SAFARIS
        </p>
      </div>

    </div>


    {/* Desktop Menu */}
    <div className="hidden lg:flex gap-10">

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/Home"
      >
        Home
      </Link>

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/Tours"
      >
        Tours
      </Link>

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/Destinations"
      >
        Destinations
      </Link>

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/Visit"
      >
        Visit Us ▼
      </Link>

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/contact"
      >
        Contact
      </Link>

      <Link
        className="text-white hover:text-yellow-400 duration-300"
        to="/Gallery"
      >
        Gallery
      </Link>

    </div>


    {/* Book Safari - Desktop */}
    <div className="hidden lg:block">
      <Link
        to="/Booking"
        className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full font-bold text-black"
      >
        Book Safari
      </Link>
    </div>


    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden text-white text-3xl"
    >
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>

  </div>


  {/* Mobile Menu */}
  {menuOpen && (
    <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">

      <div className="flex flex-col px-8 py-6 gap-6">

        <Link
          to="/Home"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Home
        </Link>

        <Link
          to="/Tours"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Tours
        </Link>

        <Link
          to="/Destinations"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Destinations
        </Link>

        <Link
          to="/Visit"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Visit Us
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Contact
        </Link>

        <Link
          to="/Gallery"
          onClick={() => setMenuOpen(false)}
          className="text-white text-lg hover:text-yellow-400"
        >
          Gallery
        </Link>

        {/* Book Safari */}
        <Link
          to="/Booking"
          onClick={() => setMenuOpen(false)}
          className="bg-yellow-500 hover:bg-yellow-400 text-black text-center px-6 py-3 rounded-full font-bold"
        >
          Book Safari
        </Link>

      </div>

    </div>
  )}

</nav>


      {/* Hero */}
      <section
        className="h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6')"
        }}
      >

        <div className="h-full bg-black/60 flex items-center justify-center text-center">

          <div className="text-white px-6">

            <p className="text-yellow-400 uppercase tracking-[5px]">
              Get In Touch
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              Contact Us
            </h1>

            <p className="text-xl text-gray-200 mt-5">
              Let's start planning your African adventure.
            </p>

          </div>

        </div>

      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-10">


          {/* Contact information */}
          <div>

            <p className="text-green-800 font-bold uppercase tracking-[4px]">
              Contact
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Talk To Our Team
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Have a question about a safari, destination,
              accommodation or booking? We are ready to help.
            </p>


            <div className="space-y-6 mt-10">


              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-900">
                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="font-bold">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Kigali, Rwanda
                  </p>

                </div>

              </div>


              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-900">
                  <FaPhone />
                </div>

                <div>

                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <a
                    href="tel:+250793189242"
                    className="text-gray-600 hover:text-green-900"
                  >
                    +250 793 189 242
                  </a>

                </div>

              </div>


              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-900">
                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="font-bold">
                    Email
                  </h3>

                  <a
                    href="mailto:info@wildconnectorsafaris.com"
                    className="text-gray-600 hover:text-green-900"
                  >
                    info@wildconnectorsafaris.com
                  </a>

                </div>

              </div>


              <a
                href="https://wa.me/250793189242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-full font-bold transition hover:scale-105"
              >

                <FaWhatsapp className="text-2xl" />

                Chat On WhatsApp

              </a>

            </div>

          </div>


          {/* Contact form */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h2 className="text-3xl font-bold">
                Send Us A Message
              </h2>

              <p className="text-gray-500 mt-2">
                Tell us about the safari you are planning.
              </p>


              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >


                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"
                  />


                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"
                  />

                </div>


                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700"
                  />


                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700 bg-white"
                  >

                    <option value="">
                      Choose Destination
                    </option>

                    <option value="Akagera">
                      Akagera National Park
                    </option>

                    <option value="Volcanoes">
                      Volcanoes National Park
                    </option>

                    <option value="Nyungwe">
                      Nyungwe National Park
                    </option>

                    <option value="Lake Kivu">
                      Lake Kivu
                    </option>

                    <option value="Kigali">
                      Kigali
                    </option>

                  </select>

                </div>


                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your trip..."
                  rows="6"
                  required
                  className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-green-700 resize-none"
                />


                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition"
                >

                  Send Message

                  <FaPaperPlane />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* WhatsApp CTA */}
      <section className="bg-green-950 text-white py-16 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Prefer WhatsApp?
          </h2>

          <p className="text-gray-300 mt-3">
            Our safari experts are ready to answer your questions.
          </p>

          <a
            href="https://wa.me/250793189242"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-green-600 hover:bg-green-500 px-7 py-4 rounded-full font-bold"
          >

            <FaWhatsapp className="text-2xl" />

            Chat With An Expert

          </a>

        </div>

      </section>

<footer className="bg-[#07130d] text-white">
     {/* Main Footer */} 
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-16"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"> {/* 1. Company */} 
            <div> <div className="flex items-center gap-3 mb-5"> 
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold shadow-lg"> WC </div>
                 <div> <h2 className="text-xl font-bold"> 
                          <p className="text-yellow-400 text-xs tracking-[4px]">
                                     <b>Edison</b>
                                </p>
                  Wild Connector </h2> <p className="text-yellow-400 text-xs tracking-[4px]"> SAFARIS </p> </div> </div> 
                 <p className="text-gray-400 leading-7"> Discover the beauty of Africa with Wild Connector Safaris. Experience unforgettable wildlife, nature, culture and adventure. </p> {/* Social Media */} 
                 <div className="flex gap-3 mt-7"> 
                 <a href="https://www.facebook.com/neg.edson" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition duration-300" > <FaFacebookF /> </a> 
                 <a href="https://www.instagram.com/wild_connector_safaris/?utm_source=wa4a&utm_campaign=wa_vpl_m2_vf_web" aria-label="https://www.instagram.com/wild_connector_safaris/?utm_source=wa4a&utm_campaign=wa_vpl_m2_vf_web" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition duration-300" > <FaInstagram /> </a> 
                 <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition duration-300" > <FaTwitter /> </a> 
                 <a href="https://youtube.com/@wildconnectorsafaris80?si=ijv7rxAmQa9ep-EO" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition duration-300" > <FaYoutube /> </a> 
                 </div> </div> {/* 2. Quick Links */} <div> <h3 className="text-xl font-bold mb-6"> Quick Links </h3>
                  <div className="space-y-4"> <Link to="/" className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition duration-300" > Home </Link> 
                  <Link to="/tours" className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition duration-300" > Safari Tours </Link> 
                  <Link to="/destination" className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition duration-300" > Destinations </Link>
                   <Link to="/gallery" className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition duration-300" > Gallery </Link> 
                   <Link to="/contact" className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition duration-300" > Contact Us </Link> </div> </div> {/* 3. Contact */} 
                   <div> <h3 className="text-xl font-bold mb-6"> Contact Us </h3> <div className="space-y-5"> <div className="flex items-start gap-4"> 
                    <div className="text-yellow-400 mt-1"> <FaMapMarkerAlt /> </div> <div> <p className="text-gray-400"> Kigali, Rwanda </p> </div> </div> <div className="flex items-start gap-4"> <div className="text-yellow-400 mt-1"> <FaPhone /> </div> <div> <a href="tel:+250793189242" className="text-gray-400 hover:text-yellow-400 transition" > +250 793 189 242 </a> </div> </div> <div className="flex items-start gap-4"> <div className="text-yellow-400 mt-1"> <FaEnvelope /> </div>
                     <div> <a href="mailto:info@wildconnectorsafaris.com" className="text-gray-400 hover:text-yellow-400 transition break-all" > info@wildconnectorsafaris.com </a> </div> </div> </div> {/* WhatsApp */} 
                     <a href="https://wa.me/250793189242" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-7 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-full font-semibold transition duration-300 hover:scale-105" > <FaWhatsapp className="text-2xl" /> Chat on WhatsApp </a> </div> {/* 4. Newsletter */}
                      <div> <h3 className="text-xl font-bold mb-6"> Stay Connected </h3> <p className="text-gray-400 leading-6 mb-5"> Subscribe to receive safari news, travel tips, special offers and new adventures. </p>
                       <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }} className="flex flex-col gap-3" > 
                        <input type="email" placeholder="Your email address" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-yellow-400 transition" /> 
                        <button type="submit" className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-3 rounded-xl transition duration-300" > Subscribe <FaArrowRight /> 
                        </button> </form> <p className="text-xs text-gray-500 mt-4"> We respect your privacy. No spam. </p> </div> </div> </div>
                         {/* Bottom Footer */} 
                         <div className="border-t border-white/10"> <div className="max-w-7xl mx-auto px-6 md:px-10 py-6"> <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"> <p className="text-gray-500 text-center md:text-left">
                             © 2026 Wild Connector Safaris. All rights reserved. </p> 
                             <div className="flex gap-6"> <Link to="/privacy" className="text-gray-500 hover:text-yellow-400 transition" >
                              Privacy Policy 
                              </Link>
                               <Link to="/terms" className="text-gray-500 hover:text-yellow-400 transition" > Terms </Link> </div> 
                               <p className="text-gray-500 flex items-center gap-2"> Made with <FaHeart className="text-red-500" /> in Rwanda </p> </div> </div> </div>
                                {/* Floating WhatsApp */}
<>
 {!isWhatsAppOpen && (
        <button
          onClick={() => setIsWhatsAppOpen(true)}
          aria-label="Open WhatsApp chat"
          className="
            fixed
            bottom-6
            right-7
            z-[9999]
            w-[68px]
            h-[68px]
            bg-[#00c853]
            hover:bg-[#00b84a]
            rounded-full
            flex
            items-center
            justify-center
            shadow-2xl
            transition-all
            duration-300
            hover:scale-110
          "
        >

          {/* WHATSAPP SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-10 h-10 fill-white"
          >

            <path
              d="
                M19.11 17.21
                c-.27-.14-1.6-.79-1.85-.88
                -.25-.09-.43-.14-.61.14
                -.18.27-.7.88-.86 1.06
                -.16.18-.32.2-.59.07
                -.27-.14-1.13-.42-2.15-1.33
                -.79-.7-1.33-1.56-1.49-1.82
                -.16-.27-.02-.41.12-.54
                .12-.12.27-.32.41-.48
                .14-.16.18-.27.27-.45
                .09-.18.05-.34-.02-.48
                -.07-.14-.61-1.47-.84-2.01
                -.22-.53-.45-.46-.61-.47
                h-.52c-.18 0-.48.07-.73.34
                -.25.27-.95.93-.95 2.26
                s.98 2.62 1.11 2.8
                c.14.18 1.93 2.95 4.68 4.14
                .65.28 1.16.45 1.56.57
                .66.21 1.26.18 1.73.11
                .53-.08 1.6-.66 1.83-1.29
                .23-.64.23-1.18.16-1.29
                -.07-.11-.25-.18-.52-.32z
              "
            />

            <path
              d="
                M16.02 3
                C8.84 3 3 8.84 3 16.02
                c0 2.3.6 4.55 1.74 6.55
                L3 29l6.6-1.72
                a13 13 0 0 0 6.42 1.68
                h.01C23.2 28.96 29 23.13 29 16.02
                29 8.84 23.2 3 16.02 3zm0 23.78
                h-.01a10.7 10.7 0 0 1-5.46-1.5
                l-.39-.23-3.91 1.02
                1.04-3.81-.25-.4
                a10.72 10.72 0 1 1 8.98 4.92z
              "
            />

          </svg>


          {/* RED NOTIFICATION */}
          <span
            className="
              absolute
              -top-1
              -right-1
              w-6
              h-6
              bg-red-500
              border-2
              border-white
              rounded-full
            "
          />

        </button>
      )}


      {/* =====================================================
          SMALL WHATSAPP CHAT WINDOW
      ===================================================== */}

      {isWhatsAppOpen && (
        <div
          className="
            fixed
            bottom-5
            right-6
            z-[9999]
            w-[400px]
            max-w-[calc(100vw-24px)]
            h-[520px]
            max-h-[calc(100vh-30px)]
            bg-[#f7f3ed]
            rounded-[20px]
            shadow-2xl
            overflow-hidden
            border
            border-gray-300
            flex
            flex-col
          "
        >

          {/* CHAT HEADER */}
          <div
            className="
              bg-[#079b87]
              text-white
              px-5
              py-4
              flex
              items-center
            "
          >

            {/* PROFILE IMAGE */}
            <div className="relative">

              <img
                src="https://img.sanishtech.com/u/62b805f907e2ed766e6c1e5c023d876b.webp"
                alt="Wild Connector Safaris"
                className="
                  w-[55px]
                  h-[55px]
                  rounded-full
                  object-cover
                  border-2
                  border-white
                "
              />

              {/* ONLINE STATUS */}
              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  w-4
                  h-4
                  bg-green-400
                  border-2
                  border-white
                  rounded-full
                "
              />

            </div>


            {/* NAME */}
            <div className="ml-3 flex-1">

              <h3 className="text-[21px] font-bold">
                Wild Connector
              </h3>

              <p className="text-[14px]">
                Usually replies instantly
              </p>

            </div>


            {/* CLOSE */}
            <button
              onClick={() => setIsWhatsAppOpen(false)}
              className="
                text-white
                text-4xl
                font-light
                hover:text-gray-200
              "
            >
              ×
            </button>

          </div>


          {/* CHAT BODY */}
          <div
            className="
              flex-1
              px-5
              py-6
              relative
              overflow-hidden
            "
          >

            {/* WATERMARK */}
            <div
              className="
                absolute
                inset-0
                flex
                justify-center
                pointer-events-none
              "
            >

              <span
                className="
                  text-[45px]
                  font-bold
                  text-gray-200
                  opacity-50
                  mt-8
                "
              >
                WhatsApp
              </span>

            </div>


            {/* TODAY */}
            <div
              className="
                relative
                flex
                justify-center
                mb-4
              "
            >

              <span
                className="
                  bg-[#dff5ef]
                  text-gray-500
                  px-4
                  py-1
                  rounded-full
                  text-sm
                "
              >
                Today
              </span>

            </div>


            {/* MESSAGE */}
            <div
              className="
                relative
                bg-white
                rounded-2xl
                shadow-md
                px-5
                py-4
                max-w-[90%]
              "
            >

              <p
                className="
                  text-[17px]
                  leading-7
                  text-gray-700
                "
              >
                Hello 👋 Wild Connector Safaris
                <br />
                I'd love to enquire about a safari
              </p>

              <div
                className="
                  text-right
                  text-gray-400
                  text-xs
                  mt-1
                "
              >
                Now
              </div>

            </div>

          </div>


          {/* MESSAGE INPUT */}
          <div className="bg-white px-4 py-4">

            <div className="flex items-center gap-3">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendWhatsAppMessage();
                  }
                }}
                placeholder="Type a message..."
                className="
                  flex-1
                  bg-[#697386]
                  text-white
                  placeholder-gray-300
                  px-5
                  py-3
                  rounded-full
                  text-base
                  outline-none
                "
              />


              {/* SEND BUTTON */}
              <button
                onClick={sendWhatsAppMessage}
                aria-label="Send WhatsApp message"
                className="
                  w-[52px]
                  h-[52px]
                  bg-green-500
                  hover:bg-green-600
                  rounded-full
                  flex
                  items-center
                  justify-center
                  transition
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-white"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>

              </button>

            </div>

          </div>


          {/* CHAT FOOTER */}
          <div
            className="
              bg-[#fafafa]
              text-center
              text-gray-400
              py-2
              text-xs
            "
          >
            WhatsApp Chat • Wild Connector Safaris
          </div>

        </div>
      )}
    </>
    </footer>

    </div>
  );
}

export default Contact;
