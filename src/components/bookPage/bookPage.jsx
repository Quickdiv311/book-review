import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './bookPage.css';

const BookPage = () => {

 const [book,setBook] = useState({});

 const {name} = useParams();


 useEffect(() => {
    fetch("book.json")
    .then(r => r.json())
    .then(r => 
        {
          let f = r.find(i => i.title === name);
          setBook(f); 
        });
 },[]);

  return (
    <div className="book-container">
    <div className='book-page'>
      <span className="title">{book.title}</span>
        <div className="image-container">
            <img src={book.imageLink} />
        </div>
        <div className="info">
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Pages: {book.pages}</p>
        </div>
    </div>
    <div className="book-review"></div>
    </div>
  );
}

export default BookPage;
