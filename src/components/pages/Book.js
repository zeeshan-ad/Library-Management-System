import React from 'react'
import { useLocation } from "react-router-dom";
import {BookDetails} from "./BookDetails";
import {Link} from "react-router-dom";
import './Book.css';

function Book() {
    let query = new URLSearchParams(useLocation().search);
    let id = query.get('id');
    let book = BookDetails[id];
    return (
        <div className="BookDetails">
            <div id="BooksCard">
            <img src={book.picture} alt="Book title" width="180"/>
            </div>
            <div className="content">
            <div className="BookInfo">
            <h3>{book.name}</h3>
            <p>Copies: {book.copies}</p>
            <p>Rent for: ₹{book.rent}</p>
            <p>Pages: {book.pages}</p>
            <p>ISBN: {book.isbn}</p>
            </div>
            <Link to={"./LendBook.js?id=" + book.id}><button type="submit">Rent Book</button></Link>
            </div>
        </div>
    )
}

export default Book
