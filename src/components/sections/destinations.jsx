import placesCard ,{places} from "@/data/places"; 

export default function Destinations() {
  return (
    <section className="py-24 px-6 bg-[#F7F3EC]">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Premium Destinations
        </h2>
        <p className="text-gray-600 mt-2">
          Discover Ethiopia’s most beautiful modern travel spots
        </p>
      </div>

      {/* Grid */}
      {placesCard(places)}
     </section>
  );
}