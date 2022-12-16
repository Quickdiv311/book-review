import { Link } from 'react-router-dom';
import './book.css'

const Book = (prop) => {

  return (
    <Link to={'/book/'+prop.data.title}>
    <div className="container">
        <span className="title">{prop.data.title}</span>
        <div className="image-container">
            <img src={prop.data.imageLink} />
        </div>
        <div className="info">
            <p>Author: {prop.data.author}</p>
            <p>Year: {prop.data.year}</p>
            <p>Pages: {prop.data.pages}</p>
        </div>
    </div>
    </Link>
  );
}

export default Book;
