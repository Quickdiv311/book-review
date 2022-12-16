import { useState,useEffect } from "react"
import Book from "../book/book";
import Header from "../header/header";
import './home.css';

function Home()
{
    const [books, setBooks] = useState([]);
    const [inp, setInp] = useState('');

    useEffect(() => {
        fetch("book.json")
        .then(r => r.json())
        .then(r => setBooks(r));
    }, []);
  

    return(
        <div className="home">
            <Header/>
            <input type="text" onChange={(e) => setInp(e.target.value)} placeholder="Search.."/>
        <div className="row">
            {
             books.filter((b) => {
                if(inp=='')
                 return b;
                 else
                 {
                  let title = b.title.slice(0,inp.length);
                  if(inp.toLowerCase() === title.toLowerCase())
                  return b;
                 }
             }).map((book) => (
                <div className="col-md-3">
                    <Book data={book}/>
                </div>
             ))
            }
        </div>
        </div>
    )
}

export default Home;