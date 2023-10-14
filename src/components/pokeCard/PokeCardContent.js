import { CardContent, Typography } from "@mui/material";

export default function PokeCardContent ({pokemon}) {
    return (
                <CardContent 
                    sx={{textAlign:"center"}}
                >
                    <Typography 
                        variant="h5"
                    >
                        {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}
                    </Typography>
                    <Typography>
                        Type: {pokemon.types[0].type.name}
                    </Typography> 
                    <Typography>
                        Base Ability: {pokemon.abilities[0].ability.name} 
                    </Typography> 
                    <Typography>
                        Hight: {pokemon.height}m Weight: {pokemon.weight}kg
                    </Typography>
                </CardContent>
    )
}