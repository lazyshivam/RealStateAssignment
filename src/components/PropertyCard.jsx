import React from 'react';
import millify from 'millify';
const PropertyCard = (props) => {

  const { price, rentFrequency, area, title, coverPhoto, rooms, baths,isVerified
  ,category} = props.property;
  // console.log(price)
  return (
    <div className="flex w-96 justify-center items-center flex-wrap gap-5 m-5 transition-transform transform hover:scale-105 ">
      <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-md border border-gray-300 bg-white transition-transform transform hover:scale-105">
        <img src={coverPhoto.url} alt="House_Image" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="flex items-baseline">
            {/* <span className="inline-block bg-teal-500 text-white px-2 py-1 rounded-full"> */}
              {isVerified?(
              <span className="inline-block bg-teal-500 text-white px-2 py-1 rounded-full">
                <i className="fas fa-check-circle mr-1"></i> Verified
              </span>
            ):(
              <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full">
                <i className="fas fa-times-circle mr-1"></i> Not Verified
              </span>
            )}
            {/* </span> */}
            <div className="flex items-center ml-2 space-x-4">
              <span className="text-blue-400">
                {rooms}
                <i className="fas fa-bath ml-1"></i>
              </span>
              <span className="ml-1 text-blue-400">
                {baths}
                
                <i className="fas fa-bed ml-1"></i>
              </span>
              <span className="ml-1 text-blue-400">
                {millify(`${area}`)} sqft <i className="fa-solid fa-table-cells-large"></i>
              </span>
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-gray-900 truncate">{title}</h4>
          <div className="mt-1 flex justify-between">
            <div className="">
              ${millify(price)}
              <span className="text-gray-600 text-sm">/{rentFrequency}</span>
            </div>
            <div className="bg-blue-400 rounded-lg px-2 text-white ">
              {category[1].name
              }
          
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
