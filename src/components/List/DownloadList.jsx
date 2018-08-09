import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/PictureAsPdf';

import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
//import ImageIcon from '@material-ui/icons/Image';
import ExportIcon from '@material-ui/icons/SaveAlt';
import SketchIcon from '../CustomIcons/SketchIcon.jsx';
import PrincipleIcon from '../CustomIcons/PrincipleIcon.jsx';

//import PDFHeaderSketches from '../../assets/media/BAP-header-alternatives.pdf';
//import SCTvisualizations from '../../assets/media/SCT-visualizations.pdf';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: theme.palette.background.paper,
  },
});

// Preferred way to get documents -- i.e. avoid compile
var doc_HeaderAlternatives = process.env.PUBLIC_URL + '/media/BAP-header-alternatives.pdf';
var doc_SCTSketches = process.env.PUBLIC_URL + '/media/SCT-visualizations.pdf';



class DownloadList extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

      <List>
          <ListItem>
            <Avatar>
              <SketchIcon />
            </Avatar>
            <ListItemText primary="BAP-alternative headers (Draft 1)" secondary="Aug 9, 2018" />
            <ListItemSecondaryAction>
                <Tooltip title="Download Sketch file">
                    <IconButton aria-label="Download">
                        <a href={doc_HeaderAlternatives} download={"BAP-header-alternatives"}><ExportIcon /></a>
                    </IconButton>
                </Tooltip>



                <Tooltip title="View PDF">
                    <IconButton aria-label="View" >
                      <a href={doc_HeaderAlternatives} target="_blank" rel="noopener noreferrer" ><OpenIcon /></a>
                    </IconButton>
                 </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <Avatar>
              <SketchIcon />
            </Avatar>
            <ListItemText primary="BAP-SCT visualizations (Draft 2)" secondary="Jul 28, 2018" />
            <ListItemSecondaryAction>
                <Tooltip title="Download Sketch file">
                    <IconButton aria-label="Download">
                        <a href={doc_SCTSketches} download={"SCT visualizations"}><ExportIcon /></a>
                    </IconButton>
                </Tooltip>

                <Tooltip title="View PDF">
                    <IconButton aria-label="View">
                      <a href={doc_SCTSketches} target="_blank" rel="noopener noreferrer"><OpenIcon /></a>
                    </IconButton>
                  </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>

          <ListItem>
            <Avatar>
              <PrincipleIcon />
            </Avatar>
            <ListItemText primary="BAP-Interactive workflow (Draft 1)" secondary="July 20, 2018" />
            <ListItemSecondaryAction>
                <Tooltip title="Download Principle file">
                    <IconButton aria-label="Download">
                        <a href={doc_SCTSketches}  download={"SCT visualizations"}><ExportIcon /></a>
                    </IconButton>
                </Tooltip>

                <IconButton disabled />
            </ListItemSecondaryAction>
          </ListItem>

        </List>

      </div>
    );
  }
}

DownloadList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DownloadList);
