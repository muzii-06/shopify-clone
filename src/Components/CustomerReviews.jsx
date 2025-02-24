import React from "react";
import "./CustomerReviews.css"; // Import custom CSS

const reviews = [
  {
    id: 1,
    title: "Satisfied customer",
    rating: 5,
    feedback:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    name: "Jenifer",
    role: "Programmer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    title: "20% offer product",
    rating: 5,
    feedback:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    name: "John",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    title: "Delivery support",
    rating: 5,
    feedback:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
    name: "Chawdhuri",
    role: "SEO",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-container">
      <h2 className="text-center display-6 fw-bold">Customers Review</h2>
      <p className="text-center ">
        Share information about your brand with your customers.
      </p>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h4 className="fw-bold fs-5">{review.title}</h4>
            <div className="stars ">⭐️⭐️⭐️⭐️⭐️</div>
            <p className="feedback">{review.feedback}</p>
            <div className="reviewer">
              <img src={review.image} alt={review.name} className="reviewer-img" />
              <div>
                <strong className="fs-6 p-0 m-0">{review.name}</strong>
                <p className="role m-0 p-0 ">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
