import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ButtonDialog from './ButtonDialog';
import Filter from './Filter';

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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: '80%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class TitlebarGridList extends React.Component {
  state = {
    filter: "",
  };

  handleChangeFilter = newFilter => {
    this.setState({ filter: newFilter });
  }

  render() {
    const { classes } = this.props;
    const { filter, rowsPerPage, page } = this.state;
    const lowercasedQuery = filter.toString().toLowerCase();
    const filteredData = dataPokedex.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(lowercasedQuery)
      );
    });
    return (
      <div>
        <Filter onSearchCalled={this.handleChangeFilter}/>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Pokédex</ListSubheader>
          </GridListTile>
          {filteredData.map(data => (
            <GridListTile key={data.img}>
              <img src={data.img} alt={data.name} />
              <GridListTileBar
                title={data.name}
                subtitle={
                  <span>Type: {data.type.type1}{data.type.type2}</span>
                }
                actionIcon={
                  <ButtonDialog dataPokedex={data}/>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      </div>
    );
  }
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);