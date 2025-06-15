import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
      featured: true,
    },
    {
      id: 2,
      title: "Real-Time Chat App",
      description:
        "A full-stack real-time chat application with user authentication, WebSocket-based messaging, and responsive UI. Built for scalability and portfolio showcasing.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Socket.IO", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Abuzarsheik/chat-app",
      liveLink: "https://chat-app-frontend-xi-red.vercel.app",
      image: "/images/projects/chat-app.png",
      featured: true,
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description:
        "A full-featured admin dashboard built with the MERN stack, offering secure JWT-based authentication and complete CRUD functionality for managing products and users. It includes real-time sales analytics using Recharts, responsive design with Tailwind CSS, protected routes, dynamic search and filter options, and a modern sidebar layout tailored for internal tool management",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Recharts",
        "JWT",
      ],
      githubLink: "https://github.com/Abuzarsheik/Admin-Dashboard",
      liveLink: "https://admin-dashboard-m1u3v3n7m-abuzarsheiks-projects.vercel.app/dashboard",
      image: "/images/projects/admin-dashboard.png",
      featured: true,
    },
    {
      id: 4,
      title: "Appointment Booking System",
      description:
        "A full-stack appointment booking system with role-based access and real-time scheduling, built using React, Node.js, MongoDB, and Tailwind CSS to streamline service-based bookings for clients and admins",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "JWT"],
      githubLink: "https://github.com/Abuzarsheik/Appointment-Booking-System",
      liveLink: "https://appointment-booking-system-git-master-abuzarsheiks-projects.vercel.app/",
      image: "/images/projects/appointment-booking-system.png",
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A full-stack blogging platform with user authentication, post creation, and commenting system. Built with MERN stack and JWT authentication.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      liveLink: "https://blogs-navy-six.vercel.app/",
      githubLink: "https://github.com/Abuzarsheik/Blogs",
      image: "/images/projects/blog-platform.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const FeaturedProject = ({ project, index }) => {
    const isEven = index % 2 === 0
    
    return (
      <motion.div
        variants={itemVariants}
        className="relative mb-24"
      >
        <div className={`flex flex-col lg:flex-row lg:items-center lg:gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Project Image */}
          <div className="lg:w-3/5 mb-8 lg:mb-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-light-navy to-lightest-navy rounded hidden items-center justify-center">
                  <span className="text-4xl text-green font-mono font-bold">
                    {project.title.split(' ').map(word => word[0]).join('').substring(0, 3)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-green bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300 rounded"></div>
              </a>
            </motion.div>
          </div>

          {/* Project Content */}
          <div className={`lg:w-2/5 relative z-10 ${!isEven ? 'lg:text-left' : 'lg:text-right'}`}>
            <div className="space-y-4">
              <p className="text-green font-mono text-sm">Featured Project</p>
              
              <h3 className="text-heading-3 font-semibold text-lightest-slate">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green transition-colors duration-200"
                >
                  {project.title}
                </a>
              </h3>

              <div className="bg-light-navy p-6 rounded-lg shadow-lg">
                <p className="text-light-slate leading-relaxed">
                  {project.description}
                </p>
              </div>

              <ul className={`flex flex-wrap gap-3 ${!isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                {project.technologies.slice(0, 6).map((tech) => (
                  <li key={tech} className="text-light-slate font-mono text-sm">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center gap-4 ${!isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightest-slate hover:text-green transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>

                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lightest-slate hover:text-green transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  const ProjectCard = ({ project }) => (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="project-card h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-green">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 21l4-4 4 4M3 7l9 6 9-6"
            />
          </svg>
        </div>

        <div className="flex items-center space-x-3">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>

          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightest-slate hover:text-green transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-lightest-slate mb-3 hover:text-green transition-colors duration-200">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>

      <p className="text-light-slate leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32"
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="numbered-heading"
        >
          Some Things I've Built
        </motion.h2>

        <div className="space-y-16">
          {/* Featured Projects */}
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <FeaturedProject key={project.id} project={project} index={index} />
            ))}

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="mt-24">
            <h3 className="text-heading-3 font-semibold text-lightest-slate mb-12 text-center">
              Other Noteworthy Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </motion.div>
        </div>

        {/* View More Projects */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Abuzarsheik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Show me more
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects 