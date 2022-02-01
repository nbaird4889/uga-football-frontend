import { useEffect, useState, useRef } from "react"; //useRef creates a mutable reference - refs can persist in between renders 
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Home from "../pages/Home"

function Main(props) {
    const [ players, setPlayers ] = useState(null);
  
    const URL = "https://uga-football-backend.herokuapp.com/players/";

    const getPlayersRef = useRef();
  
    const getPlayers = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPlayers(data);
    };
  
    const createPlayer = async (player) => {
      // make post request to create people
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(player),
      });
    // update list of people
      getPlayers();
    };

    useEffect(() => {
      getPlayersRef.current = getPlayers;
    })
  
    useEffect(() => getPlayersRef.current(), []);
  
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/players">
            <Index players={players} createPlayer={createPlayer} />
          </Route>
          <Route
            path="/players/:id"
            render={(rp) => (
              <Show
                players={players}
                {...rp}
              />
            )}
          />
        </Switch>
      </main>
    );
}
  
  export default Main;