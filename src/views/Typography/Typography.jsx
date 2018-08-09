import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  headingLight: {
      fontWeight: "200!important",
  },
  headingSemiBold: {
      fontWeight: "500",
  },
  headingBold: {
      fontWeight: "700",
  },
  rule: {
      border: "1px solid rgba(0,0,0,.1)",
      boxShadow: "none",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
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
  }
};
function TypographyPage(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Header 1</div>
          <h1>This is a heading</h1>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 2</div>
          <h2>This is a heading</h2>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 3</div>
          <h3>This is a heading</h3>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 4</div>
          <h4>This is a heading</h4>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 5</div>
          <h5>This is a heading</h5>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 6</div>
          <h6>This is a heading</h6>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Paragraph</div>
          <p>
          The difference between the almost right word and the right word is really a large matter. 'tis the difference between the lightning bug and the lightning.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Quote</div>
          <Quote
            text="It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt."
            author=" Mark Twain"
          />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Muted Text</div>
          <Muted>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Muted>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Primary Text</div>
          <Primary>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Primary>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Info Text</div>
          <Info>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Info>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Success Text</div>
          <Success>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Success>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Warning Text</div>
          <Warning>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Warning>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Danger Text</div>
          <Danger>
            It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.
          </Danger>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Small Tag</div>
          <h2>
            Header with small subtitle<br />
            <small>Use "Small" tag for the headers</small>
          </h2>
        </div>
      </CardBody>


    <CardBody>
    <hr className={classes.rule} />

        <h3 className={classes.headingLight}>Roboto Light </h3>
        <small>Weight 200, line-height 26px </small>

        <h3>Roboto Regular </h3>
        <small>Weight 300, line-height 26px </small>

        <h3 className={classes.headingSemiBold}>Roboto Semi-Bold </h3>
        <small>Weight 500, line-height 26px </small>

        <h3 className={classes.headingBold}>Roboto Bold </h3>
        <small>Weight 700, line-height 26px </small>

    </CardBody>
    </Card>






  );
}

export default withStyles(style)(TypographyPage);
