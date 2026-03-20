import { Mail, Phone, Linkedin } from "lucide-react";

export function Team() {
  const executiveTeam = [
    {
      name: "Manish Choudhary",
      position: "President",
      bio: "Final Year CSE student passionate about Rajasthani culture",
      email: "president.mharo@vitbhopal.ac.in",
      phone: "+91 98765 43210",
    },
    {
      name: "Yuvraj Rajpurohit",
      position: "Vice President",
      bio: "Expert in traditional dance and cultural event management",
      email: "vp.mharo@vitbhopal.ac.in",
      phone: "+91 98765 43211",
    },
    {
      name: "Vikram Shekhawat",
      position: "General Secretary",
      bio: "Coordinates all club activities and member engagement",
      email: "secretary.mharo@vitbhopal.ac.in",
      phone: "+91 98765 43212",
    },
    {
      name: "Priya Rajput",
      position: "Treasurer",
      bio: "Manages club finances and sponsorship relations",
      email: "treasurer.mharo@vitbhopal.ac.in",
      phone: "+91 98765 43213",
    },
  ];

  const departmentHeads = [
    {
      department: "Event Management Team",
      head: "Rohan Meena",
      members: ["Amit Sharma", "Kavita Singh", "Neha Purohit"],
    },
    {
      department: "Cultural Team",
      head: "Geeta Choudhary",
      members: ["Rahul Joshi", "Priya Chauhan", "Deepak Kumawat"],
    },
    
    {
      department: "PR & Outreach Team",
      head: "Sunita Bhati",
      members: ["Ravi Rathore", "Pooja Panwar", "Ajay Gehlot"],
    },
    {
      department: "Technical Team",
      head: "Nabh Garg",
      members: ["Samridhi Tyagi", "Shatabdi Singh", "Yash Singhal"],
    },
    {
      department: "Content Team",
      head: "Ishaan Joshi",
      members: ["Rekha Kumawat", "Suresh Rajput", "Lalita Chauhan"],
    },
    {
      department: "Marketing Team",
      head: "Ishaan Joshi",
      members: ["Rekha Kumawat", "Suresh Rajput", "Lalita Chauhan"],
    },
    {
      department: "Design Team",
      head: "Ishaan Joshi",
      members: ["Rekha Kumawat", "Suresh Rajput", "Lalita Chauhan"],
    },
  ];

  const advisoryBoard = [
    {
      name: "Mr.C.S.Rajpoot",
      designation: "Faculty coordinator",
      expertise: "Student Activities & Cultural Programs",
    },
   
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated individuals working together to preserve and promote
            Rajasthani culture
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
          Executive Committee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executiveTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.split(" ")[1][0]}
                {member.name.split(" ")[2]?.[0] || ""}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">
                {member.name}
              </h3>
              <p className="text-orange-600 text-center font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 text-center text-sm mb-4">
                {member.bio}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} className="text-orange-500" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-orange-600"
                  >
                    Email
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} className="text-orange-500" />
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Department Heads */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
            Department Heads & Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((dept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg shadow-lg p-6 border-t-4 border-orange-500"
              >
                <h3 className="text-2xl font-bold mb-3 text-orange-900">
                  {dept.department}
                </h3>
                <div className="mb-4 pb-4 border-b border-orange-200">
                  <p className="font-semibold text-gray-700 mb-1">
                    Department Head
                  </p>
                  <p className="text-orange-600 font-bold">{dept.head}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    Team Members
                  </p>
                  <ul className="space-y-1">
                    {dept.members.map((member, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="text-orange-500 mr-2">•</span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-orange-900">
          Advisory Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisoryBoard.map((advisor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-b-4 border-pink-500"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {advisor.name.split(" ")[0][0]}
                {advisor.name.split(" ")[1]?.[0] ||
                  advisor.name.split(" ")[2]?.[0] ||
                  ""}
              </div>
              <h3 className="text-lg font-bold mb-1">{advisor.name}</h3>
              <p className="text-pink-600 font-semibold text-sm mb-3">
                {advisor.designation}
              </p>
              <p className="text-gray-600 text-sm">{advisor.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for enthusiastic students who want to
            contribute to promoting Rajasthani culture on campus. Whether you're interested in
            organizing events, performing, or simply celebrating your heritage, we'd
            love to have you!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
             
            >
              
              
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
