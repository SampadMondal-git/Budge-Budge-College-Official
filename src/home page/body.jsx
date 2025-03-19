import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import styles from './body.module.css'
import { Slideshow } from '../home page/slideshow.jsx'
import { Facilities } from '../home page/facilities.jsx'
import { Offer } from '../home page/offer.jsx'
import { College } from '../home page/college.jsx'
import { Courses } from '../home page/courses.jsx'
import { Teachers } from '../home page/teachers.jsx'
import { Quote } from '../home page/quote.jsx'
import { Campus } from '../home page/campus.jsx'
import { Popup } from '../home page/popup.jsx'

export function Body() {
  // State to track whether animations should be enabled
  const [enableAnimations, setEnableAnimations] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setEnableAnimations(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Smooth scroll progress bar (always enabled)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 600,
    damping: 40,
    restDelta: 0.001
  })

  // Animation variants
  const sectionVariants = enableAnimations
    ? {
        offscreen: { y: 50, opacity: 0 },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 1 }
        }
      }
    : {}

  return (
    <>
      <Popup />
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <motion.main>
        {enableAnimations ? (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <Slideshow />
            </motion.div>

            <motion.section initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.3 }} variants={sectionVariants}>
              <Facilities />
            </motion.section>

            <motion.section initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Offer />
            </motion.section>

            <motion.section initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.2 }} variants={sectionVariants}>
              <College />
            </motion.section>

            <motion.section initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <Courses />
            </motion.section>

            <motion.section initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.3 }} variants={sectionVariants}>
              <Teachers />
            </motion.section>

            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
              <Quote />
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Campus />
            </motion.section>
          </>
        ) : (
          // Render components normally without animations on small screens
          <>
            <Popup />
            <Slideshow />
            <Facilities />
            <Offer />
            <College />
            <Courses />
            <Teachers />
            <Quote />
            <Campus />
          </>
        )}
      </motion.main>
    </>
  )
}
