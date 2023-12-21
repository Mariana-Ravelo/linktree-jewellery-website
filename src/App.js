import profile from './assets/profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
        <img src={profile} className="App-profile" alt="profile" />
        <div className='title'>
          <h3> Mari's Crystal Jewellery </h3>
          <p> Wire wrapped handmade jewellery </p>
        </div>
        <a href="https://maricrystaljewellery.etsy.com">
          <button className="button etsy">Check out my Etsy store</button>
        </a>
        <a href="https://www.instagram.com/maris_crystal_jewellery/">
          <button className="button instagram">Follow me on Instagram</button>
        </a>
        <a href="https://www.youtube.com/@mariscrystaljewellery">
          <button className="button youtube">Subscribe to my Youtube channel</button>
        </a>
      </body>
    </div>
  );
}

export default App;
