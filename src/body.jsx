import React from 'react'
import './body.css'
import {Slideshow} from './slideshow.jsx'
import {Facilities} from './facilities.jsx'
import { Offer } from './offer.jsx'
import { College } from './college.jsx'
import { Courses } from './courses.jsx'
import { Teachers } from './teachers.jsx'
import { Quote } from './quote.jsx'
import { Campus } from './campus.jsx'
import { Quicklinks } from './quicklinks.jsx'
import { Navlink } from './navlink.jsx';
export function Body() {
  return (
    <>
    <Navlink />
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
