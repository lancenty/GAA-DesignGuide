import React from "react";
import Gallery from "react-photo-gallery";

var croatia = process.env.PUBLIC_URL + '/bap/ASI_Croatia aquaculture_Nightman.jpeg';
var irida = process.env.PUBLIC_URL + '/bap/IRIDA.png';
var facfarms = process.env.PUBLIC_URL + '/bap/OurFacilities_Farms.png';
var healthy =  process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyPlanet.png';
var healthypeople = process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyPeople.png';
var bluefish = process.env.PUBLIC_URL + '/bap/fishies-and-waves-new-blue.jpg';
var cert = process.env.PUBLIC_URL + '/bap/BAP_quality_assurance.jpg';
var feedmill = process.env.PUBLIC_URL + '/bap/OurFacilities_FeedMill.png';
var salmon = process.env.PUBLIC_URL + '/bap/OurProducts_Salmon.png';
var shrimp = process.env.PUBLIC_URL + '/bap/OurProducts_Shrimp.png';
var communicates = process.env.PUBLIC_URL + '/bap/ResponsibleAquacultureIs_HealthyCommunicaties.png';
var hatchery = process.env.PUBLIC_URL + '/bap/OurFacilities_Hatchery.png';
var preparedsalmon = process.env.PUBLIC_URL + '/bap/prepared_salmon.jpg';


const photos = [
    { src: croatia, width: 4, height: 3 },
    { src: irida, width: 1, height: 1 },
    { src: facfarms, width: 3, height: 4 },
    { src: healthy, width: 3, height: 4 },
    { src: healthypeople, width: 3, height: 4 },
    { src: bluefish, width: 4, height: 3 },
    { src: cert, width: 3, height: 4 },
    { src: feedmill, width: 2, height: 2 },
    { src: salmon, width: 3, height: 4 },
    { src: shrimp, width: 2, height: 2 },
    { src: communicates, width: 3, height: 4 },
    { src: hatchery, width: 1, height: 1 },
    { src: preparedsalmon, width: 4, height: 2 }
];

class GalleryList extends React.Component {

    render() {
        return (
            <Gallery photos={photos} direction={"column"} />
        );
    }
}

export default GalleryList;
