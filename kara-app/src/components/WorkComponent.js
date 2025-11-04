import React from 'react';

const WorkComponent = () => {
  const WorkData = [
    `I began my career in hairdressing at the age of 16. 
    Creativity has always been a huge part of who I am, 
    and I quickly discovered that hairdressing was the 
    perfect way to express myself while connecting with 
    people. You could say it’s in my blood  my father was 
    also a hairdresser, and I spent many Saturdays helping 
    out in his salon as a child. Those early days gave me a 
    real understanding and love for the industry.`,
    `My professional journey started with Toni & Guy, 
    followed by an incredible experience at Charles 
    Worthington, where I specialised in colour. I worked 
    closely with L’Oréal, completing many of their advanced 
    programmes the equivalent of today’s L’Oréal Colour 
    Specialist Degree.`,
    `Over the years, I’ve owned my own salon, worked as an 
    educator for a major colour house brand, and travelled 
    across the UK and Europe including regular trips to 
    Amsterdam.`,
    `Throughout my career, I’ve had the privilege of working 
    with every hair texture and make it my mission to stay 
    ahead of trends and techniques. My goal has always been 
    to deliver the highest level of care to every person who 
    sits in my chair ensuring they leave feeling confident, 
    beautiful, and truly themselves.`,
    `Today, I’m a freelance colourist and stylist based in 
    Buckinghamshire, also working out of Errol Douglas in 
    Knightsbridge. I’m proud to have built a loyal client base, 
    including some clients who have been with me since my trainee 
    days something that means the world to me. Alongside my regular 
    work, I also work in TV and film, colouring and styling hair for 
    actresses on productions for Netflix and Amazon Prime, ensuring 
    they feel confident and camera-ready.`,
    `Career highlights include doing hair at the Cannes Film Festival 
    and working in some truly beautiful locations across Europe, 
    including Venice and the South of France. These experiences have 
    allowed me to blend creativity, travel, and artistry  three things 
    I absolutely love.`
  ]

  return (
    <div>
      <div>
        <h1>I am Kara</h1>
      </div>
      <div style={{padding: "clamp(0.5rem, calc(-0.045rem + 2.73vw), 2rem)"}}>
        {WorkData.map((work, i) => 
          <article key={i} aria-label='Work history'>
            <p style={{ fontSize: "1.2rem", margin: "20px 0", textAlign: "justify" }}>{work}</p>
          </article>
        )}
      </div>
    </div>
  )
}

export default WorkComponent