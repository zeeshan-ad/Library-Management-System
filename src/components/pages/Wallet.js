import React from 'react'
import WalletCard from '../WalletCard'
import './Wallet.css'

function Wallet() {
    return (
        <div className="container">
        <div className="amount">
        <p><i class="fas fa-wallet"></i> AMOUNT DUE &#8377;100</p>
        </div>
        <div className="wallet-history">
        <WalletCard/>
        <WalletCard/> 
        <WalletCard/> 
        </div>
        </div>
    )
}

export default Wallet
