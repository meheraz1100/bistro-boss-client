import React from "react";
import SectionsTitle from "../../../Components/SectionsTitle/SectionsTitle";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'

const Recommends = () => {
  return (
    <>
      <SectionsTitle
        subHeading={"Should Try"}
        heading={"chef recommends"}
      ></SectionsTitle>
      <div className="md:flex justify-between">
        {/* card 1 */}
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src={slide1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={slide2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src={slide3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommends;
