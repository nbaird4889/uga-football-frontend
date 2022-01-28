import { Link } from "react-router-dom"
import {useState} from "react"

function Index(props) {
    const [ newForm, setNewForm ] = useState({
        name: "",
        years_played: "",
        position: "",
        stat_one: "",
        stat_two: "",
        stat_three: "",
        image: "",
    });

     // handleChange function for form
    const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlayer(newForm);
        setNewForm({
            name: "",
            years_played: "",
            position: "",
            stat_one: "",
            stat_two: "",
            stat_three: "",
            image: "",
        });
    };

  // loaded function
  const loaded = () => {
    return props.players.map((player) => (
      <div key={player._id} className="player">
        <h2 id="player-names">{player.name}</h2>
        <Link to={`/players/${player._id}`}><img className="player-image" src={player.image} alt={player.name} /></Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div>
      <h2 className="index-headline">UGA LEGENDARY DAWGS</h2>
        <div className="player-cards">
        {props.players ? loaded() : loading()}
        </div>
      
      <h2 className="index-headline">ADD UGA LEGEND</h2>
      <section>
        <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor="name">Name: </label>
        <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="Kirby Smart"
            onChange={handleChange}
        />
        <label htmlFor="years_played">Years Played: </label>
        <input
            type="text"
            value={newForm.years_played}
            name="years_played"
            placeholder="2012 - 2014"
            onChange={handleChange}
        />
        <label htmlFor="position">Position: </label>
        <input
            type="text"
            value={newForm.position}
            name="position"
            placeholder="Running Back"
            onChange={handleChange}
        />
        <label htmlFor="stat_one">Stat: </label>
        <input
            type="text"
            value={newForm.stat_one}
            name="stat_one"
            placeholder="Rushing Yards: 2000"
            onChange={handleChange}
        />
        <label htmlFor="stat_two">Stat: </label>
        <input
            type="text"
            value={newForm.stat_two}
            name="stat_two"
            placeholder="Touchdowns: 20"
            onChange={handleChange}
        />
        <label htmlFor="stat_three">Stat: </label>
        <input
            type="text"
            value={newForm.stat_three}
            name="stat_three"
            placeholder="Receiving Yards: 4000"
            onChange={handleChange}
        />
        <label htmlFor="image">Image: </label>
        <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
        />
        <div className="button-div">
        <input className="add-btn" type="submit" value="Add Player" />
        </div>
        </fieldset>
        </form>
        </section>
        </div>
  );
}

export default Index;