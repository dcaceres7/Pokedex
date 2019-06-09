import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PokedexForm from './PokedexForm';
import TitlebarGridList from './TitlebarGridList';
import Button from '@material-ui/core/Button';
import Auth0 from '../Auth0';
const auth = new Auth0();

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  logout = () => {
    auth.logout();
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { conteiner } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Lista de Pokédex" />
            <Tab label="Crear Pokédex" />
            <Button variant="contained" color="primary" onClick = { this.logout }>
              Logout
            </Button>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><TitlebarGridList /></TabContainer>}
        {value === 1 && <TabContainer><PokedexForm /></TabContainer>}
      </div>
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsComponent);