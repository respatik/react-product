import React from 'react';

const Product = (props) => {
    return (
        <div>
            <img src={props.gambar} className="gambar-makanan"/>
            <h3 className="makanan">{props.makanan}</h3>
            <h3 className="harga">{props.harga}</h3>
            <hr/>
        </div>
    );
}

export default Product;