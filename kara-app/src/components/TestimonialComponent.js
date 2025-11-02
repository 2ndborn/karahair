import React from 'react'

const TestimonialComponent = () => {
  const TestimonialData = [
    {
      id: 1,
      content: "Working with Kara was excellent, she is a credit to the industry.",
      person: "Magi"
    }, 
    {
      id: 2,
      content: "Working with Kara was excellent, she is a credit to the industry.",
      person: "Magi"
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