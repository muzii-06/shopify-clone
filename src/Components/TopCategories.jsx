import React from "react";
// import "./TopCategories.css"; 
// import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { img: "https://flexon-demo.myshopify.com/cdn/shop/collections/Sports_Reaction_08.png?v=1732522037&width=360", title: "Featured", link: "#", items: "8 Items" },
  { img: "https://flexon-demo.myshopify.com/cdn/shop/collections/Sports_Reaction_02.png?v=1732522067&width=360", title: "Hot Sell", link: "#", items: "8 Items" },
  { img: "https://flexon-demo.myshopify.com/cdn/shop/collections/top-view-composition-with-neatly-arranged-organized-sport-items_1.png?v=1732522091&width=360", title: "New Arrival", link: "#", items: "12 Items" },
  { img: "https://flexon-demo.myshopify.com/cdn/shop/collections/Sports_Reaction_03.png?v=1732522122&width=360", title: "New Products", link: "#", items: "7 Items" },
];

const TopCategories = () => {
  return (
    <div className="container-fluid text-center my-4">
      <h2 className="fw-bold">Top Categories</h2>
      <div className="row mt-4">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <a href={category.link} className="category-card text-decoration-none text-black">
              <img src={category.img} alt={category.title} className="img-fluid rounded" />
              <h5 className="mt-2 fw-bold">{category.title}</h5>
              <p className="text-muted m-0 p-0">{category.items}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;