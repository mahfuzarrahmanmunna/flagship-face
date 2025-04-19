import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import Button from '../../Components/Ui/Button';
import { addFavorite } from '../../utils/LocalStorage';

const PhoneDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    console.log(singlePhone);
    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info,
    } = singlePhone || {}


    const handleFavorite = () => {
        addFavorite(singlePhone)
    }
    return (
        <>
            <div className='w-full py-12'>
                <img src={image} alt="Banner Image" className='w-full mx-auto md:w-auto' />
            </div>
            <div className="lg:flex justify-between">
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div className='flex gap-4'>
                    <div>
                        <Button label={<IoMdCart size={25} />} />
                    </div>
                    <div><Button onClick={handleFavorite} label={<MdBookmarkAdd size={25} />} /></div>
                </div>
            </div>
        </>
    );
};

export default PhoneDetails;