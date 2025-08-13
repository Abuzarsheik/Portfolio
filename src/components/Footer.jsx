import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Abuzarsheik',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abuzar-zubair-444b39238/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/abuzar.sheik',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.929.01 7.548.048 4.537.127 2.466 2.194 2.384 5.217 2.347 5.599 2.336 6.066 2.336 9.687c0 3.621.011 4.088.048 4.469.078 3.023 2.149 5.09 5.172 5.168.38.037.847.048 4.468.048 3.621 0 4.088-.011 4.469-.048 3.023-.078 5.09-2.149 5.168-5.172.037-.381.048-.848.048-4.469 0-3.621-.011-4.088-.048-4.469C21.583 2.194 19.514.127 16.491.048 16.109.01 15.642 0 12.017 0zm-.764 3.617c.342-.007.721-.01 1.17-.01h.594c3.199 0 3.583.009 4.849.048 1.17.053 1.805.249 2.228.413.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.423.36 1.057.413 2.228.039 1.266.048 1.65.048 4.849s-.009 3.583-.048 4.849c-.053 1.17-.249 1.805-.413 2.228-.217.56-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.423.164-1.057.36-2.228.413-1.266.039-1.65.048-4.849.048s-3.583-.009-4.849-.048c-1.17-.053-1.805-.249-2.228-.413-.56-.217-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.423-.36-1.057-.413-2.228-.039-1.266-.048-1.65-.048-4.849s.009-3.583.048-4.849c.053-1.17.249-1.805.413-2.228.217-.56.477-.96.896-1.382.419-.419.819-.679 1.381-.896.423-.164 1.057-.36 2.228-.413.394-.017.82-.025 1.299-.03zm2.948 1.628c-.797 0-1.445.648-1.445 1.445s.648 1.445 1.445 1.445 1.445-.648 1.445-1.445-.648-1.445-1.445-1.445zm-3.854 1.882c-2.136 0-3.87 1.734-3.87 3.87s1.734 3.87 3.87 3.87 3.87-1.734 3.87-3.87-1.734-3.87-3.87-3.87zm0 1.613c1.245 0 2.257 1.012 2.257 2.257s-1.012 2.257-2.257 2.257-2.257-1.012-2.257-2.257 1.012-2.257 2.257-2.257z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:abuzarzubair15@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <footer className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lightest-slate font-mono text-xl font-bold">
              Abuzar Zubair
            </h3>
            <p className="text-slate text-sm mt-2">
              Building digital experiences with modern web technologies
            </p>
          </motion.div>

          {/* Social Links - Mobile Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-6 lg:hidden"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm"
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
              { name: 'Resume', href: '/resume/Abuzar_Zubair_Resume.pdf', external: true },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={!link.external ? (e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                } : undefined}
                className="text-slate hover:text-green transition-colors duration-200 font-mono"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-lightest-navy mx-auto"
          />

          {/* Copyright and Credits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-slate font-mono text-xs space-y-2">
              <p>
                Built with{' '}
                <span className="text-green">React</span>,{' '}
                <span className="text-green">Vite</span>, and{' '}
                <span className="text-green">Tailwind CSS</span>
              </p>
              <p>
                Deployed with{' '}
                <span className="text-green">Vercel</span>
              </p>
            </div>

            <div className="text-slate font-mono text-xs">
              <p>&copy; {new Date().getFullYear()} Abuzar Zubair. All rights reserved.</p>
            </div>

            {/* Design Credit */}
            <div className="text-slate font-mono text-xs opacity-75">
              <p>
                Design inspired by{' '}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green hover:text-lightest-slate transition-colors duration-200"
                >
                  Brittany Chiang
                </a>
              </p>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center w-12 h-12 border border-green text-green 
                         hover:bg-green hover:bg-opacity-10 transition-all duration-200 rounded-full mx-auto"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 