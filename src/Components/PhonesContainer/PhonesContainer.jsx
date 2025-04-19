import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import Button from '../Ui/Button';

const PhonesContainer = ({ data }) => {
    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) {
            setDisplayPhones(data)
        }
        else {
            setDisplayPhones(data.slice(0, 6))
        }
    }, [data, showAll])
    return (
        <div className='py-12 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 '>
                {
                    displayPhones?.map((phone, index) => <PhoneCard phone={phone} key={index} />)
                }
            </div>
            <div className='mt-12'>
                <Button label={showAll ? 'Show Less' : "Show All"} onClick={() => {
                    // if i can handle prv=>!prv use this !showAll
                    setShowAll(prv => !prv)
                    if (showAll) window.scrollTo(0, 450)
                }} />
            </div>
        </div>
    );
};

export default PhonesContainer;