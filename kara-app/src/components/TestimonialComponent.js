import React from 'react'

const TestimonialComponent = () => {
  const TestimonialData = [
    {
      id: 1,
      content: `Most amazing service and I always can't wait to come! 
      Kara my colourist is super knowledgable and is really passionate 
      about colour, and I just love the hot towel and head massage when 
      I'm at the wash station. All in all it's a 5 star service for me 
      every time!! Best hairdressers in London!`,
      person: "Sarah"
    }, 
    {
      id: 2,
      content: `I had my very damaged hair conditioned, trimmed and blow 
      dried by Kara. She welcomed me and offered me tea or coffee.`,
      person: "Michelle"
    },
    {
      id: 3,
      content: `She listened to my hair woes before she started and put 
      me at ease. She is very experienced and knowledgeable about all hair 
      types. She gave me loads of advise, tips and tricks to nurse my hair 
      back to good health. Kara did an amazing job and I left the salon with 
      my hair looking 100% better than when I came in. I wish she could do 
      my hair every day but I'll be back in six weeks!`,
      person: "Naomi"
    },
    {
      id: 4,
      content: `Thanks to Kara my hair is finally being restored after having 
      it nearly burnt off from my previous hairdresser's harsh chemicals! 
      Great highly recommend her to everyone `,
      person: "Vanessa"
    },
    {
      id: 5,
      content: `As always amazing time with Kara... My hair is brought back to 
      life.. thank you so much its beautiful you are one talented lady xxx`,
      person: "Fatima"
    }, 
  ]

  return (
    <div>
      <div style={{marginBottom: "50px"}}>
        <h1>Testimonials</h1>
      </div>
      {TestimonialData.map((test, idx) =>
        <div key={test.id}>
          <div style={{ padding: "3rem", fontStyle: "italic", border: "1px solid #535353ff", borderRadius: "10px" }}>
            <div style={{ textAlign: "left", fontSize: "1.2rem" }}>
              <p>{test.content}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: 'yellow' }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h5> - {test.person}</h5>
            </div>
          </div>
          {idx !== TestimonialData.length - 1 && <hr style={{background: "#fff", height: "1px", margin: "2rem auto", border: "none"}}/>}
        </div>
      )}
    </div>
  )
}

export default TestimonialComponent