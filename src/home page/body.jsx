import React from 'react'
import './body.module.css'
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

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    scale: 0.95
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.3
    }
  },
  exit: {
    y: 60,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.8
    }
  }
}

const sections = [
  { Component: Facilities, id: 'facilities' },
  { Component: Offer, id: 'offer' },
  { Component: College, id: 'college' },
  { Component: Courses, id: 'courses' },
  { Component: Teachers, id: 'teachers' },
  { Component: Quote, id: 'quote' },
  { Component: Campus, id: 'campus' }
]

export function Body() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <Slideshow />
      {sections.map(({ Component, id }, index) => (
        <motion.div
          key={id}
          id={id}
          className={styles.animatedSection}
          initial="initial"
          whileInView="animate"
          exit="exit"
          layout
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          style={{
            transformOrigin: 'top center',
            overflow: 'hidden',
            zIndex: sections.length - index
          }}
        >
          <Component />
        </motion.div>
      ))}
    </>
  )
}
