import { useEffect, useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowLeft,
  FaArrowRight,
  FaTicketAlt,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

/* =========================================================
   SAFARI ADVERTISEMENT DATA
========================================================= */
const safariAds = [
  {
    id: 1,
    title: "Akagera National Park",
    subtitle: "Wildlife Safari Adventure",
    date: "2026-10-12",
    displayDate: "Monday, 12 October 2026",
    destination: "Akagera National Park",
    duration: "3 Days / 2 Nights",
    people: "2 - 10 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 2,
    title: "Volcanoes National Park",
    subtitle: "Gorilla & Mountain Adventure",
    date: "2026-10-13",
    displayDate: "Tuesday, 13 October 2026",
    destination: "Volcanoes National Park",
    duration: "2 Days / 1 Night",
    people: "1 - 8 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 3,
    title: "Nyungwe National Park",
    subtitle: "Forest & Wildlife Experience",
    date: "2026-10-14",
    displayDate: "Wednesday, 14 October 2026",
    destination: "Nyungwe National Park",
    duration: "3 Days / 2 Nights",
    people: "2 - 10 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 4,
    title: "Rwanda Cultural Experience",
    subtitle: "Discover Rwanda's Culture",
    date: "2026-10-15",
    displayDate: "Thursday, 15 October 2026",
    destination: "Rwanda Cultural Experience",
    duration: "2 Days / 1 Night",
    people: "2 - 15 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 5,
    title: "Lake Kivu Adventure",
    subtitle: "Relax • Explore • Discover",
    date: "2026-10-16",
    displayDate: "Friday, 16 October 2026",
    destination: "Lake Kivu",
    duration: "3 Days / 2 Nights",
    people: "2 - 12 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 6,
    title: "Akagera Weekend Safari",
    subtitle: "Meet Africa's Amazing Wildlife",
    date: "2026-10-17",
    displayDate: "Saturday, 17 October 2026",
    destination: "Akagera National Park",
    duration: "3 Days / 2 Nights",
    people: "2 - 10 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: 7,
    title: "Lake Kivu Sunday Escape",
    subtitle: "Relax by Rwanda's Beautiful Lake",
    date: "2026-10-18",
    displayDate: "Sunday, 18 October 2026",
    destination: "Lake Kivu",
    duration: "1 Day",
    people: "2 - 12 People",
    price: "From 5,000 Frw",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=90",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Booking() {

  /* =======================================================
     BASIC STATES
  ======================================================= */

  const [menuOpen, setMenuOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [currentAd, setCurrentAd] = useState(0);

  const bookingRef = useRef(null);


  /* =======================================================
     WHATSAPP NUMBER
  ======================================================= */

  const receiverNumber = "250787180358";


  /* =======================================================
     BOOKING FORM STATE
  ======================================================= */

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
    people: "",
    message: "",
  });


  /* =======================================================
     CURRENT ADVERTISEMENT
  ======================================================= */

  const selectedAd = safariAds[currentAd];


  /* =======================================================
     AUTOMATIC ADVERTISEMENT SLIDER
  ======================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentAd((prev) =>
        prev === safariAds.length - 1
          ? 0
          : prev + 1
      );

    }, 6000);

    return () => clearInterval(timer);

  }, []);


  /* =======================================================
     CHANGE BOOKING FORM
  ======================================================= */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  /* =======================================================
     OPEN BOOKING FROM ADVERTISEMENT
  ======================================================= */

  const openBooking = (ad) => {

    setForm((prev) => ({
      ...prev,

      destination: ad.destination,

      date: ad.date,
    }));

    setTimeout(() => {

      bookingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }, 100);

  };


  /* =======================================================
     SUBMIT SAFARI BOOKING
  ======================================================= */

  const handleBooking = (e) => {

    e.preventDefault();

    const whatsappNumber = "250787180358";

    const whatsappMessage = `
🦁 *NEW SAFARI BOOKING*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}

📍 Destination: ${form.destination}
📅 Safari Date: ${form.date}
👥 Number of People: ${form.people}

📝 Message:
${form.message || "No additional message"}

Thank you.
`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");

  };


  /* =======================================================
     WHATSAPP CHAT MESSAGE
  ======================================================= */

  const sendWhatsAppMessage = () => {

    if (!message.trim()) {

      alert("Please write a message.");

      return;

    }

    const whatsappURL =
      `https://wa.me/${receiverNumber}?text=${encodeURIComponent(
        message
      )}`;

    window.open(whatsappURL, "_blank");

  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#f7f4ed]">


      {/* ===================================================
          NAVBAR
      =================================================== */}

      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">


          {/* LOGO */}

          <Link
            to="/Home"
            className="flex items-center gap-3"
          >

            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-extrabold border-2 border-yellow-400">
              Wc
            </div>

            <div>

              <p className="text-yellow-400 text-[10px] tracking-[4px] font-bold">
                Edison
              </p>

              <h1 className="text-white text-xl md:text-2xl font-bold">
                Wild Connector
              </h1>

              <p className="text-yellow-400 text-[9px] tracking-[4px] font-bold">
                SAFARIS
              </p>

            </div>

          </Link>


          {/* DESKTOP MENU */}

          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/Home"
              className="text-white hover:text-yellow-400 transition"
            >
              Home
            </Link>

            <Link
              to="/Tours"
              className="text-yellow-400 font-bold"
            >
              Tours
            </Link>

            <Link
              to="/Destinations"
              className="text-white hover:text-yellow-400 transition"
            >
              Destinations
            </Link>

            <Link
              to="/Visit"
              className="text-white hover:text-yellow-400 transition"
            >
              Visit Us
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/Gallery"
              className="text-white hover:text-yellow-400 transition"
            >
              Gallery
            </Link>

            <Link
              to="/About"
              className="text-white hover:text-yellow-400 transition"
            >
              About Us
            </Link>


            {/* BOOK BUTTON */}

            <button
              type="button"
              onClick={() => openBooking(selectedAd)}
              className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full font-bold text-black transition"
            >
              Book Safari
            </button>

          </div>


          {/* MOBILE BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>


        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">

            <div className="flex flex-col px-8 py-6 gap-5">

              {[
                ["Home", "/Home"],
                ["Tours", "/Tours"],
                ["Destinations", "/Destinations"],
                ["Visit Us", "/Visit"],
                ["Contact", "/contact"],
                ["Gallery", "/Gallery"],
                ["About Us", "/About"],
              ].map(([name, path]) => (

                <Link
                  key={name}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg ${
                    name === "Tours"
                      ? "text-yellow-400 font-bold"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {name}
                </Link>

              ))}


              <button
                type="button"
                onClick={() => {

                  setMenuOpen(false);

                  openBooking(selectedAd);

                }}
                className="bg-yellow-500 hover:bg-yellow-400 text-black text-center px-6 py-3 rounded-full font-bold"
              >
                Book Safari
              </button>

            </div>

          </div>

        )}

      </nav>


      {/* SPACE FOR FIXED NAVBAR */}

      <div className="h-24"></div>


      {/* ===================================================
          SAFARI ADVERTISEMENT SLIDER
      =================================================== */}


<section className="w-full min-h-screen">
  <div className="relative w-full min-h-screen overflow-hidden shadow-2xl">

    {/* BACKGROUND IMAGE */}
    <div
      key={selectedAd.id}
      className="absolute inset-0 bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${selectedAd.image})`,
      }}
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

    {/* CONTENT */}
    <div className="relative z-10 min-h-screen flex items-center justify-center">

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-20">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full font-semibold mb-6">
          <FaTicketAlt />
          Wild Connector Safaris
        </div>

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight">
          {selectedAd.title}
        </h2>

        {/* SUBTITLE */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mt-5 max-w-2xl">
          {selectedAd.subtitle}
        </p>

        {/* INFORMATION */}
        <div className="flex flex-wrap gap-3 md:gap-4 mt-8">

          {/* DATE */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-white">
            <FaCalendarAlt className="text-yellow-400 text-xl shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Safari Date</p>
              <p className="font-bold">{selectedAd.displayDate}</p>
            </div>
          </div>

          {/* DESTINATION */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-white">
            <FaMapMarkerAlt className="text-yellow-400 text-xl shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Destination</p>
              <p className="font-bold">{selectedAd.destination}</p>
            </div>
          </div>

          {/* GROUP */}
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-white">
            <FaUsers className="text-yellow-400 text-xl shrink-0" />
            <div>
              <p className="text-xs text-gray-300">Group</p>
              <p className="font-bold">{selectedAd.people}</p>
            </div>
          </div>

        </div>

        {/* PRICE AND BOOKING */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 mt-9">

          <div>
            <p className="text-gray-300 text-sm">Safari package</p>
            <p className="text-3xl md:text-4xl font-extrabold text-yellow-400">
              {selectedAd.price}
            </p>
          </div>

          <button
            type="button"
            onClick={() => openBooking(selectedAd)}
            className="inline-flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book This Safari
            <FaArrowRight />
          </button>

        </div>
      </div>
    </div>

    {/* PREVIOUS BUTTON */}
    <button
      type="button"
      aria-label="Previous safari"
      onClick={() =>
        setCurrentAd((prev) =>
          prev === 0 ? safariAds.length - 1 : prev - 1
        )
      }
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition"
    >
      <FaArrowLeft />
    </button>

    {/* NEXT BUTTON */}
    <button
      type="button"
      aria-label="Next safari"
      onClick={() =>
        setCurrentAd((prev) =>
          prev === safariAds.length - 1 ? 0 : prev + 1
        )
      }
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition"
    >
      <FaArrowRight />
    </button>

    {/* SLIDE INDICATORS */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
      {safariAds.map((ad, index) => (
        <button
          key={ad.id}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={currentAd === index ? "true" : undefined}
          onClick={() => setCurrentAd(index)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            currentAd === index
              ? "w-10 bg-yellow-400"
              : "w-2.5 bg-white/50 hover:bg-white/80"
          }`}
        />
      ))}
    </div>

  </div>
</section>




      {/* ===================================================
          BOOKING FORM
      =================================================== */}

      <section
        ref={bookingRef}
        className="px-4 md:px-6 lg:px-8 py-10"
      >

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Safari Booking Form
          </h2>

          <p className="text-gray-500 mb-8">
            Complete the form below and send your booking directly to WhatsApp.
          </p>


          <form
            onSubmit={handleBooking}
            className="space-y-6"
          >


            {/* NAME + PHONE */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full mt-2 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                />

              </div>


              <div>

                <label className="font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+250..."
                  required
                  className="w-full mt-2 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
                />

              </div>

            </div>


            {/* EMAIL */}

            <div>

              <label className="font-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className="w-full mt-2 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700"
              />

            </div>


            {/* DESTINATION */}

            <div>

              <label className="font-semibold">
                Choose Destination
              </label>

              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
                className="w-full mt-2 p-4 border rounded-xl bg-white"
              >

                <option value="">
                  Select destination
                </option>

                <option value="Akagera National Park">
                  Akagera National Park
                </option>

                <option value="Volcanoes National Park">
                  Volcanoes National Park
                </option>

                <option value="Nyungwe National Park">
                  Nyungwe National Park
                </option>

                <option value="Lake Kivu">
                  Lake Kivu
                </option>

                <option value="Kigali City">
                  Kigali City
                </option>

                <option value="Rwanda Cultural Experience">
                  Rwanda Cultural Experience
                </option>

              </select>

            </div>


            {/* DATE + PEOPLE */}

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="font-semibold">
                  Safari Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-4 border rounded-xl"
                />

              </div>


              <div>

                <label className="font-semibold">
                  Number of People
                </label>

                <input
                  type="number"
                  name="people"
                  value={form.people}
                  onChange={handleChange}
                  min="1"
                  placeholder="e.g. 2"
                  required
                  className="w-full mt-2 p-4 border rounded-xl"
                />

              </div>

            </div>


            {/* MESSAGE */}

            <div>

              <label className="font-semibold">
                Additional Message
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us anything about your safari..."
                className="w-full mt-2 p-4 border rounded-xl"
              />

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition"
            >

              <FaWhatsapp className="text-2xl" />

              Send Booking to WhatsApp

            </button>

          </form>

        </div>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#07130d] text-white">


        {/* MAIN FOOTER */}

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">


            {/* COMPANY */}

            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  WC
                </div>

                <div>

                  <h2 className="text-xl font-bold">
                    Wild Connector
                  </h2>

                  <p className="text-yellow-400 text-xs tracking-[4px]">
                    SAFARIS
                  </p>

                </div>

              </div>


              <p className="text-gray-400 leading-7">
                Discover the beauty of Africa with Wild Connector Safaris.
                Experience unforgettable wildlife, nature, culture and adventure.
              </p>


              {/* SOCIAL */}

              <div className="flex gap-3 mt-7">

                <a
                  href="https://www.facebook.com/neg.edson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>


                <a
                  href="https://www.instagram.com/wild_connector_safaris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>


                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition"
                >
                  <FaTwitter />
                </a>


                <a
                  href="https://youtube.com/@wildconnectorsafaris80"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:scale-110 transition"
                >
                  <FaYoutube />
                </a>

              </div>

            </div>


            {/* QUICK LINKS */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Quick Links
              </h3>

              <div className="space-y-4">

                <Link
                  to="/Home"
                  className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition"
                >
                  Home
                </Link>

                <Link
                  to="/Tours"
                  className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition"
                >
                  Safari Tours
                </Link>

                <Link
                  to="/Destinations"
                  className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition"
                >
                  Destinations
                </Link>

                <Link
                  to="/Gallery"
                  className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition"
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  className="block text-gray-400 hover:text-yellow-400 hover:translate-x-2 transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>


            {/* CONTACT */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Contact Us
              </h3>


              <div className="space-y-5">


                <div className="flex items-start gap-4">

                  <FaMapMarkerAlt className="text-yellow-400 mt-1" />

                  <p className="text-gray-400">
                    Kigali, Rwanda
                  </p>

                </div>


                <div className="flex items-start gap-4">

                  <FaPhone className="text-yellow-400 mt-1" />

                  <a
                    href="tel:+250793189242"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    +250 793 189 242
                  </a>

                </div>


                <div className="flex items-start gap-4">

                  <FaEnvelope className="text-yellow-400 mt-1" />

                  <a
                    href="mailto:info@wildconnectorsafaris.com"
                    className="text-gray-400 hover:text-yellow-400 transition break-all"
                  >
                    info@wildconnectorsafaris.com
                  </a>

                </div>

              </div>


              <a
                href="https://wa.me/250793189242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-7 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-full font-semibold transition hover:scale-105"
              >

                <FaWhatsapp className="text-2xl" />

                Chat on WhatsApp

              </a>

            </div>


            {/* NEWSLETTER */}

            <div>

              <h3 className="text-xl font-bold mb-6">
                Stay Connected
              </h3>

              <p className="text-gray-400 leading-6 mb-5">
                Subscribe to receive safari news, travel tips,
                special offers and new adventures.
              </p>


              <form
                onSubmit={(e) => {

                  e.preventDefault();

                  alert("Thank you for subscribing!");

                }}
                className="flex flex-col gap-3"
              >

                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-yellow-400"
                />


                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-3 rounded-xl transition"
                >

                  Subscribe

                  <FaArrowRight />

                </button>

              </form>


              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. No spam.
              </p>

            </div>

          </div>

        </div>


        {/* BOTTOM FOOTER */}

        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

              <p className="text-gray-500 text-center">
                © 2026 Wild Connector Safaris. All rights reserved.
              </p>


              <div className="flex gap-6">

                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="text-gray-500 hover:text-yellow-400 transition"
                >
                  Terms
                </Link>

              </div>


              <p className="text-gray-500 flex items-center gap-2">

                Made with

                <FaHeart className="text-red-500" />

                in Rwanda

              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            FLOATING WHATSAPP
        ================================================= */}

        {!isWhatsAppOpen && (

          <button
            type="button"
            onClick={() => setIsWhatsAppOpen(true)}
            aria-label="Open WhatsApp chat"
            className="fixed bottom-6 right-7 z-[9999] w-[68px] h-[68px] bg-[#00c853] hover:bg-[#00b84a] rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110"
          >

            <FaWhatsapp className="text-white text-4xl" />


            {/* NOTIFICATION */}

            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 border-2 border-white rounded-full" />

          </button>

        )}


        {/* =================================================
            WHATSAPP CHAT WINDOW
        ================================================= */}

        {isWhatsAppOpen && (

          <div className="fixed bottom-5 right-6 z-[9999] w-[400px] max-w-[calc(100vw-24px)] h-[520px] max-h-[calc(100vh-30px)] bg-[#f7f3ed] rounded-[20px] shadow-2xl overflow-hidden border border-gray-300 flex flex-col">


            {/* CHAT HEADER */}

            <div className="bg-[#079b87] text-white px-5 py-4 flex items-center">


              <div className="relative">

                <img
                  src="https://img.sanishtech.com/u/62b805f907e2ed766e6c1e5c023d876b.webp"
                  alt="Wild Connector Safaris"
                  className="w-[55px] h-[55px] rounded-full object-cover border-2 border-white"
                />

                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full" />

              </div>


              <div className="ml-3 flex-1">

                <h3 className="text-[21px] font-bold">
                  Wild Connector
                </h3>

                <p className="text-[14px]">
                  Usually replies instantly
                </p>

              </div>


              <button
                type="button"
                onClick={() => setIsWhatsAppOpen(false)}
                className="text-white text-4xl font-light hover:text-gray-200"
              >
                ×
              </button>

            </div>


            {/* CHAT BODY */}

            <div className="flex-1 px-5 py-6 relative overflow-hidden">


              <div className="relative flex justify-center mb-4">

                <span className="bg-[#dff5ef] text-gray-500 px-4 py-1 rounded-full text-sm">
                  Today
                </span>

              </div>


              <div className="relative bg-white rounded-2xl shadow-md px-5 py-4 max-w-[90%]">

                <p className="text-[17px] leading-7 text-gray-700">

                  Hello 👋 Wild Connector Safaris
                  <br />
                  I'd love to enquire about a safari

                </p>

                <div className="text-right text-gray-400 text-xs mt-1">
                  Now
                </div>

              </div>

            </div>


            {/* CHAT INPUT */}

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
                  className="flex-1 bg-[#697386] text-white placeholder-gray-300 px-5 py-3 rounded-full text-base outline-none"
                />


                <button
                  type="button"
                  onClick={sendWhatsAppMessage}
                  aria-label="Send WhatsApp message"
                  className="w-[52px] h-[52px] bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition"
                >

                  <FaArrowRight className="text-white" />

                </button>

              </div>

            </div>


            {/* CHAT FOOTER */}

            <div className="bg-[#fafafa] text-center text-gray-400 py-2 text-xs">

              WhatsApp Chat • Wild Connector Safaris

            </div>

          </div>

        )}

      </footer>

    </div>
  );
}

export default Booking;