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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-700">
                    Mharo Rajasthan Club
                    <br />
                    Student Activity Center
                    <br />
                    VIT Bhopal University
                    <br />
                    Bhopal-Indore Highway, Kothrikalan
                    <br />
                    Sehore, Madhya Pradesh - 466114
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-pink-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Numbers</h3>
                  <p className="text-gray-700">
                    President: +91 98765 43210
                    <br />
                    Event Inquiries: +91 98765 43211
                    <br />
                    General: +91 755 269 8000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-rose-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Addresses</h3>
                  <p className="text-gray-700">
                    General: mharo.rajasthan@vitbhopal.ac.in
                    <br />
                    Events: events.mharo@vitbhopal.ac.in
                    <br />
                    Membership: join.mharo@vitbhopal.ac.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 5:00 PM - 8:00 PM
                    <br />
                    Saturday: 3:00 PM - 7:00 PM
                    <br />
                    Sunday: Event days only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-orange-900">
              Send Us a Message
            </h2>
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none">
                  <option>General Inquiry</option>
                  <option>Membership Information</option>
                  <option>Event Information</option>
                  <option>Volunteer Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:from-orange-700 hover:to-pink-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-orange-900">
            Find Us Here
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={64} className="mx-auto mb-4 text-orange-600" />
              <p className="text-lg font-semibold">Mharo Rajasthan Club</p>
              <p>Student Activity Center, VIT Bhopal University</p>
              <p>Bhopal-Indore Highway, Kothrikalan</p>
              <p>Sehore, Madhya Pradesh - 466114</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-semibold"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-900">
          How to Reach Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-3">By Car</h3>
            <p className="text-gray-700">
              Located on Bhopal-Indore Highway. Well-connected from Bhopal city (35km).
              Parking available on campus.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6">
            <div className="text-4xl mb-4">🚌</div>
            <h3 className="text-xl font-bold mb-3">By Bus</h3>
            <p className="text-gray-700">
              Regular buses from Bhopal to Sehore. University shuttle service available
              from Bhopal Railway Station.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-6">
            <div className="text-4xl mb-4">🚂</div>
            <h3 className="text-xl font-bold mb-3">By Train</h3>
            <p className="text-gray-700">
              Nearest railway station: Bhopal Junction (35km). University transport
              available on request for events.
            </p>
          </div>
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