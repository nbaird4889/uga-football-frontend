
function Show(props){
    const id = props.match.params.id;
    const players = props?.players;
    const player = players ? players.find(p => p._id === id) : null;

    const loaded = () => {
        return (
            <div className="player-show">
                <div className="show-info">
                    <h2 className="player-show-headline">{player.name}</h2>
                    <p className="player-details"><b></b> {player.years_played}</p>
                    <p className="player-details"><b></b>{player.position}</p>
                    <p className="player-details"><b></b>{player.stat_one}</p>
                    <p className="player-details"><b></b>{player.stat_two}</p>
                    <p className="player-details"><b></b>{player.stat_three}</p>
                </div>
                <div className="show-image">
                    <img className="player-image-show" src={player.image} alt={player.name} />
                </div>
            </div>
        )
    };

    const loading = () => <h2> Loading...</h2>

    return (
        <div className="players-show">
        {player ? loaded() : loading()}
            <div className="hedges">
            </div>
        </div>
    );
} 
  
export default Show;