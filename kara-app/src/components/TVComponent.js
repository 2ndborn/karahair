import React from 'react'

const TVComponent = () => {
  const TVData = [
    {
      id: 1,
      title: "Belgravia - The Next Chapter",
      network: "ITV",
      company: "Carnival Productions Ltd",
      theme: "Period drama",
      service: ["Provided colour services to the lead actors", "Colour matched wigs", "Matching colour to period timeframe"],
      designer: "Magi Vaughan"
    }, 
    {
      id: 2,
      title: "My Lady Jane",
      network: "Amazon Prime",
      company: "Lady Jane Pictures Limited",
      theme: "Period drama",
      service: ["Provided colour services to the lead actors", "Colour matched wigs", "Matching colour to period timeframe"],
      designer: "Pippa Woods"
    },
    {
      id: 3,
      title: "The Forsytes Saga",
      network: "Channel 5",
      company: "Mammoth Screen (FS) Limited",
      theme: "Period drama",
      service: ["Provided colour services to the lead actors", "Colour matched wigs", "Matching colour to period timeframe"],
      designer: "Magi Vaughan"
    }, 
    {
      id: 4,
      title: "Treason",
      network: "Netflix",
      company: "",
      theme: "Spy drama",
      service: ["Provided colour services to the lead actors"],
      designer: "Magi Vaughan"
    }
  ]

  return (
    <div>
      <div style={{marginBottom: "50px"}}>
        <h1>TV & Film</h1>
      </div>
      {TVData.map((data, idx) =>
        <div key={data.id}>
          <div style={{ padding: "3rem", fontStyle: "italic", border: "1px solid #535353ff", borderRadius: "10px" }}>
            <div style={{ textAlign: "left" }}>
              <h2>{data.title}</h2>
              <h4 style={{marginBottom: "10px"}}>{data.network} - {data.theme}</h4>
              <ul>
                {data.service.map((arr) => 
                <li>{arr}</li>
                )}
              </ul>
              <h6>Designer: {data.designer}</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              
            </div>
          </div>
          {idx !== TVData.length - 1 && <hr style={{background: "#fff", height: "1px", margin: "2rem auto", border: "none"}}/>}
        </div>
      )}
    </div>
  )
}

export default TVComponent