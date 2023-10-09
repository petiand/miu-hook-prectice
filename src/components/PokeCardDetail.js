import {Popover, Card, Typography, Link, Modal} from "@mui/material"

export default function PokeCardDetail({pokemon, anchorEl, handleClose,id, open}) {

    return (
    <Modal
        sx={{ backdropFilter: "blur(3px)"}}
        open={open}
        onClick={handleClose}
    >
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        >
        <Card sx={{bgcolor:"#F7EF99"}}>
            <Typography sx={{ p: 2 }}>
                Base Experience: {pokemon.base_experience}
            </Typography>
            <Typography sx={{ p: 2 }}>
                Held Items: {pokemon.held_items[0] ? pokemon.held_items[0]?.item.name : "no held items"}
            </Typography>
            <Typography sx={{ p: 2 }}>
                More Abilities: {pokemon.abilities[1] ? pokemon.abilities[1].ability.name : "no more abilities"} {pokemon.abilities[2] && "," + pokemon.abilities[2].ability.name}
            </Typography>
            <Typography sx={{ p: 2 }}>
                Forms: {pokemon.forms[0].name}
            </Typography>
            <Typography sx={{ p: 2 }}>
                More info about the species click the link: <Link href={pokemon.species.url}>click me</Link>
            </Typography>
        </Card>
      </Popover>
      </Modal>
)}