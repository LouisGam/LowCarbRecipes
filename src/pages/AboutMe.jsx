import React from 'react';
import AboutMePicture from '../assets/about-me-pic.jpg';

export default function AboutMe() {
  return (
<div>
  <h1>About Me</h1>
  <div className="flex">
  <div>
    <p>Hi there! I'm Louis Gambardella.
    For the past 20 years, I've been a Licensed Vocational Nurse (LVN) working in Southern California. While I enjoyed that career path, I recently decided to make a big change and pursue a new passion: front-end web development.
    </p>
    <p>
    Through TrueCoders Bootcamp, I received comprehensive training in web development. Now, I'm on a mission to create user-friendly and inspiring websites that are not only functional but also visually interesting, creative, and stylish.
    </p>
    In addition to web development, I hold a certificate in personal training from the National Academy of Sports Medicine (NASM) and another certificate in functional nutrition. This combination of interests led me to create this website.
    <p>
    This website is here to help you explore a low-carb lifestyle that emphasizes protein for several key benefits:
    </p>
    <p>
    Weight Control: A low-carb approach can be a great tool for managing weight.
    Muscle Protein Synthesis (MPS): Protein plays a crucial role in building and maintaining muscle, especially important for those following a resistance training program.
    Type 2 Diabetes Management: This lifestyle can be beneficial for managing type 2 diabetes.
    The website will also provide resources like videos from Dr. Benjamin Bikman and other helpful links to guide you on your journey towards achieving:
    </p>
    <p>
    Great-tasting Food: Because a healthy lifestyle shouldn't mean sacrificing flavor!
    Metabolic Health: Improve your overall metabolic health and well-being.
    Finding Your Owner's Manual: Learn how to optimize your health throughout your life.
    I'm excited to be on this journey with you! Feel free to explore the website and discover how a low-carb, protein-focused approach can help you reach your health and fitness goals.
    </p>
  </div>
  <img src={AboutMePicture} alt="author" id="authorImage" />
  </div>
  
</div>
  )
}
