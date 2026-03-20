import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

export function Events() {
  const currentEvent = {
    title: "Rangilo Rajasthan 2026",
    date: "April 15-16, 2026",
    time: "10:00 AM - 10:00 PM",
    venue: "VIT Bhopal University - Main Auditorium & Lawns",
    description:
      "The biggest cultural extravaganza of the year is back! Join us for two days of spectacular performances, competitions, authentic Rajasthani cuisine, handicraft exhibitions, and much more. Experience the vibrant colors and rich traditions of Rajasthan right here on campus!",
    highlights: [
      "Ghoomar & Kalbeliya dance competitions",
      "Folk music performances & live bands",
      "Traditional Rajasthani food festival",
      "Handicrafts & art exhibitions",
      "Cultural workshops and activities",
      "Traditional attire fashion show",
    ],
    image:
      "https://images.unsplash.com/photo-1773114156068-2291df7d43e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjB0cmFkaXRpb25hbCUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NDAxMTc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    attendance: "1000+ expected",
    entryFee: "Free for all VIT Bhopal students",
  };

  const upcomingEvents = [
    {
      title: "Gangaur Festival Celebration",
      date: "April 5, 2026",
      time: "6:00 PM - 9:00 PM",
      venue: "Student Activity Center, VIT Bhopal",
      description:
        "Traditional celebration of Goddess Gauri with rituals, traditional songs, and cultural programs performed by club members.",
      image:
        "https://images.unsplash.com/photo-1569851935603-4807584e18fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBmb2xrJTIwZGFuY2UlMjBjdWx0dXJlfGVufDF8fHx8MTc3NDAxMTc3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Dal Baati Churma Workshop",
      date: "April 12, 2026",
      time: "2:00 PM - 5:00 PM",
      venue: "University Mess Hall",
      description:
        "Learn to cook the iconic Rajasthani dish! Limited spots available. Registration required.",
      image:
        "https://images.unsplash.com/photo-1770992430305-d3b35d6c4beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0cmFkaXRpb25hbCUyMHBhdHRlcm5zJTIwbWFuZGFsYXxlbnwxfHx8fDE3NzQwMTE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Rajasthani Folk Music Night",
      date: "April 20, 2026",
      time: "7:00 PM - 10:00 PM",
      venue: "Open Air Theatre, VIT Bhopal",
      description:
        "An enchanting evening under the stars featuring traditional Rajasthani folk songs and instrumental performances.",
      image:
        "https://images.unsplash.com/photo-1607160913542-6234aae47ec5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBJbmRpYSUyMHBhbGFjZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQwMTE3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Bandhani Tie-Dye Workshop",
      date: "May 3, 2026",
      time: "10:00 AM - 2:00 PM",
      venue: "Design Lab, Academic Block",
      description:
        "Hands-on workshop on traditional Rajasthani Bandhani technique. Create your own tie-dye fabric to take home!",
      image:
        "https://images.unsplash.com/photo-1534758755011-03cdf52658d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBIYXdhJTIwTWFoYWwlMjBwaW5rJTIwY2l0eXxlbnwxfHx8fDE3NzQwMTE3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const pastEvents = [
    {
      title: "Rangilo Rajasthan 2025",
      date: "March 2025",
      attendance: "1000+ attendees",
      image: "https://images.unsplash.com/photo-1555725305-e823b44548de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb2xsZWdlJTIwc3R1ZGVudHMlMjBncm91cCUyMGV2ZW50fGVufDF8fHx8MTc3NDAxMjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Thar - The Desert Fest",
      date: "February 2025",
      attendance: "600+ attendees",
      image: "https://images.unsplash.com/photo-1670687174580-c003b4716959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSYWphc3RoYW4lMjBkZXNlcnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc0MDExNzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Padharo Sa 2.0",
      date: "January 2025",
      attendance: "800+ attendees",
      image: "https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWwlMjBjcm93ZCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3NDAxMjQyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Padharo Sa (Inaugural Event)",
      date: "September 2024",
      attendance: "500+ attendees",
      image: "https://images.unsplash.com/photo-1672071367695-35958d5c8c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY3VsdHVyYWwlMjBldmVudCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzc0MDEyNDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us in celebrating Rajasthani culture through vibrant festivals,
            workshops, and community gatherings
          </p>
        </div>
      </section>

      {/* Current Event - Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 text-center">
          <span className="inline-block bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold text-lg">
            🎉 HAPPENING NOW
          </span>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <ImageWithFallback
                src={currentEvent.image}
                alt={currentEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">{currentEvent.title}</h2>
              <p className="text-lg mb-6 leading-relaxed">
                {currentEvent.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm opacity-90">Date</p>
                    <p className="font-bold">{currentEvent.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm opacity-90">Time</p>
                    <p className="font-bold">{currentEvent.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm opacity-90">Venue</p>
                    <p className="font-bold">{currentEvent.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="flex-shrink-0" size={24} />
                  <div>
                    <p className="text-sm opacity-90">Attendance</p>
                    <p className="font-bold">{currentEvent.attendance}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Event Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentEvent.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-300 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/20 rounded-lg mb-6">
                <Ticket size={24} />
                <div>
                  <p className="text-sm opacity-90">Entry Fee</p>
                  <p className="text-2xl font-bold">{currentEvent.entryFee}</p>
                </div>
              </div>

              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors w-full md:w-auto">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-orange-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} className="text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} className="text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} className="text-orange-500" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
          Past Events Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-orange-900">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{event.date}</p>
                <p className="text-gray-700 font-semibold text-sm">{event.attendance}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Calendar Info */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our updates to receive notifications about upcoming events,
            workshops, and cultural programs. Never miss out on the fun!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 w-full md:w-96"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}