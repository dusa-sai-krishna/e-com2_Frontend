import React from 'react';

function ProductCard({product}) {
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem] hover:z-40 hover:bg-amber-600">
                <img className="h-[19.9rem] w-[14.9rem] object-cover object-left-top" src={product.imageUrl}
                     alt="A Women Wearing Dress"/>
            </div>

            <div className="textPart bg-white p-3">
                <div>
                    <p className="font-bold opacity-60 text-left">{product.brand}</p>
                    <p className="text-left">{product.title}</p>
                </div>
                <div className="flex justify-items-start space-x-2">
                    <p className="font-semibold">₹{product.discountedPrice}</p>
                    <p className="line-through opacity-50">₹{product.price}</p>
                    <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;