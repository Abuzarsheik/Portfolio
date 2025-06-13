import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Blockchain Based E-Commerce Platform",
      description:
        "A decentralized eCommerce platform built using React, Node.js, MongoDB, and Solidity. It integrates MetaMask for secure Web3 authentication and features smart contract-based transactions, product listing, and order management—all powered by blockchain for enhanced transparency and trust",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Solidity",
        "Ethereum",
        "Web3.js",
        "MetaMask",
      ],
      githubLink: "https://github.com/Abuzarsheik/Blockchain-Ecommerce",
      liveLink: "https://blockchain-ecommerce-ruddy.vercel.app/",
      image: "/images/projects/blockchain-ecommerce.png",
      fallbackBg: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "Blog Platform",
      description:
        "A full-stack blogging platform with user authentication, post creation, and commenting system. Built with MERN stack and JWT authentication.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "https://blogs-navy-six.vercel.app/",
      githubLink: "https://github.com/Abuzarsheik/Blogs",
      image: "/images/projects/blog-platform.png",
      fallbackBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description:
        "A full-featured admin dashboard built with the MERN stack, offering secure JWT-based authentication and complete CRUD functionality for managing products and users. It includes real-time sales analytics using Recharts, responsive design with Tailwind CSS, protected routes, dynamic search and filter options, and a modern sidebar layout tailored for internal tool management",
      technologies: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Recharts (for data visualization)",
        "Axios (for API requests)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose (MongoDB ODM)",
        "JSON Web Tokens (JWT) – Authentication",
        "bcrypt.js – Password hashing",
      ],
      githubLink: "https://github.com/Abuzarsheik/Admin-Dashboard",
      liveLink: "https://admin-dashboard-m1u3v3n7m-abuzarsheiks-projects.vercel.app/dashboard",
      image: "/images/projects/admin-dashboard.png",
      fallbackBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title : "Appointment Booking System",
      description:
        "A full-stack appointment booking system with role-based access and real-time scheduling, built using React, Node.js, MongoDB, and Tailwind CSS to streamline service-based bookings for clients and admins",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "React Router", "Axios", "JWT", "bcrypt.js", "Express.js", "Mongoose"],
      githubLink: "https://github.com/Abuzarsheik/Appointment-Booking-System",
      liveLink: "https://appointment-booking-system-git-master-abuzarsheiks-projects.vercel.app/",
      image: "/images/projects/appointment-booking-system.png",
      fallbackBg: "bg-gradient-to-br from-green-400 to-blue-500",
    },
    {
      id: 5,
      title: "Real Estate Website",
      description:
        "A modern real estate website with property listings, search functionality, and contact forms. Features responsive design and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "APIs"],
      githubLink: "https://github.com/yourusername/real-estate",
      liveLink: "https://real-estate-demo.vercel.app",
      image: "/images/projects/real-estate.png",
      fallbackBg: "bg-gradient-to-br from-teal-400 to-blue-500",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "A personal fitness tracking application with workout logging, progress charts, and goal setting. Built with React and Chart.js for data visualization.",
      technologies: ["React", "Chart.js", "Local Storage", "CSS3"],
      githubLink: "https://github.com/yourusername/fitness-tracker",
      liveLink: "https://fitness-tracker-demo.vercel.app",
      image: "/images/projects/fitness-tracker.png",
      fallbackBg: "bg-gradient-to-br from-red-400 to-yellow-500",
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      {/* Project Image/Visual */}
      <div className="h-48 relative overflow-hidden">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className={`${project.fallbackBg} w-full h-full absolute top-0 left-0 hidden items-center justify-center`}
            >
              <div className="text-white text-lg font-bold opacity-80">
                {project.title}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </a>
        ) : (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className={`${project.fallbackBg} w-full h-full absolute top-0 left-0 hidden items-center justify-center`}
            >
              <div className="text-white text-lg font-bold opacity-80">
                {project.title}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          </>
        )}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-gray-700">
              Project {project.id}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-xl font-bold text-secondary hover:text-primary transition-colors duration-200 cursor-pointer">
                {project.title}
              </h3>
            </a>
          ) : (
            <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
          )}
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-secondary transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:text-blue-700 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Abuzarsheik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
