import React from 'react'
import "./Home.css";
import Product from "./Product"
function Home(props) {
  return (
    <div className='home'>
      <div className="home_container">
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        <div className="home_row">
          <Product
          id={11}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSihVEUqzXIJehEd_8GWuShwwsaeCFNMf9RD90yKGD_5WSvRKnmwgPJTMIkIlwBZgNP26UPE_7aNcH6MxQCNgZPB7796DoOSXF47J2E0DfSJBz5l4v-xOI"
          title="Casio Watch"
          rating={4}
          price={50.99}
          />
          <Product
          id={12}
            image="https://images.meesho.com/images/products/68226999/slabd_1200.jpg"
            title="Keyboard and Mouse"
          rating={4}
          price={10.99}
          />
         
        </div>
        <div className="home_row">
        <Product 
        id={13}
        image="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/p/3/d/rich-dad-poor-dad-original-imag8qntbqr7jjgu.jpeg?q=90&crop=false"
          title="Rich Dad And Poor Dad"
          rating={5}
          price={20.99}
        />
        <Product
        id={14}
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIt1pGL_7bSJFDzzfjBkiNMlIbK9zGtBSsGf9oeTwr8Qv2zymMQeBF4yiUIschNxT-gwxV_7uY4Mk-a_4zrdvJ0BNSl-ULad3DJW0nN8o"
          title="Laptop"
          rating={4}
          price={100.99}
        />
        <Product
        id={15}
          image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkWkaqA5l8gz6vipE4WlBAtltfkdPp-zXWmlrFvEyIF2tGIqu1C52UwZ1za2SajcyLKEWVvUmpE0XPI0_Awvh4MJ0pPFCQyLg3axmAUow&usqp=CAc"
          title="Realme 12x"
          rating={4}
          price={120.99}
        />
        </div>
        <div className="home_row">
        <Product
        id={16}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfkPBhYa647EmYPyV2JQNNrma7W2E6y9aIA&s"
          title="TV"
          rating={4}
          price={220.99}
        />
        </div>
      </div>
    </div>
  )
}

export default Home
