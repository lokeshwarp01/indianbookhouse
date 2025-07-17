import React from 'react';
import './Bookrack.css';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';

const books = [
  {
    id: 1,
    title: 'Current Affairs',
    year: 'Yearly - 2025, by Suchit Kumar',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image1,
  },
  {
    id: 2,
    title: 'Arithmetic for Competitive Exams',
    year: 'by P.K. Mishra',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image2,
  },
  {
    id: 3,
    title: 'Arithmetic Subjective and Objective',
    year: 'by Dr. R.S. Aggarwal',
    price: 850,
    discount: '15% off',
    rating: 4,
    image: image3,
  },
  {
    id: 4,
    title: 'How to Crack Any Exam',
    year: 'by S. Chand',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image4,
  }
  ,
  {
    id: 4,
    title: 'How to Crack Any Exam',
    year: 'by S. Chand',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image4,
  }
  ,
  {
    id: 4,
    title: 'How to Crack Any Exam',
    year: 'by S. Chand',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image4,
  }
  ,
  {
    id: 4,
    title: 'How to Crack Any Exam',
    year: 'by S. Chand',
    price: 850,
    discount: '15% off',
    rating: 5,
    image: image4,
  }
];

const BookRack = () => {
  return (
    <div className="bookrack-container">
      {
        books.map(book => (
          <div className="book-card" key={book.id}>
            < img src={book.image} alt={book.title} className="book-image" />
            <div className="discount">{book.discount}</div>
            <div className="book-title">{book.title}</div>
            <div className="book-year">{book.year}</div>
            <div className="price-row">
              <div className="price">₹ {book.price}.00</div>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div >
        ))
      }
    </div>
  );
};

export default BookRack;
