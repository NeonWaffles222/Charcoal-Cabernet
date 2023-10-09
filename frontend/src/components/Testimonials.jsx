import React from 'react';
import "../styles/Testimonials.css";
const Testimonials = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="tcb-quote-carousel">
            <div className="carousel slide carousel-fade" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li data-target="#fade-quote-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                <li data-target="#fade-quote-carousel" data-slide-to="2"></li>
              </ol>
              {/* Carousel items */}
              <div className="carousel-inner">
                <div className="item active">
                  <div className="profile-circle">
                    <img className="img-responsive" src="https://i.imgur.com/ctvpjSP.png" alt="" />
                  </div>
                  <blockquote>
                    <p>
                      Welcome to Apex! <br />
                      Now the site is running and open, we expect profiles to be done. There is a template you can fill in, instead of creating your own. Feel free to RP whenever, and start meeting people!
                    </p>
                  </blockquote>
                </div>
                <div className="item">
                  <div className="profile-circle">
                    <img className="img-responsive" src="https://i.imgur.com/hZFrbJJ.jpg" alt="" />
                  </div>
                  <blockquote>
                    <p>
                      <i>Current Plot:</i>
                      <br />
                      Humans have been surviving against the animals ever since the first outbreak. Yet a cure has been found, and worked upon domestic dogs. This is the only species that is cured as for now. The cure is developing to spread across the whole animal kingdom and world. This is a slow process.
                    </p>
                  </blockquote>
                </div>
                <div className="item">
                  <div className="profile-circle">
                    <img className="img-responsive" src="https://i.imgur.com/e5TBLka.jpg" alt="" />
                  </div>
                  <blockquote>
                    <p>
                      <i>Bi-Weekly Challenge:</i>
                      <br />
                      Moles have been getting into the underground system. Some areas are closed off due to weak or broken framework. The community must find a way to remove the moles and construct the buildings again. Points will be deducted for any animals damaged, total points can be seen on the point page.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Testimonials;
