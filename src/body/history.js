import React from 'react';

export class History extends React.Component {
  render() {
    return (
      <div className="history">
        <p>The year 1975, and the art of handmade tortillas was dying out, giving way to the faster machines that could punch them out by the hundreds. But the Carrillo’s insisted that their plant would continue making tortillas the traditional way. And to this day, workers fashion the Mexican staple from the corn flour with the soft pat-pat motion, and turn the bubbling disks on searing hot grills by hand. Carrillo’s remains family-owned and operated by the founders’ daughter, Amelia and her husband Epigmenio, their two sons Willam, Steven and daughter Yvonne.</p>

        <p>Amelia, now 70, has worked in the business since age 19, and still comes in at 3 a.m. on Sundays to put the finishing touches in the simmering pots of menudo, which she personally ladles out to each customer.</p>
        <img src={require("./carrillos-family.jpg")} alt="carrillos-family" className="img-responsive" width={300}/>
      </div>
    )
  };
}
