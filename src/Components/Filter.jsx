import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SvgIcon from "@material-ui/core/SvgIcon";
import Grid from '@material-ui/core/Grid';


function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </SvgIcon>
  );
}

const toolbarStyles = theme => ({
  search: {
    marginLeft: "0%",
    minWidth: "225px"
  }
});

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
  }

  handleChangeSearch = event => {
    let queryName = event.target.value;
    this.setState({ filter: queryName });
    this.props.onSearchCalled(queryName);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="pokedexFilter"
              label="Buscar Pokédex"
              type="search"
              hintText="Filter"
              floatingLabelText="Filter"
              value={this.state.filter}
              onChange={this.handleChangeSearch}
              floatingLabelFixed
            />
          </Grid>
        </Grid>
      </div>
    );

  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearchCalled: PropTypes.func
};

export default withStyles(toolbarStyles)(Filter);