import NavTemp from "./NavTemp";
const DetailTemp = (props) => {
    return (

        <article className='SideTemp'>
            <img src={props.img} alt={props.name} />
            <div>
                <h2>{props.title}BeerName</h2>
                <p>{props.creator}Created by: Damn good Brewers</p>
                <div>
                    <p>first Brewed:{props.brewed} </p>
                    <p>Attentuiation level:{props.acidlevel}</p>
                </div>
                <p>{props.description}superduper delicious beer with hints of american oak and cherryblossoms..Some other crazy stuff.</p>
                <div>
                    <img src='/public/img/Back.svg' alt='back' />
                </div>
            </div>
            <NavTemp />
        </article>

    );
}

export default DetailTemp;