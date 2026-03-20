import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, Users, MapPin, Heart } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1607160913542-6234aae47ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQwMTE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rajasthan Palace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-pink-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mharo Rajasthan Club
            </h1>
            <p className="text-xl md:text-2xl mb-2 max-w-3xl mx-auto">
              VIT Bhopal University
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Celebrating the vibrant culture, traditions, and heritage of the
              Land of Kings
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/about"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/events"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded-lg transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Rich Culture</h3>
            <p className="text-gray-600">
              Experience the vibrant traditions and customs of Rajasthan
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-pink-500">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Cultural Events</h3>
            <p className="text-gray-600">
              Regular festivals, programs, and cultural celebrations
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-rose-500">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600">
              Join a vibrant community celebrating Rajasthani heritage
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-yellow-500">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <p className="text-gray-600">
              Network with fellow Rajasthanis and culture enthusiasts
            </p>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-900">
                About Our Club
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Mharo Rajasthan Club is VIT Bhopal University's premier cultural club dedicated to preserving and
                promoting the rich cultural heritage of Rajasthan. We bring
                together students who share a love for Rajasthani traditions,
                art, music, dance, and cuisine.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our club serves as a platform for students to connect with their roots while creating
                unforgettable memories through vibrant cultural events and festivals on campus.
              </p>
              <Link
                to="/about"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Read More
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534758755011-03cdf52658d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBIYXdhJTIwTWFoYWwlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NzQwMTE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jaipur Hawa Mahal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Event Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center text-orange-900">
          Current Event
        </h2>
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1773114156068-2291df7d43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjB0cmFkaXRpb25hbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NDAxMTc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rajasthan Festival"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 text-white">
              <div className="inline-block bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                UPCOMING
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Rangilo Rajasthan 2026
              </h3>
              <p className="text-lg mb-6">
                Get ready for our biggest cultural fest of the year! Experience the colors, music, and flavors of Rajasthan right here on campus with performances, competitions, and traditional festivities.
              </p>
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>April 15-16, 2026</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>VIT Bhopal University Campus</span>
                </p>
              </div>
              <Link
                to="/events"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Famous Events */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-orange-900">
            Our Signature Events
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Celebrating Rajasthani culture through memorable events that bring our campus together
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Padharo Sa */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672071367695-35958d5c8c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY3VsdHVyYWwlMjBldmVudCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc0MDEyNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Padharo Sa Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold">
                  2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-orange-900">
                  Padharo Sa
                </h3>
                <p className="text-gray-700 mb-4">
                  Our inaugural flagship event that introduced VIT Bhopal to the grandeur of Rajasthani culture. Featured traditional dance performances, folk music, and authentic Rajasthani cuisine.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-orange-500" />
                    500+ attendees
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-orange-500" />
                    September 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Padharo Sa 2.0 */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWwlMjBjcm93ZCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDAxMjQyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Padharo Sa 2.0 Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full font-bold">
                  2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-pink-900">
                  Padharo Sa 2.0
                </h3>
                <p className="text-gray-700 mb-4">
                  The much-awaited second edition that doubled in size and grandeur! Included Ghoomar dance competitions, traditional attire showcase, and a mesmerizing Kalbeliya performance.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-pink-500" />
                    800+ attendees
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-pink-500" />
                    January 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Thar */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670687174580-c003b4716959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0MDExNzczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Thar Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-4 py-2 rounded-full font-bold">
                  2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-900">
                  Thar - The Desert Fest
                </h3>
                <p className="text-gray-700 mb-4">
                  A unique desert-themed cultural night featuring traditional Rajasthani folk tales, puppet shows (Kathputli), and an authentic desert setup with folk musicians and bonfire.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-yellow-600" />
                    600+ attendees
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-yellow-600" />
                    February 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Rangilo Rajasthan */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555725305-e823b44548de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHMlMjBncm91cCUyMGV2ZW50fGVufDF8fHx8MTc3NDAxMjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rangilo Rajasthan Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-2 rounded-full font-bold">
                  2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-rose-900">
                  Rangilo Rajasthan
                </h3>
                <p className="text-gray-700 mb-4">
                  Our annual mega cultural fest celebrating Rajasthan in all its glory! Two days of non-stop performances, competitions, food stalls, handicraft exhibitions, and cultural workshops.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-rose-500" />
                    1000+ attendees
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-rose-500" />
                    March 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}