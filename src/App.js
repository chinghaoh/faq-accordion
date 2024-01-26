import React from 'react';
import FaqItem from './FaqItem';
import './styles.css';
import iconStars from './assets/images/icon-star.svg'
function App() {
  return (
    <html>
    <div class="top-background">
    </div>
    <div className='container'>
    <div className='title-layout'>
      <img src={iconStars} alt='star-icon'></img>
      <h1>FAQs</h1>
      </div>
      <FaqItem
        question="What is Frontend Mentor, and how will it help me?"
        answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.">
      </FaqItem>
      <FaqItem
        question="Is Frontend Mentor free?"
        answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels.">
      </FaqItem>
      <FaqItem
        question="Can I use Frontend Mentor projects in my portfolio?"
        answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                way to showcase your skills to potential employers!">
      </FaqItem>
      <FaqItem
        question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                channel where you can ask questions and seek support from other community members.">
      </FaqItem>
    </div>
    </html>
  );
}

export default App;