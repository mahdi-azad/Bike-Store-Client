import React from "react";

const Features = () => {
  return (
    <section className="bikes-section">
      <div className="container">
        <h3 className="subtitle">Explore Our Bikes</h3>
        <h2 className="title">Top-notch bikes and accessories await you!</h2>

        <div className="row">
          <div className="col-md-4">
            <a href="#" class="text-decoration-none">
              <div className="card">
                <img
                  src="mountain-bike.png"
                  alt="Mountain bikes"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Mountain bikes &rsaquo;</h5>
                  <p className="card-text">
                    Explore rugged terrains with our high-performance mountain
                    bikes.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="#" class="text-decoration-none">
              <div className="card">
                <img
                  src="electric-bike.png"
                  alt="Electric bikes"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Electric bikes &rsaquo;</h5>
                  <p className="card-text">
                    Effortlessly conquer distances with our electric bikes.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="#" class="text-decoration-none">
              <div className="card">
                <img
                  src="fixing.png"
                  alt="Bike repair appointments"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Bike repair appointments &rsaquo;
                  </h5>
                  <p className="card-text">
                    Keep your bike in top shape with our expert repair services.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
