import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import RulesTable from "components/Table/RulesTable.jsx";


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
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};


function Writing(props) {
  const { classes } = props;
  return (
    <Card>
      <CardBody className={classes.cardBody}>
      <h2> Capitalization </h2>
        <p>
        Case carries meaning: mixed case aids in visual scanning. A leading cap sserve a cognitive purpose: it helps the user jump to the first letter of a key action. Rules:
        </p>

        <ul>
            <li>Use <i>sentence-style</i> caps for page & dialog titles, headings, radio button labels, checkbox labels, column headings, dropdowns, and menu items. Do not mix and match sentence and title case.</li>
            <li>Use <i>uppercase</i> for buttons, tab headings, and navigation.</li>
        </ul>

        <h2> Punctuation  </h2>
        <ul>
            <li>For labels, hover text, setting labels, stacks of links, promos, and so on, <strong>avoid</strong> periods. This reduces visual clutter and helps readers parse your text at a glance.</li>
            <li>Use one space after a period or question mark.  With proportional-spaced fonts, one space is all that is required.  </li>
            <li>Contractions usually help reduce the length of text.  Howewver, if a contraction makes a sentence harder to understand, spell it out.</li>
            <li>Avoid exclamation points.  Exclamation points feel like you are being shouted out.</li>
            <li>Use numerals in place of words for numbers.</li>
            <li>Ampersands may be used in headings, tables, buttons and in other places where else space is at a premium, but spelling out the word “and” is preferred.</li>
            <li>Don't use ellipsis (...) for button labels to imply that a dialog or another page is forthcoming.</li>
        </ul>

        <h2> Global writing </h2>
        <p>
        While English is the international standard in business and technology, this doesn't mean that we shouldn't adhere to some basic globalization rules.
        Culturally specific language, currency, dates, and geographical information (e.g. phone numbers or postal codes) can be difficult to translate and may be inappropriate in some locale.  Don’t use culturally specific idioms, metaphors, or examples (e.g. <i>"Job salary ($K)"</i>, <i>"Enter zip code"</i>, <i>"You really hit it out of the park!"</i>)
        </p>


        <h2> Spelling  </h2>
        <RulesTable
          tableHeaderColor="secondary"
          tableHead={["RULE", "DOs", "DONT"]}
          tableData={[
            ["Capitalize 'E' and use a hyphen.",  "E-mail", "Email, email, e-mail, EMail"],
            ["Use two words for help desk.", "Help desk", "Helpdesk, helpdesk"],
            ["Use both the singular and plural forms for datum.",  "Data", "Datum"],
            ["Capitalize 'I' in internet.",  "Connecting to the Internet.", "Connecting to the internet."],
            ["Capitalize 'U' in 'Username' and use one word.",  "Username", "username, user name, User Name"],
            ["Capitalize 'F' in 'First name' and use two words.",  "First name", "First Name, First, FName"],
            ["Capitalize 'L' in 'Last name' and use two words.",  "Last name", "Last Name, Last, LName"],
            ["Use one word for website, all lower case",  "Searching website", "Searcing Web site, Searching web site."],
            ["For URLs, drop http:// unless the site is secure and starts with https://",  "Connecting to https://www.fda.gov/Food/GuidanceRegulation/HACCP/", "Search using http://www.google.com?"],
          ]}
        />


        <h2> Voice </h2>
        <RulesTable
          tableHeaderColor="secondary"
          tableHead={["RULE", "DOs", "DONT"]}
          tableData={[
            ["Be friendly and focus on the user.  Text should be intuitive, efficient, casual, and trustworthy.",  "The server is taking too long to respond and may not be available.", "Communication Failure.  Server is busy and cannot be reached. Do you want to continue?"],
            ["Be inviting and focus on features, omitting implementation details, caveats, and restrictions.", "Automatically saved your application.", "If you don't press Save, you may lose your application."],
            ["Be concise. Distill information to the essential and avoid unnecessary chattiness. Text in small chunks is easiest to read (or scanned).",  "Saving your application may take a few seconds.", "Saving your application to the database. Depending upon the number of network traffic, this may take 30 seconds."],
            ["Speak directly to users as 'you' and never 'me' or 'my'.",  "Profile", "My profile"],
            ["Don’t refer to 'we'.",  "Searching certified facilities.", "We're going to search certified facilites."],
            ["Write in the present.",  "Application saved.", "The application was saved."],
            ["Write simply. It’s easier for users to scan and understand.",  "Profile", "Would you like to save your changes now?"],
            ["Avoid jargon and minimize acronyms. Always select the simplest word even if you believe that technical or industry terms are understood by your user base.",  "Application may fail to meet Hazard Analysis and Critical Control Points (HACCP) standards.", "Application doesn't mean HACCP standards"],
            ["Skip common introductory phrases and get right to the point",  "Edit application?", "Would you like to edit your application now?"],
            ["Speak directly to users as 'you' and never 'me' or 'my'",  "Profile", "My profile"],
            ["Use the principle of progressive disclosure. Don’t overwhelm with detail in the beginning. Reveal increasing detail as the user needs the information.'",  "User data", "Creating user data followed by facility data"],
          ]}
        />


        <h2>Glossary</h2>
        <RulesTable
          tableHeaderColor="secondary"
          tableHead={["WHERE", "PREFFERED", "REPLACES"]}
          tableData={[
                ["Dialogs, navigation", "Note: use a close icon 'X'", "Close"],
                ["Form, navigation", "Add", "Create"],
                ["Navigation", "Analytics", "Reports"],
                ["Navigation, form, dialog", "Add", "Create"],
                ["Dialog, form", "Apply", "Submit, Go,"],
                ["Dialog, wizard", "Back", "Previous, Prev"],
                ["Dialog, navigation", "Continue", "More, Next"],
                ["Dialog, wizard", "Done", "Finish"],
                ["Form, navigation", "Edit", "Modify"],
                ["Navigation", "Home", "Welcome"],
                ["Navigation, other", "Learn more", "Info, information"],
                ["Dialog, navigation", "Next", ""],
                ["Form", "Postal code", "Zip code"],
                ["Navigation, form", "Profile", "Account, User data"],
                ["Sign in form, navigation", "Register", "Sign up"],
                ["Form, dialog, navigation", "Save", "Submit, Update"],
                ["Navigation, other", "Search", "Find"],
                ["Navigation, other", "Settings", "Properties"],
                ["Sign in form, navigation", "Sign in", "Log in, Login"],
                ["Navigation", "Sign out", "Log out, Logout"],
                ["Navigation, other", "Settings", "Find"],
          ]}
        />

      </CardBody>
    </Card>
  );
}

export default withStyles(style)(Writing);
