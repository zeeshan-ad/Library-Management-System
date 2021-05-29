import React, {useState} from 'react';
import './SearchBooks.css';
import BooksCard from '../BooksCard';
import { Link } from 'react-router-dom';
import {BookDetails} from './BookDetails';

function SearchBooks() {
    const [search, setSearch] = useState(false);
    const [searchVal, setSearchVal] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(searchVal !== undefined && searchVal.length > 0)
        setSearch(true);
        else
        setSearch(false);
    }

    const [sort, setSort] = useState(false);
    const toggleSort = () => {setSort(!sort)};
    return (
        <div className="containerSearch">
            <form onSubmit={ e => {handleSubmit(e)}}>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search books"
                    name="searchVal"
                    onChange={e => setSearchVal(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>  
            <div className="SearchResult">
            { search ? 
            <>
            <div className="Bars">
            <div onClick={toggleSort}><i class="fas fa-sort-amount-up"></i> Sort</div>
            { sort ?
            <div className="sort">
            <ul>
            <li>Recently added</li>
            <li>Popularity</li>
            <li>Rating</li>
            </ul>
            </div>
            :''}
            <div><i class="fas fa-filter"></i> Filter</div>    
            </div>
            
            <div className="DisplayBooks">
            {BookDetails.map((book, index) => {
                return(
                    <Link to={"./Book.js?id=" + book.id}><BooksCard url={book.picture}/></Link>
                )
            })}
            </div>
            </> 
            : <div className="EmptyBooks"><h2>Search Book Titles</h2></div>}
            </div>  
        </div>
    )   
}

export default SearchBooks
