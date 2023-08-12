import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';


const Rent = () => {
    
    const [properties, setProperties] = useState([]);
    const [filteredProperties,setFilteredProperties]=useState([]);
    const [searchform, setSearchform] = useState({
        type: '',
        rentFrequency: '',
        price: '',
        area: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const fetchProperties = async () => {
        try {
            const response = await axios.get('https://bayut.p.rapidapi.com/properties/list', {
                params: {
                    locationExternalIDs: '5002,6020',
                    purpose: 'for-rent',
                    hitsPerPage: '100',
                    page: '0',
                    lang: 'en',
                    sort: 'city-level-score',
                    rentFrequency: searchform.rentFrequency,
                    categoryExternalID: searchform.type,
                    priceMax: searchform.price,
                    areaMax: searchform.area
                },
                headers: {
                    'X-RapidAPI-Key': '39b48fd2demshe5b3441d3e8170dp17328ejsn434ac11a856c',
                    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
                }
            });
            setIsLoading(false);
            setProperties(response.data.hits);
            setFilteredProperties(response.data.hits); // Update the properties state with fetched data
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    useEffect(() => {
        // Fetch data once
        fetchProperties();
    }, []);

    

    const formvalue = (e) => {
        setSearchform((searchform) => ({
            ...searchform,
            [e.target.name]: e.target.value
        }));
    };

    const [searchTerm, setSearchTerm] = useState('');

    const filterPropertiesByRooms = (term) => {
        if (!term) {
            return properties; // Return all properties if no search term
        }
    
        return properties.filter(property =>
            property.rooms.toString().toLowerCase().includes(term.toLowerCase())
        );
    };
    
    const onChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        setFilteredProperties(filterPropertiesByRooms(searchTerm));
    };
    
    const handleFilterChange = (event) => {
        event.preventDefault();
        setIsLoading(true);
        fetchProperties();
    };

    return (
        <div className='container'>
            <div className='w-4/5  mx-auto flex justify-between  mt-10'>
                <h1 className='inline-block text-2xl  font-bold'>
                    Search properties to rent
                </h1>
                <input
                    className='border text-lg border-blue-300 h-10 p-2 w-60 inline-block rounded-md'
                    type='text'
                    name='search'
                    value={searchTerm} // Bind the value to the state
                    onChange={onChange}
                    placeholder='Search with Search Bar' 
                />
            </div>
            <div className="container w-4/5  mx-auto flex justify-center bg-white shadow mt-6 p-3 shadow-slate-400">
                <form action="" onSubmit={handleFilterChange} className='flex flex-wrap justify-center  space-x-20'>
                    <div className="flex flex-col ">
                        <label htmlFor="type">Property type</label>
                        <select
                            id="type"
                            name="type"
                            value={searchform.type}
                            onChange={formvalue}
                            className='border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'
                        >
                            <option value="">Select type...</option>
                            <option value="4">Apartment </option>
                            <option value="16">Townhouse</option>
                            <option value="18">Penthouses</option>
                            <option value="21">Hotel Apartments</option>
                            <option value="19">Villa Compound</option>
                            <option value="12">Residential Floor</option>
                            <option value="14">Residential Plot</option>
                            <option value="7">Warehouse</option>



                            {/* Apartment -> 4|Townhouses -> 16|Villas -> 3|Penthouses -> 18|Hotel Apartments -> 21|Villa Compound -> 19|Residential Plot -> 14|Residential Floor -> 12|Residential Building -> 17|Office -> 5|Shop -> 6|Warehouse -> 7|Labour camp -> 9|Commercial Villa -> 25|Bulk Units -> 20|Commercial Plot -> 15|Commercial Floor -> 13|Commercial Building -> 10|Factory -> 8|Industrial Land -> 22|Mixed Use Land -> 23|Showroom -> 24|Other Commercial -> 11 */}

                        </select>
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="rentFrequency">RentFrequency</label>
                        <select id="rentFrequency" name="rentFrequency" value={searchform.rentFrequency} onChange={formvalue}
                            className='border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'

                        >
                            <option value="">Select rentFrequency...</option>
                            <option value="daily">daily</option>
                            <option value="monthly">monthly</option>
                            <option value="weakly">weakly</option>
                            <option value="yearly">yearly</option>

                            
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Max Price</label>
                        <select id="price" name="price" value={searchform.price} onChange={formvalue}
                            className='border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'

                        >
                            <option value="">Select price...</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                            <option value="3000">3000</option>
                            <option value="4000">4000</option>
                            <option value="5000">5000</option>
                            <option value="6000">6000</option>
                            <option value="7000">7000</option>
                            <option value="8000">8000</option>
                            <option value="9000">9000</option>
                            <option value="90000">90000</option>
                            <option value="900000">900000</option>
                            <option value="9000000">9000000</option>

                            
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="MaxArea">MaxArea</label>
                        <select id="MaxArea" name="area" value={searchform.area}
                            className='border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'

                            onChange={formvalue}>
                            <option value="">Select MaxArea...</option>
                            <option value="10">10</option>
                            <option value="30">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="80">80</option>
                            <option value="90">90</option>
                            <option value="100">100</option>
                            <option value="1000">1000</option>
                            <option value="10000">10000</option>



                           
                           
                        </select>
                    </div>
                    <button type='submit' className='bg-blue-500 px-6 my-2 rounded-md text-lg text-white hover:bg-blue-400'>Search</button>
                </form>
            </div>
            <div className="mt-10 margin-auto  flex flex-wrap justify-center ">
                {
                    isLoading ? (
                        // Display loading spinner while data is being fetched
                        <div className="flex justify-center items-center h-screen">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                        </div>
                    ) : (
                        filteredProperties.length>0? (filteredProperties.map((property, index) => {
                            return <PropertyCard key={index} property={property} />;
                        })) :(
                            <div className="overflow-hidden">
                                <h1 className='text-2xl font-extrabold'>Opps! Data is not found.</h1>
                            </div>

                        )
                    )}
            </div>

        </div>
    );
};

export default Rent;

