import React from 'react';
import SectionsTitle from '../../../Components/SectionsTitle/SectionsTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionsTitle
            subHeading="Check it Out"
            heading="Featured Item"
            ></SectionsTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Energistically supply cross-media results via magnetic materials. Seamlessly provide access to resource sucking best practices with virtual results. Distinctively syndicate timely schemas whereas empowered value. Dynamically architect technically sound e-tailers.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;