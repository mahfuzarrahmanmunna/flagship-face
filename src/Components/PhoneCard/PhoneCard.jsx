import React from 'react';
import { Link } from 'react-router';
import { MdDeleteForever } from "react-icons/md";
import { removeFavorite } from '../../utils/LocalStorage';


const PhoneCard = ({ phone, deleteAble, handleDelete }) => {
    const { image, name, description, id } = phone || {}
    return (
        <div className="card bg-base-100 w-80 shadow-sm mb-8 md:mb-0">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/phone-details/${id}`} >
                        <button className="relative inline-block px-4 py-2 font-medium group cursor-pointer">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">View More</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='absolute -top-2 -right-2'>
                {
                    deleteAble && <button onClick={() => handleDelete(id)}
                        className='cursor-pointer bg-gray-900 ml-5 rounded-full p-2 hover:bg-gray-300 group hover:scale-105'>
                        <MdDeleteForever size={25}
                            className='text-gray-100  group-hover:text-gray-900 '
                        />
                    </button>
                }
            </div>
        </div>
    );
};

export default PhoneCard;