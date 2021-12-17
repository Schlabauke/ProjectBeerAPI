const SideTemp = (props) => {
    return (
        <article className='SideTemp'>
            <img src={props.img} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.title}</p>
                <p>Created by: {props.creator}</p>

                <button>Details</button>
            </div>
        </article>
    );
}

export default SideTemp;