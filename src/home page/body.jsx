import React from 'react'
import './body.module.css'
import { motion } from 'framer-motion'
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
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

export function Body() {
  return (
    <>
      <Slideshow />
      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Facilities />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Offer />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <College />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Courses />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Teachers />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Quote />
      </motion.div>

      <motion.div
        className={styles.animatedSection}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.4 }}
        variants={fadeInUp}>
        <Campus />
      </motion.div>
    </>
  )
}
