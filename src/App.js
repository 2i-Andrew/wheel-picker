import logo from './logo.svg';
import './App.css';
import ArcadeButton from './resources/ArcadeButton';
import Title from './resources/take-me-to-a-wheel.gif'

function App() {

  return (
    <div className="App">
      {/* <div class="title">
        <h1>
          <li>Take me to a wheel!</li>
          <li id="empty">gggggggggg</li>
          <li id="empty">gggggggggg</li>
        </h1>
      </div> */}
      <img src={Title} id="text-box"></img>
      <ArcadeButton/>
    </div>
    )
}

export default App;
