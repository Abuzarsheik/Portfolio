import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const sectionRef = useRef(null)
  const formRef = useRef(null)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" id="contact">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-2xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 text-center"
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="numbered-heading justify-center"
        >
          Get In Touch
        </motion.h2>

        {/* Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-heading-3 font-semibold text-lightest-slate">
              What's Next?
            </h3>
            
            <p className="text-slate text-lg leading-relaxed max-w-lg mx-auto">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question, want to collaborate on a project, or just 
              want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:abuzarsheik123@gmail.com"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
            </motion.a>

            <span className="text-slate">or</span>

            <motion.button
              onClick={() => {
                document.getElementById('contact-form').scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
              className="inline-block px-6 py-3 border border-slate text-slate hover:bg-slate hover:bg-opacity-10 
                         transition-all duration-200 font-mono text-sm rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send a Message
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          id="contact-form"
          variants={itemVariants} 
          className="mt-16 text-left"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-lightest-slate font-mono text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded 
                           text-lightest-slate placeholder-slate focus:border-green focus:outline-none 
                           transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lightest-slate font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded 
                           text-lightest-slate placeholder-slate focus:border-green focus:outline-none 
                           transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-lightest-slate font-mono text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-light-navy border border-lightest-navy rounded 
                         text-lightest-slate placeholder-slate focus:border-green focus:outline-none 
                         transition-colors duration-200 resize-vertical"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="loading-spinner mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green font-mono text-sm"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400 font-mono text-sm"
              >
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Alternative Contact Info */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-slate font-mono text-sm mb-4">
            Prefer to reach out directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:abuzarsheik123@gmail.com"
              className="text-green hover:text-lightest-slate transition-colors duration-200 font-mono text-sm"
            >
              abuzarsheik123@gmail.com
            </a>
            <span className="hidden sm:block text-slate">•</span>
            <a
              href="https://linkedin.com/in/abuzar-sheik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:text-lightest-slate transition-colors duration-200 font-mono text-sm"
            >
              LinkedIn
            </a>
            <span className="hidden sm:block text-slate">•</span>
            <a
              href="https://github.com/Abuzarsheik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green hover:text-lightest-slate transition-colors duration-200 font-mono text-sm"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact 