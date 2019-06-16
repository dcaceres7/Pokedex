import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
      minWidth: "385px"
  },
});

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  doCreate = event => {
    //push pokemon
    this.handleClose();
    let pokeData = {
      name: this.props.pokeName,
      img: this.props.pokeImg,
      height: this.props.pokeHeight,
      weight: this.props.pokeWeight,
      type: {
        type1: this.props.type1,
        type2: this.props.type2
      },
      gender: this.props.gender,
      catchRate: this.props.catchRate
    }
    this.props.onDone(pokeData);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Crear
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.paper }}
        >
          <form
            onSubmit={this.doCreate}
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Name: {this.props.pokeName},
                <br />
                Height: {this.props.pokeHeight},
                <br />
                Weight: {this.props.pokeWeight},
                <br />
                type1: {this.props.type1},
                <br />
                type2: {this.props.type2},
                <br />
                gender: {this.props.gender},
                <br />
                catchRate: {this.props.catchRate}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="secondary">
                Cancelar
              </Button>
              <Button type="submit" color="primary" >
                Crear
                </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  pokeName: PropTypes.string.isRequired,
  pokeImg: PropTypes.string.isRequired,
  pokeHeight: PropTypes.string.isRequired,
  pokeWeight: PropTypes.string.isRequired,
  onDone: PropTypes.func.isRequired
};

export default withStyles(styles)(AlertDialog);