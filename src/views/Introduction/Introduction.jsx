import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import OpenInNew from "@material-ui/icons/OpenInNew";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";


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

function Introduction(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody className={classes.cardBody}>
        <h2>Style guide </h2>

        <p>
          What follows is a visual design language which integrates the principles of good design with a core set of styles, layouts, and components. These guidelines apply to both GAA and BAP. One benefit of having a common design language across all products, is that it simplfies future development as well as makes all web development simpler to maintain.
        </p>

        <p>
          This spec assumes that you have a working knowledge of HTML 5, CSS 3, JavaScript/JQuery. Knowledge of Google's Material Design is helpful since many of the concepts in this guide are based partially on this framework.
        </p>

        <p>
          This spec is a living document that will be updated as we continue to develop the tenets of design. It is based, in part, from a number of different style guides: Google's Material Design (including the structure of this site), Microsoft's Style Guide, and the Chicago Manual of Style.
        </p>

        <h2>Vision </h2>
        <p>
          Today, Global Aquaculure's two websites have evolved without a design guide.  The goal of this Style Guide is to present a blueprint towards unifying the both, as well as future, websites - even with different color themes.
        </p>

        <h2> Design principles </h2>

        <h3> Mobile-first </h3>
        <p>
          By targeting smaller tablet devices and then upscaling to desktop, an application will generally be more minimalist and easier to use. In general, it is far easier to upscale than downscale.  Phone apps, however, are entirely different – they need to be thought out carefully keeping only the absolute “essential” features of the main app
        </p>


        <h3> Workflow </h3>
        <p>
          While designing a workflow, ask yourself which design elements are absolutely essential? This is the time to eliminate or minimize nice-to-have elements. Do we need everything on the main page or can you nest elements like privacy, copyright, etc. within a larger context? In terms of features (eliminate the “huh?” or “where is that …”).
        </p>

        <h3> Layout </h3>
        <p/>
          <ul>
              <li><i>Less is more</i> - white space is key. UI should never “feel” busy or crowded.</li>
              <li>Employ the principle of <strong>progressive-disclosure</strong>; show only commonly used UI elements on main screens and hide or eliminate under-utilized features.</li>
              <li><i>Use color judiciously.</i> The use of a color should be used to accent neutral colors so as to call attention to some part of the overall design. Overuse of color works against a design.</li>
              <li><i>Use fonts judiciously.</i> Font choices should never call attention to some part of the overall design.</li>
              <li>Every design is a compromise -- design for the 90% use case and not the 10%.</li>
          </ul>

        <h2 id="furtherReading">Further reading </h2>

        <p><a href="https://material.io/design/introduction/" target="_blank" rel="noopener noreferrer"><OpenInNew /> Material Design</a></p>
        <p><a href="https://www.chicagomanualofstyle.org//home.html" target="_blank" rel="noopener noreferrer"><OpenInNew />  Chicago Manual of Style </a></p>
        <p><a href="https://docs.microsoft.com/en-us/style-guide/welcome/" target="_blank" rel="noopener noreferrer"><OpenInNew /> Microsoft Style Guide </a></p>

      </CardBody>
    </Card>
  );
}

export default withStyles(style)(Introduction);
