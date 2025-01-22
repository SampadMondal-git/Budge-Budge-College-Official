import React from 'react'
import './quote.css'

export function Quote() {
  return (
    <>
      <div className="reqforaquote">
        <div className="quote">
          <h1>Request A Quote</h1>
          <p>Fill out the form below to schedule a free consultation with a certified teacher.</p>
        </div>
        <div className="form">
          <form>
            <input type="text" id="firstName" placeholder="First Name" />
            <input type="text" id="lastName" placeholder="Last Name" />
            <select id="course" name="course">
              <option value="select a course">Select a course</option>
              <option value="Bachelor in Arts">Bachelor in Arts</option>
              <option value="Bachelor in Science">Bachelor in Science</option>
              <option value="Bachelor in Commerce">Bachelor in Commerce</option>
            </select>
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Request A Quote" />
          </form>
        </div>
      </div>
    </>
  )
}
