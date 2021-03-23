import React from 'react'
import button from "react-bootstrap"

{/* STILL NEEDING CHANGES: 1- CREATING THE CONSTRUCTOR FOR THE PARENT DATA 2- CHANGE class to className 3-Create Modal Parent */}

class JobListingBox extends React.Component {
    render() {
     return (
        <div class="gridContainer">
            <div class="cardComponentBase">
            <div class="imgContainer">
          <img
           class="componentImg" 
           src="https://reactjs.org/logo-og.png"
           alt="company logo"
          /> {/*  */}
         </div>
         </div>
         <div class="jobTitle">JOB TITLE</div> {/* this job title is used from the parent modal box */}
         <div class="jobDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
          mollis dolor, egestas iaculis sem accumsan quis. Ut posuere libero eget
          massa bibendum faucibus.  {/* this description is used from the parent modal box */}
         </div>
         <div class="tagsContainer">
          <ul class="jobTags">
              <li>HOURS</li> {/* this tag is used from the parent modal box */}
              <li>EXP NEEDED</li> 
              <li>LEVEL</li> 
          </ul>
         </div>
         <div class="buttonContainer">
             <button class="applyBttn">APPLY NOW</button> {/* this button must be changed to include the usestate change to the state of the button when pressed */}
             <button class="messagesBttn">Messages</button> {/* this button must be used to create a new modal component to open messages to the company */}
         </div>
         </div>
       )
    }
}

export default JobListingBox;