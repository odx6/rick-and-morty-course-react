export default function Characters(props){
    const {characters,setCharacters} =props;
    const resetCharacters=()=>{
       // console.log("click");}
       setCharacters(null);
    }
console.log(characters);
return (<div className="character">
    <h1>Personajes</h1>
    <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
    <div className="container-characters">

        {characters.map((character, index)=>(
        <div className="character-container" key={index}>
          <div>
            <img src={character.image} alt={character.name}/>
           </div>
          <div>
            <h3>{character.name }</h3>
            <h6>
                {character.status==="Alive" ? (
                <>
                <spam className="alive"/> Alive
                </>
                ):(
                <>
                <spam className="dead"/> Dead
                </>
                ) }
            </h6>
            <p className="text-gray"><span>id:</span> </p>
            <span>{character.id}</span>
            <p className="text-gray"><span>Episodios:</span> </p>
            <span>{character.episode.length}</span>
            <p className="text-gray"><span>Especie:</span> </p>
            <span>{character.species}</span>
            <p className="text-gray"><span>Tipo:</span> </p>
            <span>{character.type}</span>
          </div>
        </div>
        ))}
    </div>
    <span className="back-home" onClick={resetCharacters}>Volver a la Home</span>
</div>);
}