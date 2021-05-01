import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import MyGames from "./pages/MyGames"
import {useState, useEffect} from "react"
import './App.css';

function App() {
//My games page with share the game list data with home
  const [games, setGames] = useState([])

  const [freegamelist, setFreeGameList] = useState([])

  const getFreeGameList = async () => {
    const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "238791b430mshf27f36440d2bc07p120426jsnb81344321f54",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
      }
    })
    
    .catch(err => {
      console.error(err);
    });

    const data = await response.json()

    setFreeGameList(data)

    // console.log(getFreeGameList)

  }

  useEffect(() => {getFreeGameList()}, [])

  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home FreeGameList={freegamelist}/>
          </Route>
          <Route path="/MyGames">
            <MyGames/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
