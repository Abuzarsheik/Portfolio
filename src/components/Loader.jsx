import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-navy flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative"
      >
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-2 border-green border-opacity-20 rounded-full"
        />
        
        {/* Inner rotating element */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-1 left-1 w-4 h-4 bg-green rounded-full"
        />
        
        {/* Center logo/initial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-green font-mono text-2xl font-bold">AS</span>
        </motion.div>
      </motion.div>
      
      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
      >
        <span className="text-slate font-mono text-sm">Loading...</span>
      </motion.div>
    </motion.div>
  )
}

export default Loader 