import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import urbanAttire from '../../assets/mern-ecomm-urbanAtire.png'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
       <div>
        <p>An Ecommece-app: UrbanAttire</p>
        <img src={urbanAttire}/>
        <button>GitHub Link</button>
       </div>
      </div>
      
    </div>
  )
}

export default MyWork
