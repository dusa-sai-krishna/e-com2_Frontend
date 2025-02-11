import React from 'react';

function AddressCard({address}) {
    return (
        <div>
            <div className="space-y-3 text-left">
                <p className="font-semibold">{address?.firstName+" "+address?.lastName}</p>
                <p>{address?.streetAddress }</p>
                <p>{address?.city+" "},{address?.state+" "},{address?.zipCode} </p>
                <div className="space-y-1">
                    <p className="font-semibold">Phone Number:</p>
                    <p>{address?.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default AddressCard;






