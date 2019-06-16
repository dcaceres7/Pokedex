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
        this.state = { name: '', img: '', height: '', weight: '', gender: '', catchRate: '', type1: '', type2: '' };
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
                    <Grid item>
                        <TextField
                            id="pokemonType1"
                            label="Pokémon Type 1"
                            className={classes.textField}
                            value={this.state.type1}
                            onChange={(e) => this.handleChange(e, 'type1')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="pokemonType2"
                            label="Pokémon Type 2"
                            className={classes.textField}
                            value={this.state.type2}
                            onChange={(e) => this.handleChange(e, 'type2')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="pokemonGender"
                            label="Pokémon Gender"
                            className={classes.textField}
                            value={this.state.gender}
                            onChange={(e) => this.handleChange(e, 'gender')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="pokemonCatchRate"
                            label="Pokémon CatchRate"
                            className={classes.textField}
                            value={this.state.catchRate}
                            onChange={(e) => this.handleChange(e, 'catchRate')}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <AlertDialog onDone={(pokeData) => {
                    this.setState({ name: '', img: '', height: '', weight: '', gender: '', catchRate: '', type1: '', type2: '' });
                    this.props.onCreateDone(pokeData);
                }}
                    pokeName={this.state.name} pokeImg={this.state.img} pokeHeight={this.state.height}
                    pokeWeight={this.state.weight} type1={this.state.type1}
                    type2={this.state.type2} gender={this.state.gender}
                    catchRate={this.state.catchRate}
                />
            </div >
        );
    }
}

PokedexForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onCreateDone: PropTypes.func.isRequired
};

export default withStyles(styles)(PokedexForm);