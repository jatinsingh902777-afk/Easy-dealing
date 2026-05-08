export default function EasyPropertyWebsite() {
  document.getElementById("root").innerHTML = `
    <div style="padding:20px;font-family:Arial;">
      <h1>Easy Property</h1>
      <p>Buy, Sell & Rent Properties</p>

      <form>
        <input placeholder="Name" /><br /><br />
        <input placeholder="Phone" /><br /><br />
        <input placeholder="Location" /><br /><br />
        <textarea placeholder="Property Details"></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Property Areas</h2>
      <ul>
        <li>North Delhi</li>
        <li>South Delhi</li>
        <li>East Delhi</li>
        <li>West Delhi</li>
      </ul>
    </div>
  `;
}

EasyPropertyWebsite();
