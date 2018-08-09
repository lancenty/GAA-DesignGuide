import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import iconsStyle from "assets/jss/designguideStyles/views/iconsStyle.jsx";
import GalleryList from "components/List/ImageGallery.jsx";


const styles = {
    innerDiv: {
        marginLeft: "40px",
        marginRight: "40px",

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
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
};


function Icons(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody>
        <div style={styles.innerDiv}>
            <h2>Images</h2>
            <h3>Global Aquaculture</h3>
            <p><em>Under construction...</em></p>
            <br/>
            <br/>

            <h3>Best Aquaculture Practices</h3>
            <h6>Recommended images</h6>
            <GalleryList />


            <h3>Implementation</h3>
            <ul>
                <li>For photographs and other high resolution images, convert JPGs to PNGs.  PNGs, like JPEGs, are lossless, but are inherantly smaller.</li>
                <li>Images should be reduced to their <em>optimal</em> size to avoid lengthy downloads (and rendering to a smaller image).</li>
                <li>PNGs can be bundled into a single [tiled] image file -- with most of the same benefits as an SVG sprite.</li>
                <ul>
                    <li>For testing, a useful online tool for generating image sprites can be found <a target="_blank" rel="noopener noreferrer" href="http://css.spritegen.com/">here.</a>.</li>
                    <li>Alternatively, a better solution can be incorporated into a build using this <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/css-sprite-loader">loader</a>.</li>
                </ul>
                <li><strong>Note:</strong> IT is looking into storing images on a Contact Delivery Network (CDN) that may negate the advantages of sprites.</li>
            </ul>



            <h2> Material UI Icons </h2>
            <p>
            Material UI provides thousands of vector icons as both SVGs and fonts.  Where possible, use SVG icons and avoid fonts (fonts are subject to anti-aliasing).  For more information, click <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/style/icons/"> here.</a>
            </p>


            <Hidden only={["sm", "xs"]}>
                <iframe
                    className={classes.iframe}
                    src="https://material.io/icons/"
                    title="Icons iframe"
                >
                <p>Your browser does not support iframes.</p>
                </iframe>
            </Hidden>
            <Hidden only={["lg", "md"]}>
                <GridItem xs={12} sm={12} md={6}>
                    <h5>
                    The icons are visible on Desktop mode inside an iframe. Since
                    the iframe is not working on Mobile and Tablets please visit
                    the icons on their original page on Google. Check the
                    <a
                    href="https://design.google.com/icons/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Material Icons
                    </a>
                    </h5>
                </GridItem>
            </Hidden>


            <h2> Custom icons</h2>
            <p>
            For simple images and icons that are not provided by Material UI's icon set, consider using SVGs over PNGs or JPGs - the <em>exception</em> being photographs and high resolution images.
            SVGs can and should bundled into a single file, or sprite - so long as the individual files don't change often.  A useful article on creating sprites is found <a target="_blank" rel="noopener noreferrer" href="https://stories.jotform.com/our-icon-workflow-3fa1489226a">here</a>.  A sprite has the advantage of being smaller (than many individual files), is downloaded once, and remains in a browser's cache.
            </p>

            <h3>Implementation</h3>
            <ul>
                <li> In React, SVGs are supported.  For more information click <a target="_blank" rel="noopener noreferrer" href="https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91">here.</a></li>
                <li> For traditionally hosted websites such as GAA uses,  SVGs are not directly supported on older browsers, such as IE10 or older versions of Safari, and may require a shim library (see <a target="_blank" rel="noopener noreferrer" href="https://github.com/jonathantneal/svg4everybody">SVG for Everybody</a>).</li>
            </ul>
        </div>
      </CardBody>
    </Card>

  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
