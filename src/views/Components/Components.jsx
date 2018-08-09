import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputLabel from "@material-ui/core/InputLabel";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import Button from "components/CustomButtons/Button.jsx";
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import FormControl from '@material-ui/core/FormControl';

//import EnhancedTable from "components/Table/EnhancedTable.jsx";


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
    buttonGroup: {
        '& > *': {
            marginRight: "10px",
        },
    },
};

class Components extends React.Component {

    state = {
        checkedA: true,
        value: 'email',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleRadioChange = event => {
        this.setState({ value: event.target.value });
    };


    render() {
        const { classes } = this.props;

        return (
      <div>
        <Card>
            <CardBody className={classes.cardBody}>
                <h2> Form controls </h2>
                <h3> Common theme </h3>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                        <CustomInput
                            labelText="Company (disabled)"
                            id="company-disabled"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                disabled: true
                            }}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={3}>
                        <CustomInput
                            labelText="Username"
                            id="username"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                      </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="E-mail address"
                            id="email-address"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                        <FormControlLabel
                           control={
                             <Checkbox
                               checked={this.state.checkedA}
                               onChange={this.handleChange('checkedA')}
                               color="primary"
                               value="checkedA"
                             />
                           }
                           label="Send copy to self"
                         />
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                            labelText="First name"
                            id="first-name"
                            formControlProps={{
                                fullWidth: true
                            }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last name"
                        id="last-name"
                        formControlProps={{
                            fullWidth: true
                        }}
                      />
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="City"
                            id="city"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                            labelText="Postal code"
                            id="postal-code"
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <br/>
                        <InputLabel >Special handling notes</InputLabel>
                        <CustomInput
                            labelText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            id="about-me"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                            multiline: true,
                            rows: 3
                        }}
                        />
                        <FormControl component="fieldset" className={classes.formControl}>
                              <FormLabel component="legend">Contact</FormLabel>
                              <RadioGroup
                                aria-label="Contact"
                                name="contact1"
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleRadioChange}
                              >
                                <FormControlLabel value="phone" control={<Radio color="primary" />} label="Phone" />
                                <FormControlLabel value="email" control={<Radio color="primary" />} label="E-mail" />
                              </RadioGroup>
                        </FormControl>

                        <CardFooter>
                            <div className={classes.buttonGroup} >
                                <Button color="secondary">Reset</Button>
                                <Button color="primary">Save</Button>
                            </div>
                        </CardFooter>
                </GridItem>
            </GridContainer>
        </CardBody>
    </Card>
    <br/>

    <Card>
        <CardBody className={classes.cardBody}>
            <h2> Buttons </h2>

            <h3> Global Aquaculture theme </h3>
            <p><em>Under construction</em></p>

            <br/>
            <br/>


            <h3> Best Aquaculture Practices theme </h3>

            <div className={classes.buttonGroup} >
                <h6>size="sm"</h6>
                <Button color="primary" size="sm">Primary</Button>
                <Button color="primary" size="sm" disabled="true">Disabled</Button>
                <Button color="secondary" size="sm">Secondary</Button>
                <Button color="info" size="sm">Info</Button>
                <Button color="success" size="sm">Success</Button>
                <Button color="warning" size="sm">Warning</Button>
                <Button color="danger" size="sm">Danger</Button>
                <Button color="white" size="sm">White</Button>
            </div>

            <div className={classes.buttonGroup} >
                <h6>size="md"</h6>
                <Button color="primary" size="md">Primary</Button>
                <Button color="primary" size="md" disabled="true">Disabled</Button>
                <Button color="secondary" size="md">Secondary</Button>
                <Button color="info" size="md">Info</Button>
                <Button color="success" size="md">Success</Button>
                <Button color="warning" size="md">Warning</Button>
                <Button color="danger" size="md">Danger</Button>
                <Button color="white" size="md">White</Button>
            </div>

            <div className={classes.buttonGroup} >
                <h6>size="lg"</h6>
                <Button color="primary" size="lg">Primary</Button>
                <Button color="primary" size="lg" disabled="true">Disabled</Button>
                <Button color="secondary" size="lg">Secondary</Button>
                <Button color="info" size="lg">Info</Button>
                <Button color="success" size="lg">Success</Button>
                <Button color="warning" size="lg">Warning</Button>
                <Button color="danger" size="lg">Danger</Button>
                <Button color="white" size="lg">White</Button>
            </div>

            <div className={classes.buttonGroup} >
                <h6>simple="true"</h6>
                <Button color="primary" simple="true">Primary</Button>
                <Button color="primary" simple="true" disabled="true">Disabled</Button>
                <Button color="secondary" simple="true">Secondary</Button>
                <Button color="info" simple="true">Info</Button>
                <Button color="success" simple="true">Success</Button>
                <Button color="warning" simple="true">Warning</Button>
                <Button color="danger" simple="true">Danger</Button>
            </div>

            <div className={classes.buttonGroup} >
                <h6>round="true"</h6>
                <Button color="primary" round="true">Primary</Button>
                <Button color="primary" round="true" disabled="true">Disabled</Button>
                <Button color="secondary" round="true">Secondary</Button>
                <Button color="info" round="true">Info</Button>
                <Button color="success" round="true">Success</Button>
                <Button color="warning" round="true">Warning</Button>
                <Button color="danger" round="true">Danger</Button>
            </div>

            <div className={classes.buttonGroup} >
                <h6>round="true", justIcon="true"</h6>
                <Button color="primary" justIcon="true" round="true"><AddIcon /></Button>
                <Button color="primary" justIcon="true" round="true" disabled="true"><AddIcon /></Button>
                <Button color="secondary"  justIcon="true" round="true"><AddIcon /></Button>
                <Button color="info" justIcon="true" round="true"><AddIcon /></Button>
                <Button color="success" justIcon="true" round="true"><AddIcon /></Button>
                <Button color="warning" justIcon="true" round="true"><AddIcon /></Button>
                <Button color="danger" justIcon="true" round="true"><AddIcon /></Button>
            </div>
        </CardBody>
    </Card>

    <br/>

    <Card>
        <CardBody className={classes.cardBody}>
            <h2> Tables </h2>

            <h3> Simple </h3>

            <Table
              tableHeaderColor="primary"
              tableHead={["Location", "Country", "Species", "Expiration"]}
              tableData={[
                ["Australis Mar S.A. - Centro Morgan", "Chile", "Salmon", "fallow"],
                ["AMS - Cluster 4 - Sanit Farm", "Thailand", "Shrimp", "11-10-2018"],
                ["Gallant Dachan Seafood Co., Ltd", "Vietnam", "Shrimp", "12-05-2018"],
                ["BMR Industries Private Limited IOM1 - M/s Sharani Sindhu Shrimp Farms", "India", "Shrimp", "04-01-2019"],
                ["BMR Industries Private Limited IOM1 - Shri Beeda Ravichandra", "India", "Shrimp", "04-01-2019"],
                ["AMS - Cluster 6 - S. Siam Farm", "Chile", "Thailand", "01-04-2019"]
              ]}
            />
            <h3> With pagination and sorting </h3>
            <p><em>Under consruction </em></p>

        </CardBody>
    </Card>



    </div>
        );
    }
}

export default withStyles(styles)(Components);
