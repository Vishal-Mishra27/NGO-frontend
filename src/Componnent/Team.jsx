import React from 'react';
const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Passionate about creating positive social impact through innovative solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'john@example.com'
    }
  },
  {
    name: 'Jane Smith',
    role: 'Program Manager',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    bio: 'Dedicated to implementing effective programs that transform communities.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'jane@example.com'
    }
  },
  {
    name: 'Raj Kumar',
    role: 'Community Outreach Coordinator',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    bio: 'Building bridges between communities and creating lasting partnerships.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'raj@example.com'
    }
  },
  {
    name: 'Sita Devi',
    role: 'Volunteer Coordinator',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Empowering volunteers to make a meaningful difference in society.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sita@example.com'
    }
  },
];

function Team() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working together to create positive change in our community
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
             
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
        </div>
      </div>

              {/* Hover Effect Overlay */}
              {/* <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-20 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our cause and make a difference in the community.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Open Positions
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Lives Impacted</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Cities Reached</div>
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
}

export default Team;