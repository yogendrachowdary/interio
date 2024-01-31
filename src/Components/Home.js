import "./style.css";
import first from '../Assests/fir.png';

export default function Home() {
  function fok() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kof() {
    var j = document.getElementById("arr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function gok() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function kog() {
    let j = document.getElementById("brr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  function hok() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  }

  function koh() {
    let j = document.getElementById("crr");
    j.style.backgroundImage =
      "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  }

  window.onscroll = function () {
    jet();
  };

  function jet() {
    var ilake = document.getElementById("head");
    ilake.style.top = "0px";
    ilake.style.position = "sticky";
  }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
       <center><h2>-INTERIOR GLOW-</h2>
       <h5>Your One stop interior design destination</h5></center>
      <header id="head">
        
      </header>
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}></h1>
    
          <img
            src="https://www.decorpot.com/images/interior-designers-in-pune.jpg"
            alt="font"
          />
          
        </div>

        <div id="first" className="reveal">
    <img
        src="https://i0.wp.com/st.hzcdn.com/fimgs/a2413cca0abc9966_3493-w400-h560-b0-p0--scandinavian-living-room.jpg?resize=400%2C560&ssl=1"
        alt="Interior Decor"
        style={{ marginBottom: '20px' }} // Inline CSS for margin-bottom
    />
    <div style={{ padding: '20px' }}> {/* Inline CSS for padding */}
        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}></div> {/* Inline CSS for the line */}
        <h1>Welcome to Our Interior Decor Solutions</h1>
        <p>
            At InteriorGlow, we bring your spaces to life with our comprehensive interior decor solutions. Our team is dedicated to enhancing your living or working environment with bespoke designs tailored to your taste and preferences.
        </p>
        <h2>Home Decor (90%)</h2>
        <div className="comm">
            <div id="comm1"></div>
        </div>
        <h2>Custom Furniture (85%)</h2>
        <div className="comm">
            <div id="comm2"></div>
        </div>
        <h2>Wall Art & Accessories (70%)</h2>
        <div className="comm">
            <div id="comm3"></div>
        </div>
    </div>
</div>



<div id="fourth" className="reveal">
    <h2 style={{ color: "white" }}>DECOR INDEX</h2>
    <h1 style={{ color: "white" }}>
        Explore Our Unique Interior Decor Solutions
    </h1>
    <div id="fourth_cards">
        <div>
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/lamp-2754085-2289535.png"
                alt=" "
            />
            <p>Decorative Lighting</p>
        </div>
        <div>
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/wall-art-1-659412.png"
                alt=" "
            />
            <p>Wall Art & Decor</p>
        </div>
        <div>
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/sofa-2756016-2289574.png"
                alt=" "
            />
            <p>Stylish Furniture</p>
        </div>
        <div>
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/plant-2754601-2289664.png"
                alt=" "
            />
            <p>Indoor Plants & Greenery</p>
        </div>
        <div>
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/decorative-accessories-1-2754591-2289579.png"
                alt=" "
            />
            <p>Decorative Accessories</p>
        </div>
    </div>
</div>

<div id="second" className="reveal">
    <div className="container">
        <div>
            <h1>EXPLORE OUR COLLECTION</h1>
            <h2>Unique Decor Pieces</h2>
            <p>
                Discover a vast array of unique decor pieces curated to enhance your living spaces. From exquisite wall art to elegant sculptures, we offer the perfect accent pieces to elevate your home decor.
                <br/>
                <br/>
                Explore our handpicked collection and find the perfect statement pieces that reflect your style and personality. Transform your living spaces into havens of creativity and inspiration with our exclusive decor items.
                <br/>
                <br/>
                With our diverse range of decor pieces, you can add character and charm to every corner of your home. Let your imagination soar as you explore our curated selection of timeless treasures.
            </p>
        </div>
        <img
            src="https://archello.com/thumbs/images/2016/07/25/Master-Bedroom-Interior-Design-Concept-1.1506081755.0988.jpg?fit=crop&w=414&h=518"
            alt=""
        />
    </div>
    <div className="container">
        <div>
            <h1>INSPIRATIONAL DESIGNS</h1>
            <h2>Timeless Elegance</h2>
            <p>
                Immerse yourself in our collection of inspirational designs crafted to infuse your interiors with timeless elegance. Explore a range of styles, from classic to contemporary, designed to suit every taste.
                <br/>
                <br/>
                Experience the essence of sophistication as you browse through our curated selection of timeless designs. Discover pieces that resonate with your personal style and reflect your unique aesthetic.
                <br/>
                <br/>
                At our design studio, we strive to create spaces that inspire and captivate. Let us help you transform your home into a sanctuary of elegance and refinement with our exquisite design solutions.
            </p>
        </div>
        <img
            src="https://i.pinimg.com/736x/fd/66/0e/fd660e2410bcea8a336f4dcc23635c4c.jpg"
            style={{ marginTop: "50px" }}
            alt=""
        />
    </div>
    <div className="container">
        <div>
            <h1>ELEVATE YOUR SPACE</h1>
            <h2>Functional & Stylish</h2>
            <p>
                Elevate your living space with our selection of functional and stylish decor essentials. From statement furniture pieces to chic accessories, we offer everything you need to transform your home into a sanctuary of style.
                <br/>
                <br/>
                Discover innovative solutions to elevate your living space to new heights of sophistication and style. Our curated collection of decor essentials is designed to enhance the functionality and aesthetics of your home.
                <br/>
                <br/>
                Let our design experts guide you through the process of creating a space that reflects your lifestyle and personality. Explore our range of stylish decor options and unlock the potential of your living spaces.
            </p>
        </div>
        <img
            src="https://i2.wp.com/i.pinimg.com/originals/96/71/d5/9671d51c80347a66c15ba0d2faa44750.jpg"
            style={{ marginTop: "80px" }}
            alt=""
        />
    </div>
    <div className="container">
        <div>
            <h1>DESIGN SOLUTIONS</h1>
            <h2>Personalized Services</h2>
            <p>
                Explore our comprehensive design solutions tailored to meet your unique needs and preferences. Our team of experts is dedicated to helping you bring your vision to life with personalized design services and expert advice.
                <br/>
                <br/>
                From concept to execution, we are committed to delivering exceptional design solutions that exceed your expectations. Whether you're renovating your home or designing a new space, we'll work closely with you to create environments that inspire and delight.
                <br/>
                <br/>
                Our personalized approach ensures that every aspect of your project is handled with care and attention to detail. Let us help you transform your vision into reality with our tailored design solutions and unparalleled expertise.
            </p>
        </div>
        <img
            src="https://assets.architecturaldigest.in/photos/64d28051b462697ebd0b6004/master/w_1600%2Cc_limit/Azure%2520Interiors%2520(2).jpg"
            alt=""
        />
    </div>
</div>



<div id="third" className="reveal">
    <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3>
    <h1 style={{ textAlign: "center" }}>
        Crafting Inspiring Spaces with Innovative Design Perspectives
    </h1>
    <div id="third_cards">
        <div>
            <h2>End to End Design Solutions and Services</h2>
            <p>
                Explore comprehensive design solutions tailored to your unique needs. From concept to execution, we guarantee exceptional service and attention to detail throughout every step of the process.
            </p>
        </div>
        <div>
            <h2>Stay Ahead of Trends with Future-proof Designs</h2>
            <p>
                Embrace future-proof design solutions that stand the test of time. Our innovative approach ensures that your interiors remain relevant and inspiring for years to come.
            </p>
        </div>
        <div>
            <h2>Experience Certainty with Successful Project Execution</h2>
            <p>
                Trust our expertise to bring your vision to life. With a track record of successful projects, we deliver certainty and peace of mind, ensuring your design goals are met with precision and excellence.
            </p>
        </div>
    </div>
</div>


<div id="fifth" className="reveal">
    <h1>INTERIOR GLOW</h1>
    <div>
        <a href="#">
            <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
            />
            <span>
                <h3>Address</h3>
                <p>123 Decor Street, Interior City, Your State, ZIP</p>
            </span>
        </a>
        <a href="#">
            <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
            />
            <span>
                <h3>Phone</h3>
                <p>+1 123 456 7890</p>
            </span>
        </a>
        <a href="#">
            <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
            />
            <span>
                <h3>E-mail</h3>
                <p>info@interiorglow.com</p>
            </span>
        </a>
    </div>
</div>

      </main>


    </div>
  );
}
