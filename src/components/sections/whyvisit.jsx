import { Landmark, Mountain, Globe } from "lucide-react";

export default function WhyVisit() {
  return (
    <section className="py-20 px-6 bg-white">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Why Visit Ethiopia?
        </h2>
        <p className="text-gray-600 mt-2">
          A land of origins, culture, and breathtaking beauty
        </p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        {/* Culture */}
        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
          <Landmark className="mx-auto h-10 w-10 text-yellow-500" />
          <h3 className="mt-4 text-xl font-semibold">Rich Culture</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Experience unique traditions, festivals, and ancient heritage.
          </p>
        </div>

        {/* Nature */}
        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
          <Mountain className="mx-auto h-10 w-10 text-green-600" />
          <h3 className="mt-4 text-xl font-semibold">Stunning Nature</h3>
          <p className="text-gray-600 mt-2 text-sm">
            From mountains to deserts, Ethiopia has diverse landscapes.
          </p>
        </div>

        {/* History */}
        <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
          <Globe className="mx-auto h-10 w-10 text-blue-500" />
          <h3 className="mt-4 text-xl font-semibold">Ancient History</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Discover one of the oldest civilizations in the world.
          </p>
        </div>

      </div>
    </section>
  );
}