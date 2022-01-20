function LocationCard({ location, showItems }) {
  return (
    <div>
      <div className="location-card" onClick={(e) => showItems(e, location.id)}>
        <h1>{location.name}</h1>
      </div>
    </div>
  );
}

export default LocationCard;
