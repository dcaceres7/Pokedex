import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

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
  };

  render() {
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
        >
          <form
            onSubmit={this.doCreate}
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Render info ingresada del pokedex
            </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="secondary">
                Cancelar
              </Button>
              <Button type="submit" color="primary">
                Crear
                </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;