import React from 'react'
import {Slideshow} from './slideshow.jsx'
import {Facilities} from './facilities.jsx'
import { Offer } from './offer.jsx'
import { College } from './college.jsx'
import { Courses } from './courses.jsx'
import { Teachers } from './teachers.jsx'
import { Quote } from './quote.jsx'
import { Campus } from './campus.jsx'
import { Quicklinks } from './quicklinks.jsx'

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
