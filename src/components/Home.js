import React from "react";
import "./Home.css";
import Product from "./Product";
import Selection from "./Selection";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="selection__row">
          <Selection
            id="5248796"
            title="Gaming Accessories"
            image="https://www.lunagamingnews.com/wp-content/uploads/2021/04/1601020647_Yes-Amazon-Luna-will-dodge-Apples-cloud-gaming-rules-800x500.jpg"
          />
          <Selection
            id="4587963"
            title="Computers & Accessories"
            image="https://pcsreport.com/pcr_media/2020/01/pc-computer-accessories.jpg"
          />
          <Selection
            id="4784512"
            title="Holiday Deals"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbIIcMPqOm7tm-QmkcLVEJ1Bk3rYPP4cmdg&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates
        Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="47856322"
            title="DVI-D to VGA Active Adapter Converter Cable - 1080p - DVI to VGA Converter Box (DVI2VGAE), Black"
            price={25.33}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81q0VMtVRDL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
        <Product 
            id='56325895'
            title="SAMSUNG 65-Inch Class Neo QLED QN85A Series - 4K UHD Quantum HDR 24x Smart TV with Alexa Built-in and 6 speaker Object Tracking Sound - 60W"
            price={1647.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51SgFI7ZtWL._AC_SX184_.jpg"
          />
        <Product
            id="89765489"
            title="Bulova Men's Watch"
            price={316}
            rating={4}
            image="https://m.media-amazon.com/images/I/81io8OejSiL._AC_UX522_.jpg"
        />
        <Product
            id="47856921"
            title="Under Armour Men's Ignite Vi Graphic Strap Slide Sandal"
            price={25}
            rating={5}
            image="https://m.media-amazon.com/images/I/817nACfY-rL._AC_UX395_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="47523698"
            title="Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6"
            price={520}
            rating={5}
            image="https://m.media-amazon.com/images/I/71LsYu32caL._AC_SX679_.jpg"
          />
          <Product
            id="52369874"
            title="Apple iPhone XR, 128GB, Black - Unlocked (Renewed Premium)"
            price={399}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51jGBS1Bs8L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
