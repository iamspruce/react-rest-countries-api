const Card = ({ flag, name, population, region, capital, id }) => {
    return (
        <>
            <div className="card" key={id}>
                <div className="card-image">
                    <img src={flag} alt={name} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">
                        {name}
                    </h2>
                    <ol className="card-list">
                        <li>population: <span>{population}</span></li>
                        <li>Region: <span>{region}</span></li>
                        <li>Capital: <span>{capital}</span></li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Card
