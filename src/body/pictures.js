import React from 'react';

export class Pictures extends React.Component {
  render() {
   return (
     <div className="food-pics">
      <a href="#"><img
        src={require("./chilerelleno.jpg")} alt="chilerelleno" className="img-responsive" width={300}/></a>
      <a href="#"><img
        src={require("./beefcocido.jpg")} alt="beefcocido" className="img-responsive" width={300}/></a>
      <a href="#"><img
        src={require("./albondigas1.jpg")} alt="albondigas" className="img-responsive" width={300}/></a>
      <a href="#"><img
        src={require("./burrito.jpg")} alt="burrito" className="img-responsive" width={300}/></a>
      <a href="#"><img
        src={require("./tamales1.jpg")} alt="tamales" className="img-responsive" width={300}/></a>
      <a href="#"><img
          src={require("./menudo.jpg")} alt="menudo" className="img-responsive" width={300}/></a>
     </div>
   );
 }
}
