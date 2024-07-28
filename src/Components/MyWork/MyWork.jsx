import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import bitebuddy from '../../assets/food-pic-1.png'
import urbanAttire from '../../assets/mern-ecomm-urbanAtire.png'
import pintrest_1 from '../../assets/pintrest-1.png'
import gemini from '../../assets/gemini.png'
import BiteBudyyPic from '../../assets/BiteBudyyPic.png'
const MyWork = () => {



  const githubLinks = {
    urbanAttire: 'https://github.com/mahtobhola431/UrbanAttire-ecom-mern', 
    pinterest: 'https://github.com/mahtobhola431/pintrest',
     bitebuddy: 'https://github.com/mahtobhola431/cravecurb',
     gemini:"https://github.com/mahtobhola431/Gemini-AI"
  };



  const deployLinks= {
  
    pint: 'https://pintrest-mpua.onrender.com',
    gemiai:"https://main--gemini-ai-m20.netlify.app/",
    bite:"https://cravecurb-frontend.onrender.com/"
     
  };

  


  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  const handleDeploy= (url) => {
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
        <p className='text'>Image-social media-Pintrest</p>
        <img src={pintrest_1}/>
        <div>
         <button 
            className="git-btn "
            onClick={() => handleButtonClick(githubLinks.pinterest)}
          >
            GitHub Link
          </button>  

          <button 
            className="git-btn depo"
            onClick={() => handleDeploy(deployLinks.pint)}
          >
            Deploy Link
          </button>  
        </div>
       
       </div>

       
       <div>
        <p className='text'>GEMINI-AI</p>
        <img src={gemini}/>
        <div>
         <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.gemini)}
          >
            GitHub Link
          </button>
          <button 
            className="git-btn depo"
            onClick={() => handleDeploy(deployLinks.gemiai)}
          >
            Deploy Link
          </button>  
        </div>
         
       </div>
<div>
        <p className='text'>BiteBuddy:food delivary app</p>
        <img src={BiteBudyyPic}/>
        <div>
        <button 
            className="git-btn"
            onClick={() => handleButtonClick(githubLinks.bitebuddy)}
          >
            GitHub Link
          </button>  
          <button 
            className="git-btn depo"
            onClick={() => handleDeploy(deployLinks.bite)}
          >
            Deploy Link
          </button> 
        </div>
        
       </div>

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

      </div>
      
    </div>
  )
}

export default MyWork
