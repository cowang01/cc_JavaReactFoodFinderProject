import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = (props) => {

  if(!props.restaurantList){
    return 'Loading. . . '
  }

    const list = props.restaurantList.map((restaurant, key) => {
      return <li >
              <RestaurantItem unit={restaurant} id={key}  findSelectedRestaurant={props.selectedRestaurant}/>
            </li>
    })

    const updateRestaurantSelection = (event) => {
      console.log(event);
    }

  return (
      <div>
      <h3> Your Local Restaurants</h3>
      <ul>
        {list}
      </ul>

      </div>
  )
};

export default RestaurantList