import React from 'react'

const BooksCard = (props) => {
    const url = props.url;
    return(
        <div className="Card" style={{display:'inline-block', margin:'10px'}}>
            <img src={url} height="250px" alt="Title name"/>
        </div>
    )
}
export default BooksCard