import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary rounded"></div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I’m a passionate MERN Stack Developer with a strong foundation
                in modern web technologies. I thrive on building clean,
                interactive, and user-focused web applications that solve
                real-world problems. My goal is to create fast, scalable
                solutions that deliver real value to users and businesses alike.
              </p>

              <p>
                With expertise in React.js, Node.js, MongoDB, and Tailwind CSS,
                I specialize in building scalable, maintainable full-stack
                applications. I'm passionate about delivering seamless user
                experiences on the frontend and efficient, secure solutions on
                the backend.
              </p>

              <p>
                When I’m not coding, I enjoy keeping up with the latest web
                development trends, exploring new technologies, and contributing
                to open-source projects. I believe in continuous learning to
                stay sharp and deliver better solutions every day.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Problem Solving
                </span>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Team Collaboration
                </span>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-gray-700">
                  Continuous Learning
                </span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>

              {/* Stats Cards */}
              <div className="absolute inset-0 flex flex-col justify-center space-y-4 p-6">
                <div className="bg-white p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">3+</p>
                      <p className="text-sm text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">25+</p>
                      <p className="text-sm text-gray-600">
                        Projects Completed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">5+</p>
                      <p className="text-sm text-gray-600">
                        Technologies Mastered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
