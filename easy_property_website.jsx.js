export default function EasyPropertyWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold">Easy Property Dealing</h1>
        <p className="text-gray-600 mt-2">
          Buy, Sell & Rent Properties in Delhi | दिल्ली में प्रॉपर्टी खरीदें, बेचें और किराए पर दें
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Post Your Property / अपनी प्रॉपर्टी डालें</h2>
          <form className="space-y-4">
            <input className="w-full border p-3 rounded-xl" placeholder="Owner Name / मालिक का नाम" />
            <input className="w-full border p-3 rounded-xl" placeholder="Phone Number / फोन नंबर" />
            <input className="w-full border p-3 rounded-xl" placeholder="Property Location (Delhi)" />
            <input className="w-full border p-3 rounded-xl" placeholder="Price / कीमत" />
            <textarea className="w-full border p-3 rounded-xl" placeholder="Property Details / प्रॉपर्टी जानकारी"></textarea>
            <button className="bg-black text-white px-6 py-3 rounded-xl">Submit</button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Delhi Locations</h2>
          <ul className="space-y-2 text-gray-700">
            <li>North Delhi</li>
            <li>South Delhi</li>
            <li>East Delhi</li>
            <li>West Delhi</li>
            <li>Central Delhi</li>
          </ul>
        </div>
      </section>

      <footer className="mt-8 bg-white p-6 rounded-2xl shadow text-center">
        <p>Contact: 7078724716</p>
        <p>Easy Property Dealing © 2026</p>
      </footer>
    </div>
  );
}
