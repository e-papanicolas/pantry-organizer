import LocationCard from "./LocationCard";
import { useState } from "react";
import ItemCard from "./ItemCard";

function Locations({ locations, itemsToDisplay }) {
  const [displayItems, setDisplay] = useState([]);

  function showItems(e, locationId) {
    const toDisplay = itemsToDisplay.filter((item) => {
      return item.location_id === locationId;
    });
    setDisplay(toDisplay);
  }

  return (
    <div>
      <div>
        {locations.map((location) => {
          return (
            <LocationCard
              location={location}
              key={location.id}
              showItems={showItems}
            />
          );
        })}
      </div>
      <div>
        {displayItems.map((item) => {
          return (
            <ItemCard
              name={item.name}
              location={item.location_id}
              date={item.created_at}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Locations;
