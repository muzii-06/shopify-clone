import React from "react";
import "./BrandLogos.css"; // Import custom CSS

const brands = [
  { id: 1, name: "Nike", img: "https://flexon-demo.myshopify.com/cdn/shop/files/Logo_2.png?v=1732528455" },
  { id: 2, name: "Puma", img: "https://flexon-demo.myshopify.com/cdn/shop/files/Logo_5.png?v=1732528456" },
  { id: 3, name: "Fila", img: "https://flexon-demo.myshopify.com/cdn/shop/files/Logo-7.png?v=1732528456" },
  { id: 4, name: "New Holland", img: "https://flexon-demo.myshopify.com/cdn/shop/files/Logo_4.png?v=1732528456" },
  { id: 5, name: "Adidas", img: "https://flexon-demo.myshopify.com/cdn/shop/files/Logo_3.png?v=1732528456" },
];

const BrandLogos = () => {
  return (
    <div className="container-fluid d-flex p-3 align-items-center justify-content-around mt-5 brand ">
      {brands.map((brand) => (
        <div key={brand.id} className="brand-logo">
          <img className="w-100" src={brand.img} alt={brand.name} />
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
