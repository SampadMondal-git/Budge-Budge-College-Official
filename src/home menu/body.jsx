import React from 'react'
import './body.css'
import {Slideshow} from '../home menu/slideshow.jsx'
import {Facilities} from '../home menu/facilities.jsx'
import { Offer } from '../home menu/offer.jsx'
import { College } from '../home menu/college.jsx'
import { Courses } from '../home menu/courses.jsx'
import { Teachers } from '../home menu/teachers.jsx'
import { Quote } from '../home menu/quote.jsx'
import { Campus } from '../home menu/campus.jsx'
import { Quicklinks } from '../home menu/quicklinks.jsx'

export function Body() {
  return (
    <>
    <Slideshow />
    <Facilities />
    <Offer />
    <College />
    <Courses />
    <Teachers />
    <Quote />
    <Campus />
    <Quicklinks />
    </>
  )
}
