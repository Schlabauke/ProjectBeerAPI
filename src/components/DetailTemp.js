import NavTemp from "./NavTemp";
const DetailTemp = (props) => {
    return (

        <article className='SideTemp'>
            <img src={props.img} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <p>Created by:{props.creator} </p>
                <div>
                    <p>first brewed:{props.brewed} </p>
                    <p>Attentuiation level:{props.acidlevel}</p>
                </div>
                <p>{props.description}</p>
                <div>
                    <img src='/public/img/Back.svg' alt='back' />
                </div>
            </div>
            <NavTemp />
        </article>

    );
}

export default DetailTemp;