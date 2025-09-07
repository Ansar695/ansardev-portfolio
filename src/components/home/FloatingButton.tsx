'use client';

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
    const phone = "+923089275988"
    const message = "Hello, I would like to get in touch with you."
    const encoded = encodeURIComponent(message);
    const href = `https://wa.me/${phone}${message ? `?text=${encoded}` : ""}`
  return (
    <Link href={href} target="_blank" aria-label="WhatsApp Link">
    <div
      className={`fixed w-16 h-16 rounded-full bottom-6 right-6 flex items-center px-3 py-2 justify-center bg-green-500 backdrop-blur-md shadow-lg transition-transform transform group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer hover:scale-110 z-50`}
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </div>
    </Link>
  );
};

export default FloatingButton;
