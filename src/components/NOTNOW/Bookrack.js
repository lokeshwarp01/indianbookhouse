import React from 'react';
import './Bookrack.css';

const books = [
  {
    id: 1,
    title: 'Current Affairs',
    year: 'Yearly - 2025, by Suchit Kumar',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: 'https://via.placeholder.com/150', // replace with real image
  },
  {
    id: 2,
    title: 'Arithmetic for Competitive Exams',
    year: 'by P.K. Mishra',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Arithmetic Subjective and Objective',
    year: 'by Dr. R.S. Aggarwal',
    price: 850,
    discount: '15% off',
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'How to Crack Any Exam',
    year: 'by S. Chand',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: 'https://via.placeholder.com/150',
  }
];

const BookRack = () => {
  return (
    <div className="bookrack-container">
      <div className="header">
        <h2>New Release</h2>
        <button className="view-all">View All</button>
      </div>

      <div className="book-list">
        {books.map(book => (
          <div className="book-card" key={book.id}>
            <div className="discount">{book.discount}</div>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-title">{book.title}</div>
            <div className="book-year">{book.year}</div>
            <div className="price-row">
              <div className="price">₹ {book.price}.00</div>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRack;
