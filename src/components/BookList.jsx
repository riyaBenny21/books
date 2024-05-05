import React,{useContext} from "react";
import BookShow from './BookShow'
import BookContext from "../Contexts/book.jsx";

function BookList(){
    const {books} = useContext(BookContext);

    const renderedBooks = books.map((book) => {
        return(
            <BookShow key={book.id} book={book}/>
        );
    });
    return(
        <>
            
            <div className="book-list">{renderedBooks}</div>     
        </>
    );
}

export default BookList;