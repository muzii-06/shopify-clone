import React, { useState } from "react";
import "./TrendingProducts.css"; // Custom CSS file for additional styling

const products = [
  {
    id: 1,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_02_360x.png?v=1732513097",
    name: "All-Weather Sports Jackets",
    price: 110,
    colors: ["yellow", "blue", "white"],
    discount: null,
  },
  {
    id: 2,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_08_360x.png?v=1732513097",
    name: "Breathable Activewear Sets",
    price: 165,
    colors: ["black", "yellow", "red"],
    discount: null,
  },
  {
    id: 3,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_03_360x.png?v=1732513090",
    name: "Compression Leggings Designed",
    price: 140,
    oldPrice: 148,
    colors: ["blue", "black", "white"],
    discount: "-5% sale",
  },
  {
    id: 4,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_11_360x.png?v=1732513098",
    name: "Durable Training Apparel",
    price: 180,
    oldPrice: 185,
    colors: ["blue", "white", "yellow"],
    discount: "-3% sale",
  },
  {
    id: 5,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_02_360x.png?v=1732513097",
    name: "All-Weather Sports Jackets",
    price: 110,
    colors: ["yellow", "blue", "white"],
    discount: null,
  },
  {
    id: 6,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_08_360x.png?v=1732513097",
    name: "Breathable Activewear Sets",
    price: 165,
    colors: ["black", "yellow", "red"],
    discount: null,
  },
  {
    id: 7,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_03_360x.png?v=1732513090",
    name: "Compression Leggings Designed",
    price: 140,
    oldPrice: 148,
    colors: ["blue", "black", "white"],
    discount: "-5% sale",
  },
  {
    id: 8,
    image: "https://flexon-demo.myshopify.com/cdn/shop/files/Sports_Reaction_11_360x.png?v=1732513098",
    name: "Durable Training Apparel",
    price: 180,
    oldPrice: 185,
    colors: ["blue", "white", "yellow"],
    discount: "-3% sale",
  },
];

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState("new-arrival");

  return (
    <div className="container-fluid trending-products">
      <h2 className="text-center">Trending Products</h2>
      
      {/* Tab Navigation */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className={`tab-link ${activeTab === "new-arrival" ? "active" : ""}`}
          onClick={() => setActiveTab("new-arrival")}
        >
          NEW ARRIVAL
        </button>
        <button
          className={`tab-link ${activeTab === "sports" ? "active" : ""}`}
          onClick={() => setActiveTab("sports")}
        >
          SPORTS
        </button>
        <button
          className={`tab-link ${activeTab === "hot-sell" ? "active" : ""}`}
          onClick={() => setActiveTab("hot-sell")}
        >
          HOT SELL
        </button>
      </div>

      {/* Products Grid */}
      <div className="row mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="product-card">
              {product.discount && <span className="discount-badge">{product.discount}</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              <h5 className="mt-2 fs-6 fw-bold">{product.name}</h5>
              {product.oldPrice && <p className="old-price">Tk {product.oldPrice}.00 BDT</p>}
              <p className="price">From Tk {product.price}.00 BDT</p>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <span key={index} className={`color-dot ${color}`}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
