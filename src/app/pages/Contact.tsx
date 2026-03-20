import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with us to learn more about our club, events, or
            membership opportunities
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-orange-900">
              Get In Touch
            </h2>
            <div className="space-y-6">
  


              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-rose-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Addresses</h3>
                  <p className="text-gray-700">
                    General: mharorajasthanvitb@gmail.com
                    <br />
                    Faculty:choursingh.rajpoot@vitbhopal.ac.in
                    <br />
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
         
        </div>
      </section>

  


      {/* Social Media */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Follow Us</h2>
          <p className="text-xl mb-8">
            Stay connected with us on social media for latest updates, event
            photos, and cultural content
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="#"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-orange-600 hover:bg-gray-100 transition-colors"
            >
              <Facebook size={32} />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-gray-100 transition-colors"
            >
              <Instagram size={32} />
            </a>
            <a
              href="#"
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <Twitter size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
