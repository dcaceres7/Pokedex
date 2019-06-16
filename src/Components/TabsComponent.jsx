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
    dataPokedex: [],
  };

  componentDidMount(){
    this.setState({dataPokedex: dataPokedex});
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  logout = () => {
    auth.logout();
  };

  onCreatePokemonDone = (pokeData) => {
    let {dataPokedex} = this.state;
    dataPokedex.push(pokeData);
    this.setState({dataPokedex, value: 0});
  }

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
        {value === 0 && <TabContainer><TitlebarGridList  dataPokedex = {this.state.dataPokedex}/></TabContainer>}
        {value === 1 && <TabContainer><PokedexForm onCreateDone={(pokeData) => this.onCreatePokemonDone(pokeData)}/></TabContainer>}
      </div>
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const dataPokedex = [
  {
    img: 'https://i.pinimg.com/564x/6b/e2/46/6be246121be8548270ca52a4dd8d5549.jpg',
    name: 'Togepi',
    type: {
      type1:'Hada',
      type2: ''
    },
    height:'0.3 m',
    weight:'1.5 kg',
    gender:'male',
    catchRate: 190
  },
  {
    img: 'https://i.pinimg.com/564x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5.jpg',
    name: 'Pikachu',
    type: {
      type1:'Eléctrico',
      type2: ''
    },
    height:'0.4 m',
    weight:'6.0 kg',
    gender:'male',
    catchRate: 190
  },
  {
    img: 'https://i.pinimg.com/564x/f4/89/dd/f489dd69985595edd68947d4415241e1.jpg',
    name: 'Charmander',
    type: {
      type1:'Fuego',
      type2: ''
    },
    height:'0.6 m',
    weight:'8.5 kg',
    gender:'male',
    catchRate: 45
  },
  {
    img: 'https://i.pinimg.com/564x/7b/9d/df/7b9ddf692c6df64d86bbe4e96ef46a83.jpg',
    name: 'Squirtle',
    type: {
      type1:'Agua',
      type2: ''
    },
    height:'0.5 m',
    weight:'9.0 kg',
    gender:'male',
    catchRate: 45
  },
  {
    img: 'https://i.pinimg.com/564x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg',
    name: 'Bulbasaur',
    type: {
      type1:'Planta',
      type2: ' Veneno'
    },
    height:'0.7 m',
    weight:'6.9 kg',
    gender:'male',
    catchRate: 45
  }
];


export default withStyles(styles)(TabsComponent);