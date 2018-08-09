import React from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import DownloadList from "components/List/DownloadList.jsx";
import ESRImap from "components/Maps/ESRImap.jsx";

const styles = {
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
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
};

class Wireframes extends React.Component {

    render() {
        return (
          <div>
            <Card>
              <CardBody className={styles.cardBody}>
               <h2>Best Aquaculture Practices</h2>

               <DownloadList />


               <ESRImap />

              </CardBody>
            </Card>
          </div>
      );
  }
}

export default Wireframes;
