import profile from "./assets/profile.jpg";
import "./App.css";
import { FaEtsy, FaInstagram, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
        <img src={profile} className="App-profile" alt="profile" />
        
        <div className="title">
          <h3> Mari's Crystal Jewellery </h3>
          <hr></hr>
          <p> Find me on: </p>
        </div>

        <div className="contacts">
          <a href="https://maricrystaljewellery.etsy.com">
            <button className="button btn-etsy"><FaEtsy/></button>
          </a>

          <a href="instagram://user?username=maris_crystal_jewellery">
            <button className="button btn-instagram"><FaInstagram/></button>
          </a>

          <a href="https://www.youtube.com/@mariscrystaljewellery">
            <button className="button btn-youtube"><FaYoutube/></button>
          </a>
        </div>
        
      </body>
    </div>
  );
}

export default App;
