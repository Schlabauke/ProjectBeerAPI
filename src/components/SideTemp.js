const SideTemp = (props) => {
    return (
        <article className='SideTemp'>
            <img src={props.img} alt={props.name} />
            <div>
                <h2>{props.title}Beer</h2>
                <p>{props.description}superduper delicious beer with hints of american oak and cherryblossoms</p>
                <p>{props.creator}Created by: Damn good Brewers</p>
                <button>Details</button>
            </div>
        </article>
    );
}

export default SideTemp;