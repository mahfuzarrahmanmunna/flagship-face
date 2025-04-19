import React, { useEffect, useState } from 'react';
import { getFavorite, removeFavorite } from '../../utils/LocalStorage';
import PhoneCard from '../../Components/PhoneCard/PhoneCard';
import toast from 'react-hot-toast';

const Favorite = () => {
    const [displayPhones, setDisplayPhones] = useState([])

    useEffect(() => {
        const savedPhone = getFavorite()
        setDisplayPhones(savedPhone)
    }, [])
    const handleDelete = (id) => {
        removeFavorite(id)
        setDisplayPhones(getFavorite())
        toast.remove('Remove from Favorite')
    }
    return (
        <div className='py-12 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 '>
                {
                    displayPhones?.map((phone, index) => <PhoneCard handleDelete={handleDelete} deleteAble={true} phone={phone} key={index} />)
                }
            </div>
        </div>
    );
};

export default Favorite;