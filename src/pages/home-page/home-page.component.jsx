import React from 'react'

import './home-page.style.scss'

// COMPONENTS
import Directory from '../../components/directory/directory.component';

const HomePage = (props) => {
    console.log(props)
    return(
    <div className="home-page">
            <Directory/>
    </div>
)}

export default HomePage;