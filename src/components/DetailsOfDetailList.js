import { useParams } from "react-router";
/* import DetailTemp from "./DetailTemp"; */

const DetailsOfDetailList = () => {
    let { id } = useParams()
    console.log(useParams().id)
    let Beers = favBeer.filter(elt => { return elt.id.toString() === id.toString() })
    console.log(Beers)
    return (
       /*  <DetailTemp
            img={Beers[0].image_url}
            name={Beers[0].name}
            title={Beers[0].tagline}
            creator={Beers.contributed_by}
            description={Beers[0].description}
            brewed={Beers[0].first_brewed}
            acidlevel={Beers[0].attenuation_level}
        /> */
    );
}

export default DetailsOfDetailList;