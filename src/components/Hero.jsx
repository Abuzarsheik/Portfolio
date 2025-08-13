import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="min-h-screen flex flex-col justify-center py-20" id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-green font-mono text-base md:text-lg mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-heading-1 font-bold text-lightest-slate mb-4"
        >
          Abuzar Zubair.
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-heading-2 font-bold text-slate mb-6"
        >
          <Typewriter
            options={{
              strings: [
                'I build things for the web.',
                'I create digital experiences.',
                'I solve problems with code.',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              cursor: '|',
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate text-lg leading-relaxed max-w-2xl mb-12"
        >
          I'm a software engineer specializing in building exceptional digital 
          experiences. Currently, I'm focused on building accessible, 
          human-centered products using modern web technologies like React, 
          Node.js, and the MERN stack.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work!
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
            className="inline-block px-6 py-3 border border-slate text-slate hover:bg-slate hover:bg-opacity-10 
                       transition-all duration-200 font-mono text-sm rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links - Vertical on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed left-6 md:left-12 lg:left-24 xl:left-32 bottom-0 hidden lg:flex flex-col items-center space-y-6"
        >
          <div className="flex flex-col items-center space-y-4">
            {[
              { name: 'GitHub', url: 'https://github.com/Abuzarsheik', icon: 'github' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abuzar-zubair-444b39238/', icon: 'linkedin' },
              { name: 'Instagram', url: 'https://instagram.com/abuzar.sheik', icon: 'instagram' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {social.icon === 'github' && (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  )}
                  {social.icon === 'linkedin' && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {social.icon === 'instagram' && (
                    <path d="M12.017 0C8.396 0 7.929.01 7.548.048 4.537.127 2.466 2.194 2.384 5.217 2.347 5.599 2.336 6.066 2.336 9.687c0 3.621.011 4.088.048 4.469.078 3.023 2.149 5.09 5.172 5.168.38.037.847.048 4.468.048 3.621 0 4.088-.011 4.469-.048 3.023-.078 5.09-2.149 5.168-5.172.037-.381.048-.848.048-4.469 0-3.621-.011-4.088-.048-4.469C21.583 2.194 19.514.127 16.491.048 16.109.01 15.642 0 12.017 0zm-.764 3.617c.342-.007.721-.01 1.17-.01h.594c3.199 0 3.583.009 4.849.048 1.17.053 1.805.249 2.228.413.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.423.36 1.057.413 2.228.039 1.266.048 1.65.048 4.849s-.009 3.583-.048 4.849c-.053 1.17-.249 1.805-.413 2.228-.217.56-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.423.164-1.057.36-2.228.413-1.266.039-1.65.048-4.849.048s-3.583-.009-4.849-.048c-1.17-.053-1.805-.249-2.228-.413-.56-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.423-.36-1.057-.413-2.228-.039-1.266-.048-1.65-.048-4.849s.009-3.583.048-4.849c.053-1.17.249-1.805.413-2.228.217-.56.477-.96.896-1.382.419-.419.819-.679 1.381-.896.423-.164 1.057-.36 2.228-.413.394-.017.82-.025 1.299-.03zm2.948 1.628c-.797 0-1.445.648-1.445 1.445s.648 1.445 1.445 1.445 1.445-.648 1.445-1.445-.648-1.445-1.445-1.445zm-3.854 1.882c-2.136 0-3.87 1.734-3.87 3.87s1.734 3.87 3.87 3.87 3.87-1.734 3.87-3.87-1.734-3.87-3.87-3.87zm0 1.613c1.245 0 2.257 1.012 2.257 2.257s-1.012 2.257-2.257 2.257-2.257-1.012-2.257-2.257 1.012-2.257 2.257-2.257z" />
                  )}
                </svg>
              </motion.a>
            ))}
          </div>
          <div className="w-px h-24 bg-slate"></div>
        </motion.div>

        {/* Email - Vertical on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="fixed right-6 md:right-12 lg:right-24 xl:right-32 bottom-0 hidden lg:flex flex-col items-center space-y-6"
        >
          <motion.a
            href="mailto:abuzarzubair15@gmail.com"
            className="text-slate hover:text-green transition-colors duration-200 font-mono text-sm"
            style={{ writingMode: 'vertical-rl' }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            abuzarzubair15@gmail.com
          </motion.a>
          <div className="w-px h-24 bg-slate"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 