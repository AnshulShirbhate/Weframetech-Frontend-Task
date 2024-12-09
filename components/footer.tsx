import React from "react";
// import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-14 mb-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start col-span-1">
          <div>
            <span className='flex items-center justify-center'>
                <Image height={100} width={100} src="/logo1.png" alt="logo1" className='h-11 w-16 '></Image>
            </span>
            <Image height={100} width={100} src="/logo2.png" alt="Logo" className="h-5 w-40" />
          </div>
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">INFOS PRATIQUES</h4>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d&apos;emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>

        {/* Legal Links Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">LÉGAL</h4>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* Third Column for Links Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-2">MON COMPTE</h4>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>Accéder à mon compte</li>
            <li>Ma liste d’envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold mb-2">NOUS SUIVRE</h4>
          <div className="flex justify-center md:justify-end space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-500 border border-gray-300 rounded-md p-1">
              <Twitter size={30} />
            </a>
            <a href="#" className="hover:text-pink-500 border border-gray-300 rounded-md p-1">
              <Instagram size={30} />
            </a>
            <a href="#" className="hover:text-blue-700 border border-gray-300 rounded-md p-1">
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
