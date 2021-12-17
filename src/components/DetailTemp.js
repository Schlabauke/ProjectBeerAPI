import NavTemp from "./NavTemp";

const DetailTemp = (props) => {

    return (

        <section className='DetailTemp'>
            <img src={props.img} alt={props.name} />
            <article>
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <p>Created by:{props.creator} </p>
                <div>
                    <p>first brewed:{props.brewed} </p>
                    <p>Attentuiation level:{props.acidlevel}</p>
                </div>
                <p>{props.description}</p>
                <div className='Back'>
                    <img src='/public/img/Back.svg' alt='back' />
                </div>
            </article>
            useparams details-button verlinken
            <NavTemp />
        </section>
    );
}

export default DetailTemp;