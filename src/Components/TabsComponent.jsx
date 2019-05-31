import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PokedexForm from './PokedexForm';
import TitlebarGridList from './TitlebarGridList';
import Filter from './Filter';
import RecipeReviewCard from './RecipeReviewCard';

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

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { conteiner } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Crear Pokédex" />
            <Tab label="Lista de Pokédex" />
            <Tab label="Review" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><PokedexForm /></TabContainer>}
        {value === 1 && <TabContainer><Filter /><TitlebarGridList /> </TabContainer>}
        {value === 2 && <TabContainer><RecipeReviewCard /></TabContainer>}
      </div>
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsComponent);