import React from 'react'
import Product from './Product'

const Products = [
    {
        makanan: "Nasi Liwet",
        harga: 20000,
        img: "https://i.pinimg.com/originals/ca/8a/ab/ca8aab02b41789ccff47dfed702c3f34.jpg",
    },
    {
        makanan: "Stoop Macaroni",
        harga: 25000,
        img: "https://i1.wp.com/fiestaradio.fisip.uns.ac.id/wp-content/uploads/2018/11/RESTORAN-3.png?resize=354%2C304",
    },
    {
        makanan: "Selat Segar",
        harga: 30000,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/58/40._Selat_1.jpg",
    },
    {
        makanan: "Sup Galantin",
        harga: 25000,
        img: "https://media.suara.com/pictures/970x544/2017/10/01/76540-sup-galantin.jpg"
    }
]

const Food = (Products) => {
    return (
        <Product
        gambar={Products.img}
        makanan={Products.makanan}
        harga={Products.harga}
        />
    )
}

const ListProduct = () => {
    return (
        <div className="list-makanan">
            {Products.map(Food)}
        </div>
    )
}

export default ListProduct;