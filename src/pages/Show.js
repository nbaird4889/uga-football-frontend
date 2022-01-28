
function Show(props){
    const id = props.match.params.id;
    const players = props.players;
    const player = players.find(p => p._id === id);

    return (
        <div className="player-show">
            <div className="show-image">
                <img className="player-image-show" src={player.image} alt={player.name} />
            </div>
            <div className="show-info">
                <h2 className="player-show-headline">{player.name}</h2>
                <p className="player-details"><b>Years Played:</b> {player.years_played}</p>
                <p className="player-details"><b>Position: </b>{player.position}</p>
                <p className="player-details"><b>Stat: </b>{player.stat_one}</p>
                <p className="player-details"><b>Stat: </b>{player.stat_two}</p>
                <p className="player-details"><b>Stat: </b>{player.stat_three}</p>
            </div>
        </div>
    );
} 
  
export default Show;