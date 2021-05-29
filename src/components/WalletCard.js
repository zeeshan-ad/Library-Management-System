import React from 'react'

function WalletCard() {
    return (
        <div className="wallet-history-card">
        <div className="card-left">
            <img src="https://images.fineartamerica.com/images-medium-large-5/the-great-gatsby-book-cover-movie-poster-art-2-nishanth-gopinathan.jpg" width="100px"/>
            <p>The Great Gatsby</p>
            </div>
            <div className="card-right">
            <p className="field">ORDER DATE</p>
            <p>12th January 2021</p>
            <p className="field">RETURN DATE</p>
            <p>30th January 2021</p>
            <p>Price &#8377;150</p>
            </div>
        </div>
    )
}

export default WalletCard
