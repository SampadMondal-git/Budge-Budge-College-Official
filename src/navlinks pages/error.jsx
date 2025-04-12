import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../icons/404 Error.png'
import myStyles from './error.module.css'
export function Error() {    
  return (
    <div className={myStyles.errorContainer}>
        <img src={errorImage} width={500} alt="404 ! Page Not Found" />
        <div className={myStyles.Button}>
            <button><Link to="/">&larr; Go To Homepage</Link></button>
        </div>
    </div>
  )
}
