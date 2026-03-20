import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Eye, Award } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Preserving Heritage, Building Community, Celebrating Culture
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-orange-900">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Mharo Rajasthan Club was established in 2015 with a vision to
              create a platform where Rajasthanis and culture enthusiasts could
              come together to celebrate and preserve the rich heritage of
              Rajasthan.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              What started as a small gathering of 20 members has grown into a
              vibrant community of over 500 active members who participate in
              cultural events, educational programs, and social initiatives.
            </p>
            <p className="text-lg text-gray-700">
              Our club serves as a bridge between the glorious past and the
              dynamic present, ensuring that the timeless traditions of
              Rajasthan continue to thrive for generations to come.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607160913542-6234aae47ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQwMTE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Rajasthan Heritage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-900">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create a vibrant cultural community at VIT Bhopal that celebrates Rajasthani heritage through
                engaging events, workshops, and programs that bring students together.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-900">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the most dynamic cultural club at VIT Bhopal, inspiring students to embrace and
                celebrate Rajasthani culture while creating unforgettable campus experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg">
              <div className="w-20 h-20 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rose-900">
                Our Values
              </h3>
              <p className="text-gray-700">
                Authenticity, Community, Excellence, Inclusivity, and Respect
                for traditions while embracing innovation and progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
          Our Founders
        </h2>
        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold mb-4 text-orange-900">
                Student Leadership
              </h3>
              <p className="text-xl text-gray-700 mb-6 italic">
                Founded by passionate VIT Bhopal students in 2023
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Mharo Rajasthan Club was founded by a group of enthusiastic students from Rajasthan
                who wanted to bring a piece of their home to the VIT Bhopal campus. What began as
                informal gatherings to celebrate festivals evolved into an official student club.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The founding members worked tirelessly to organize the first "Padharo Sa" event,
                which was a massive success and laid the foundation for what has become one of the
                most popular cultural clubs on campus.
              </p>
              <p className="text-lg text-gray-700">
                Under the guidance of faculty advisors and with support from the university, the club
                has organized numerous successful events, bringing the vibrant culture of Rajasthan
                to life for the entire VIT Bhopal community.
              </p>
            </div>
            <div className="relative h-96 lg:h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1534758755011-03cdf52658d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBIYXdhJTIwTWFoYWwlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NzQwMTE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rajasthan Heritage Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-5xl font-bold text-orange-600 mb-2">
                200+
              </div>
              <p className="text-lg text-gray-700">Active Members</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <div className="text-5xl font-bold text-pink-600 mb-2">25+</div>
              <p className="text-lg text-gray-700">Events Organized</p>
            </div>
            <div className="text-center p-6 bg-rose-50 rounded-lg">
              <div className="text-5xl font-bold text-rose-600 mb-2">4</div>
              <p className="text-lg text-gray-700">Flagship Events</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-5xl font-bold text-yellow-600 mb-2">3K+</div>
              <p className="text-lg text-gray-700">Students Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h3 className="text-2xl font-bold mb-4">Cultural Events</h3>
            <p className="text-gray-700">
              We organize festivals, folk performances, traditional music
              concerts, and dance programs throughout the academic year to keep Rajasthani culture alive on campus.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-pink-500">
            <h3 className="text-2xl font-bold mb-4">Workshops & Activities</h3>
            <p className="text-gray-700">
              Hands-on workshops on traditional arts, crafts, music, dance, and cuisine help
              students learn and appreciate Rajasthani culture and traditions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-rose-500">
            <h3 className="text-2xl font-bold mb-4">Student Community</h3>
            <p className="text-gray-700">
              We create a home away from home for Rajasthani students and provide opportunities
              for all students to connect, network, and celebrate together.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h3 className="text-2xl font-bold mb-4">Campus Integration</h3>
            <p className="text-gray-700">
              Bringing diverse cultural experiences to VIT Bhopal and promoting cultural exchange
              among students from different backgrounds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}