import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ButtonDialog from './ButtonDialog';
import Filter from './Filter';


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
    const filteredData = this.props.dataPokedex.filter(item => {
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
  dataPokedex: PropTypes.array.isRequired
};

export default withStyles(styles)(TitlebarGridList);