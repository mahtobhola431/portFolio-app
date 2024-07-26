import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import bitebuddy from '../../assets/food-pic-1.png'
import urbanAttire from '../../assets/mern-ecomm-urbanAtire.png'
import spotify_pic from '../../assets/spotify-pic.png'
import pintrest_1 from '../../assets/pintrest-1.png'
const MyWork = () => {



  const githubLinks = {
    urbanAttire: 'https://github.com/mahtobhola431/UrbanAttire-ecom-mern', 
    spotifyClone: 'https://github.com/mahtobhola431/spotify', 
    pinterest: 'https://github.com/mahtobhola431/pintrest',
     bitebuddy: ' https://github.com/mahtobhola431/BiteBuddy'
  };

  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
       <div>
        <p className='text'>An Ecommece-app: UrbanAttire</p>
        <img src={urbanAttire}/>
        <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.urbanAttire)}
          >
            GitHub Link
          </button>

     
       </div>

       <div>
        <p className='text'> music app:Spotify-clone</p>
        <img src={spotify_pic}/>
        <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.spotifyClone)}
          >
            GitHub Link
          </button>
       </div>

       <div>
        <p className='text'>image-social media</p>
        <img src={pintrest_1}/>
        <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.pinterest)}
          >
            GitHub Link
          </button>
       </div>

       <div>
        <p className='text'>BiteBuddy:food delivary app</p>
        <img src={bitebuddy}/>
        <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.bitebuddy)}
          >
            GitHub Link
          </button>
       </div>
      </div>
      
    </div>
  )
}

export default MyWork
