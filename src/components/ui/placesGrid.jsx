import PlaceCard from "./PlaceCard";

function PlacesGrid({ places }) {
  return (
    <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlacesGrid;