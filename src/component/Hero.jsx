const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-contenet">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
        <button>Shop Now</button>
        <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Availabel On</p>
            <div className="brand-icon">
                <img src="/images/amazon.png" alt="flipkart" />
                <img src="/images/flipkart.png" alt="amazon" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
