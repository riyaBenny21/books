import React,{useState, useContext} from "react";
import BookContext from "../Contexts/book";

function BookCreate(){

    const[title,setTitle] = useState('');
    const {createBook} = useContext(BookContext);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>Add A Book</h3>
                <label>Title</label><br/>
                <input value={title} onChange={handleChange}/><br/>
                <button type="submit">ADD</button>
            </form>
        </>
    );
}

export default BookCreate;