import React from "react";
import "./Articles.css";

const articles = [
  {
    date: "Dec 01, 2024",
    title: "Rise of E-Sports in Traditional Olympics",
    image: "https://flexon-demo.myshopify.com/cdn/shop/articles/Sports_Blog_05_1000x.png?v=1733031947", // Replace with actual image URL
  },
  {
    date: "Dec 01, 2024",
    title: "Formula 1’s Sustainable Racing Evolution",
    image: "https://flexon-demo.myshopify.com/cdn/shop/articles/Sports_Blog_04_1000x.png?v=1733031900", // Replace with actual image URL
  },
  {
    date: "Dec 01, 2024",
    title: "Breaking Barriers: Women’s Soccer’s Global Surge",
    image: "https://flexon-demo.myshopify.com/cdn/shop/articles/Sports_Blog_02_1000x.png?v=1733031765", // Replace with actual image URL
  },
];

const Articles = () => {
  return (
    <div className="container-fluid mt-5">
      <h2 className="articles-heading text-center">Latest article</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} className="article-image " />
            <div className="article-content">
              <p className="article-date">📅 {article.date}</p>
              <h3 className="article-title">{article.title}</h3>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
