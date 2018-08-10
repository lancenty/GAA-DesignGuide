import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import SwatchContainer from "components/Swatches/SwatchContainer.jsx";
import SwatchColorItem from "components/Swatches/SwatchColorItem.jsx";


const style = {
    cardBody: {
        paddingLeft: "50px",
        marginBottom: "40px",
        position: "relative"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "400",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};


function Color(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody className={classes.cardBody}>
        <h2>Global Aquaculture theme </h2>
        <h3>Backgrounds and accents</h3>
        <SwatchContainer>
            <SwatchColorItem colorClass={"colors__item colors--gaa-grayblue1"} colorLabel={"#90A3AD"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-teal1"} colorLabel={"#1D526A"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-teal2"} colorLabel={"#116482"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-teal3"} colorLabel={"#538BA0"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-blue1"} colorLabel={"#3E87A8"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-cyan1"} colorLabel={"#5BC2CF"}/>
            <SwatchColorItem colorClass={"colors__item colors--gaa-green1"} colorLabel={"#C0DA3B"}/>
        </SwatchContainer>


        <h2>Best Aquaculture Practices theme </h2>
        <h3>Backgrounds and accents</h3>
        <SwatchContainer>
            <SwatchColorItem colorClass={"colors__item colors--bap-blue1"} colorLabel={"#012859"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-blue2"} colorLabel={"#14287f"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-blue3"} colorLabel={"#0054a4"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-blue4"} colorLabel={"#157bdc"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-cyan1"} colorLabel={"#02dcf5"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-green1"} colorLabel={"#7bd34b"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-green2"} colorLabel={"#7bd34b"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-green3"} colorLabel={"#5eee0f"}/>
        </SwatchContainer>

        <h3>Neutrals</h3>
        <SwatchContainer>
            <SwatchColorItem colorClass={"colors__item colors--black"} colorLabel={"#000000"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-gray1"} colorLabel={"#4a4a4a"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-gray2"} colorLabel={"#878787"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-gray3"} colorLabel={"#E9EBF1"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-gray4"} colorLabel={"#F2F3F7"}/>
            <SwatchColorItem colorClass={"colors__item colors--white"} colorLabel={"#ffffff"}/>
        </SwatchContainer>

        <h3>Charts</h3>
            <SwatchContainer>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-violet1"} colorLabel={"#7E46B7"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-blue1"} colorLabel={"#02419A"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-blue2"} colorLabel={"#8AA2C8"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-green1"} colorLabel={"#43A546"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-green2"} colorLabel={"#AFC8A2"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-red1"} colorLabel={"#ab0520"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-orange1"} colorLabel={"#F5A623"}/>
            <SwatchColorItem colorClass={"colors__item colors--bap-chart-yellow1"} colorLabel={"#F8E71C"}/>
        </SwatchContainer>

      </CardBody>
    </Card>
  );
}

export default withStyles(style)(Color);
