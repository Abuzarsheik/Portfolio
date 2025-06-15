import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Python',
    'Next.js',
    'Tailwind CSS',
    'Git & GitHub',
    'AWS',
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" id="about">
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
          About Me
        </motion.h2>

        <div className="lg:grid lg:grid-cols-3 lg:gap-16 items-start">
          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-slate text-lg leading-relaxed">
                Hello! I'm Abuzar, a passionate software engineer who enjoys creating 
                things that live on the internet. My interest in web development started 
                back in 2020 when I decided to try editing custom themes — turns out 
                hacking together a custom website taught me a lot about HTML & CSS!
              </p>

              <p className="text-slate text-lg leading-relaxed">
                Fast-forward to today, and I've had the privilege of working on various 
                projects ranging from blockchain-based e-commerce platforms to real-time 
                chat applications. My main focus these days is building accessible, 
                inclusive products and digital experiences using modern web technologies.
              </p>

              <p className="text-slate text-lg leading-relaxed">
                I recently graduated with a degree in Computer Science and have been 
                working on improving my skills in full-stack development, particularly 
                with the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>

              <p className="text-slate text-lg leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>
            </motion.div>

            {/* Technologies Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-2 mt-6"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center text-sm font-mono text-slate"
                >
                  <span className="text-green mr-2">▹</span>
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-0 lg:col-span-1"
          >
            <div className="relative max-w-xs mx-auto lg:max-w-none">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Image container */}
                <div className="relative rounded-lg overflow-hidden">
                  <div className="bg-green bg-opacity-20 w-full h-80 rounded-lg flex items-center justify-center">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-light-navy to-lightest-navy rounded-lg flex items-center justify-center">
                      <span className="text-6xl text-green font-mono font-bold">AS</span>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-green bg-opacity-20 rounded-lg transition-opacity duration-300 group-hover:bg-opacity-0"></div>
                </div>

                {/* Border */}
                <div className="absolute -inset-1 border-2 border-green rounded-lg transform translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 