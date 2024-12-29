// import Filter from './Filter'
// const AllCategories = (category) => {
    // return(<div >
            // <h1>What do you want to eat?</h1>
            // {['SEAFOOD','DESSERT','ITALIAN', 'APPETIZERS', 'ALL'].map(
                /* category=> <Filter key={category} category={category}/> */
            /* )} */
//             
//           
//            
        // </div>
    /* ) */
/* } */
/* export default AllCategories; */


import React, { useState } from 'react';
import Filter from './Filter';

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="all-categories">
      <h1>What do you want to eat?</h1>
      <div className="categories-list">
        {['SEAFOOD', 'DESSERT', 'ITALIAN', 'APPETIZERS', 'ALL'].map((category) => (
          <Filter
            key={category}
            category={category}
            onCategoryClick={handleCategoryChange}
            isSelected={selectedCategory === category}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
