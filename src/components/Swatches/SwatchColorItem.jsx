import React from 'react';
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '../Snackbar/Snackbar.jsx';


class SwatchColorItem extends React.Component {

    state = {
      open: false,
      copied: false,
      value: '',
    };

    handleClose = (event, reason) => {
        this.setState({ open: false });
    };


    handleClick = () => {
        this.setState({ open: true });
    };

    render() {


        return (
        <li className={this.props.colorClass} >

            <Snackbar open={this.state.open} message={"Color copied to the clipboard"}
            color={"primary"} icon={InfoIcon}
            handleClose={this.handleClose}/>

            <CopyToClipboard
                text={this.props.colorLabel}
                onCopy={() => this.setState({ copied: true,}) } >
                <div onClick={this.handleClick}>
                    <span class="colors__swatch"></span>
                    <span class="colors__label"> </span>
               </div>
             </CopyToClipboard>
        </li>
        );
    }
}



SwatchColorItem.propTypes = {
    colorLabel: PropTypes.string,
};

export default SwatchColorItem;
