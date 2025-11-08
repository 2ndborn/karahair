import React from 'react'
import styles from "../styles/MyStory.module.css";

const EducatorComponent = () => {
  const EdData = [
    {
      id: 1,
      paragraph: `Education has always been at the heart of what I do. 
      I believe that sharing knowledge and building confidence  
      whether with fellow professionals or clients  helps raise 
      the standard of care and creativity across our industry.`,
      paragraphTwo: `My mission is simple: to make you feel good, 
      confident, and empowered. Everyone has something that makes 
      them unique and beautiful it’s our job as hairdressers to 
      help that beauty shine through.`,
      paragraphThree: `I deliver bespoke education workshops tailored 
      to each salon’s needs, covering everything from confidence 
      with colouring and understanding colour theory at all levels, 
      to working confidently with curly and textured hair. Every 
      session focuses on maintaining the integrity and health of 
      the hair and scalp, ensuring that great results never come 
      at the expense of condition.`,
      paragraphFour: `My approach is guided by my own framework, 
      the KARA Method:`,
      paragraphFive: `Alongside group education, I offer one-to-one 
      coaching sessions via Zoom, designed to support individual growth, 
      refine technical skills, or build confidence in specific areas.`,
      paragraphSix: `I also run client education sessions for anyone 
      wanting to better understand their own hair from care routines 
      and product choices to managing texture and maintaining colour 
      at home. These relaxed, hourly sessions help clients gain the 
      knowledge and confidence to love and look after their hair 
      everyday.`,
      paragraphSeven: `A big part of my work  and something I’m truly 
      passionate about  is mentoring and supporting apprentices. I 
      believe it’s our responsibility to hold the door open for the 
      next generation of hairdressers, helping to inspire and guide 
      them as they begin their careers. Watching young stylists grow 
      in confidence and skill is one of the most rewarding parts of 
      what I do, and a project that’s very close to my heart.`,
      paragraphEight: `Looking ahead to 2026, I’m excited to introduce 
      a series of workshops and pop-up events focused on confidence, 
      self-care, and hair care, all built around the empowering 4-step 
      KARA Method. These will be fun, interactive experiences designed 
      to inspire, educate, and celebrate individuality.`,
      frame: [
        "K – Knowledge: Building a deep understanding of colour, texture, and technique.",
        "A – Assessment: Learning to truly see and understand the hair in front of you.",
        "R – Restore: Prioritising the health and integrity of the hair and scalp.",
        "A – Allure: Bringing it all together to create beautiful, confident, and wearable results.",
      ]
    },
  ]

  return (
    <>
    <div>
        <h1>The Educator</h1>
    </div>
    <div style={{padding: "clamp(0.5rem, calc(-0.045rem + 2.73vw), 2rem)"}}>
      {EdData.map((data) => 
        <article key={data.id} aria-label='Educator content' className={styles.edArticle}>
          <p>{data.paragraph}</p>
          <p>{data.paragraphTwo}</p>
          <p>{data.paragraphThree}</p>
          <p>{data.paragraphFour}</p>
          <div>
          <ul style={{listStyleType: "none"}}>
            {data.frame.map((fr) => 
              <li>{fr}</li>
            )}
          </ul>
          </div>
          <p>{data.paragraphFive}</p>
          <p>{data.paragraphSix}</p>
          <p>{data.paragraphSeven}</p>
          <p>{data.paragraphEight}</p>
        </article>
      )}
    </div>
    </>
  )
}

export default EducatorComponent