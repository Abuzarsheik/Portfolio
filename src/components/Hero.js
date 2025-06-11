import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                Muhammad Abuzar Zubair
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
                MERN Stack Developer
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              I’m a passionate full-stack developer specializing in the MERN
              stack. I build fast, responsive web applications with sleek
              frontends and scalable backend solutions. I focus on clean code,
              great user experience, and real-world functionality that helps
              businesses grow
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToProjects} className="btn-primary">
                View My Work
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-tl from-accent to-primary rounded-full opacity-30 animate-pulse delay-75"></div>

              {/* Code-like decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border">
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-800">
                      <span className="text-purple-600">const</span>{" "}
                      <span className="text-blue-600">developer</span> = {"{"}
                    </div>
                    <div className="text-gray-800 ml-4">
                      name: <span className="text-green-600">'Your Name'</span>,
                    </div>
                    <div className="text-gray-800 ml-4">
                      skills:{" "}
                      <span className="text-green-600">
                        ['React', 'Node.js']
                      </span>
                      ,
                    </div>
                    <div className="text-gray-800 ml-4">
                      passion:{" "}
                      <span className="text-green-600">
                        'Building Amazing Apps'
                      </span>
                    </div>
                    <div className="text-gray-800">{"}"}</div>
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

export default Hero;
