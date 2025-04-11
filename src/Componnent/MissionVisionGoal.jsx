import React from "react";
import missionImg from "../assets/mission.jpg";


function MissionVisionGoal() {
  return (
    <>

      <div className="bg-gray-50 pt-20 lg:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-8 sm:mb-12 animate-fade-in">
            Our Mission, Vision & Goal
          </h1>

          {/* Mission Section */}
          <div className="mb-12 lg:mb-20">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl">
              <img
                src={missionImg}
                alt="Mission"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="mt-8 sm:mt-12 px-4 sm:px-8 lg:px-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 text-center drop-shadow-lg">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                At <span className="font-bold">[Your NGO Name]</span>, our
                mission is to create a brighter and more equitable future by
                empowering the most vulnerable sections of society. We are
                dedicated to providing{" "}
                <span className="font-bold">quality education</span> to
                underprivileged children, ensuring that every child has the
                opportunity to learn, grow, and build a better future. Through
                our <span className="font-bold">Nari Shakti</span> initiative,
                we strive to uplift and empower women by offering skill
                development programs, vocational training, and financial
                independence opportunities. Additionally, our{" "}
                <span className="font-bold">Muft Bhojan (Free Food)</span>{" "}
                initiative ensures that no one sleeps hungry, as we work
                tirelessly to provide nutritious meals to the needy. Our goal is
                to foster a world where education, empowerment, and nourishment
                are accessible to all, creating a society built on dignity,
                equality, and compassion.
              </p>
            </div>

            {/* Mission Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-8">
              {[
                {
                  src: "https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
                  alt: "Child Education",
                  title: "Education Initiative",
                },
                {
                  src: "https://blogger.googleusercontent.com/img/a/AVvXsEjTvaspZM-q5s7j_2LhUDBNSWIJV8REUW6AwytNlFf6_25MHa_wOxWeLw4QvBtRv1_mMvn2yPBrkODCSCh3eUeta0NzKh1aeF9VKtHIgv9wA6QehlK0gsReiEYxeJ197K8ZFYVDthCdI4EzZ6o8jGw9WNL4O7MCmprl8TJMH9qSK58BQxJdrXXx6V7qaA",
                  alt: "Nari Shakti",
                  title: "Women Empowerment",
                },
                {
                  src: "https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202011/foodman_tstg1_0.jpg",
                  alt: "Muft Bhojan",
                  title: "Food Distribution",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform transition duration-500 group-hover:scale-110"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      Click to learn more
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section - Similar structure with different colors */}
          <div className="mb-12 lg:mb-20">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl">
              <img
                src="https://www.mglobal.in/assets/image/Our_Vision.webp"
                alt="Vision"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="mt-8 sm:mt-12 px-4 sm:px-8 lg:px-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-6 text-center drop-shadow-lg">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                At <span className="font-bold">[Your NGO Name]</span>, we
                envision a society where{" "}
                <span className="font-bold">every child</span> has access to
                quality education, breaking the cycle of poverty and paving the
                way for a brighter future. We strive for a world where{" "}
                <span className="font-bold">women are empowered</span>,
                self-reliant, and have equal opportunities to lead and inspire
                change. Through our{" "}
                <span className="font-bold">Nari Shakti</span> initiative, we
                dream of a future where every woman is confident, independent,
                and a pillar of strength for her community. Additionally, we
                aspire to build a{" "}
                <span className="font-bold">hunger-free society</span> where no
                individual sleeps on an empty stomach, ensuring dignity and
                well-being for all through our{" "}
                <span className="font-bold">Muft Bhojan</span> initiative. Our
                vision is to create a world filled with hope, equality, and
                compassion, where education, empowerment, and nourishment are
                not privileges but fundamental rights for everyone.
              </p>
            </div>

            {/* Vision Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 sm:px-8">
              {[
                {
                  src: "https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg",
                  alt: "Child Education",
                  title: "NGO working for Education",
                },
                {
                  src: "https://pbs.twimg.com/profile_images/1763845291688755200/c78moMoW_400x400.png",
                  alt: "Nari Shakti",
                  title: "Nari Shakti",
                },
                {
                  src: "https://iskconmumbaipull-21250.kxcdn.com/web/image/2453-662a8255/ff2.webp",
                  alt: "Muft Bhojan",
                  title: "Food Distribution",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform transition duration-500 group-hover:scale-110"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-semibold">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mt-2">
                      Click to learn more
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goal Section */}
          <div className="py-8 ">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] overflow-hidden rounded-xl shadow-2xl mb-12">
              <img
                src="https://cdn.prod.website-files.com/61017e6b22c7fa6cb9edc36a/6111cafc6c7c59b4e6f76441_60d8c65c6cf8470ae5d2e9fc_SMART-goal-setting-1300x867.jpeg"
                alt="Goal"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <div className=" text-center">
              <h2 className="text-3xl font-bold text-pink-600 drop-shadow-lg">
                Our Goal
              </h2>
              <div className="max-w-7xl mx-auto py-8  sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                  Our Key Objectives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Education & Awareness */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-blue-600 py-4">
                      <h3 className="text-xl font-semibold text-white text-center">
                        Education & Awareness
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4 text-justify">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                            1
                          </span>
                          <p className="text-gray-700">
                            Provide quality education to underprivileged
                            children
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                            2
                          </span>
                          <p className="text-gray-700">
                            Organize awareness campaigns on social issues like
                            child labor and gender equality
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">
                            3
                          </span>
                          <p className="text-gray-700">
                            Conduct skill development programs for youth and
                            women
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Women Empowerment */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-pink-600 py-4">
                      <h3 className="text-xl font-semibold text-white text-center">
                        Women Empowerment
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4 text-justify">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-semibold mr-3">
                            1
                          </span>
                          <p className="text-gray-700">
                            Encourage women's participation in leadership and
                            decision-making
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-semibold mr-3">
                            2
                          </span>
                          <p className="text-gray-700">
                            Provide vocational training and employment
                            opportunities for women
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 font-semibold mr-3">
                            3
                          </span>
                          <p className="text-gray-700">
                            Promote gender equality and fight against domestic
                            violence
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Child Welfare & Protection */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-green-600 py-4">
                      <h3 className="text-xl font-semibold text-white text-center">
                        Child Welfare & Protection
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4 text-justify">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold mr-3">
                            1
                          </span>
                          <p className="text-gray-700">
                            Rescue and rehabilitate children from abuse,
                            trafficking, and exploitation
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold mr-3">
                            2
                          </span>
                          <p className="text-gray-700">
                            Promote child rights and ensure access to safe homes
                            and education
                          </p>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold mr-3">
                            3
                          </span>
                          <p className="text-gray-700">
                            Provide nutrition and healthcare support for
                            malnourished children
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Optional: Add a call-to-action button */}
                <div className="mt-12 text-center">
                  <a
                    href="/donate"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
                  >
                    Support Our Cause
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default MissionVisionGoal;
