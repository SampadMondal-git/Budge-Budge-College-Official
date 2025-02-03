import React from 'react'
import './body.css'
import {Slideshow} from '../home page/slideshow.jsx'
import {Facilities} from '../home page/facilities.jsx'
import { Offer } from '../home page/offer.jsx'
import { College } from '../home page/college.jsx'
import { Courses } from '../home page/courses.jsx'
import { Teachers } from '../home page/teachers.jsx'
import { Quote } from '../home page/quote.jsx'
import { Campus } from '../home page/campus.jsx'
import { Quicklinks } from '../home page/quicklinks.jsx'

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
