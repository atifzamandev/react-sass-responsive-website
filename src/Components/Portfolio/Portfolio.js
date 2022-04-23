import React, { useState } from "react";
import pic1 from "../../images/4.jpg";
import pic2 from "../../images/3.jpg";
import pic3 from "../../images/6.jpg";

const Portfolio = () => {
  const [card] = useState([
    { id: 1, image: pic1, name: "Ana", expert: "Developer" },
    { id: 2, image: pic2, name: "Alex", expert: "CEO" },
    { id: 3, image: pic3, name: "Paulian", expert: "Marketing" },
  ]);
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
          <div className="row">
            <div className="col-4">
              <div className="portfolio__content">
                <h6 className="portfolio__content-h6">EMPOLYEE</h6>
                <h3 className="portfolio__content-h3">OUT TEAM</h3>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                {card.map((card) => (
                  <div className="col-4 pl-15" key={card.id}>
                    <div className="portfolio__card">
                      <div className="portfolio__card-img">
                        <img src={card.image} alt="" />
                      </div>
                      <h5 className="portfolio__card-name">{card.name}</h5>
                      <div className="portfolio__card-expert">
                        {card.expert}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
