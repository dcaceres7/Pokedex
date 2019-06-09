import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        minWidth: "385px"
    },
  });
  
  function ButtonDialog(props) {
    const [open, setOpen] = React.useState(false);
    const { classes, dataPokedex } = props;

    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div>
        <IconButton className={classes.icon} onClick={handleClickOpen}>
            <InfoIcon />
        </IconButton>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: classes.paper }}
      >
        <DialogTitle id="alert-dialog-title">{dataPokedex.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Type: {[dataPokedex.type.type1, dataPokedex.type.type2]}
            <br/>
            Height: {dataPokedex.height}
            <br/>
            Weight: {dataPokedex.weight}
            <br/>
            Gender: {dataPokedex.gender}
            <br/>
            catchRate: {dataPokedex.catchRate}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
  
  ButtonDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dataPokedex: PropTypes.array
  };
  
  export default withStyles(styles)(ButtonDialog);