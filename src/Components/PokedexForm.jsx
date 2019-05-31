import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import AlertDialog from "./AlertDialog";

const styles = {
    textField: {
        marginLeft: "15px",
        marginRight: "15px",
        width: "200",
    }
}

class PokedexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', img: '', height: '', weight: '', gender: '', catchRate: '' };
    }

    handleChange = (event, prop) => {
        this.setState({ [prop]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <TextField
                            id="pokemonName"
                            label="Pokémon Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="pokemonImg"
                            label="Image Pokémon URL"
                            className={classes.textField}
                            value={this.state.img}
                            onChange={(e) => this.handleChange(e, 'img')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                        <TextField
                            id="pokemonHeight"
                            label="Pokémon Height"
                            className={classes.textField}
                            value={this.state.height}
                            onChange={(e) => this.handleChange(e, 'height')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="pokemonWeight"
                            label="Pokémon Weight"
                            className={classes.textField}
                            value={this.state.weight}
                            onChange={(e) => this.handleChange(e, 'weight')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <AlertDialog />
            </div >
        );
    }
}

PokedexForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PokedexForm);