import { Link } from "react-router-dom";
const MainTemp = () => {
    return (
        <section className='MainTemp'>
            <article className='MainArticle'>
                <img src='https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='Beers' />
                <Link to='/Sidelist'>All Beers</Link>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            </article>
            <article className='MainArticle'>
                <img src='https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='more Beers' />
                <Link to='/RandomTemp'>Random Beers</Link>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            </article>
        </section>
    );
}

export default MainTemp;