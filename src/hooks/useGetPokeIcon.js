import BugIcon from "../assets/images/icons/BugIcon";
import DarkIcon from "../assets/images/icons/DarkIcon";
import DragonIcon from "../assets/images/icons/DragonIcon";
import ElectricIcon from "../assets/images/icons/ElectricIcon";
import FairyIcon from "../assets/images/icons/FairyIcon";
import FightingIcon from "../assets/images/icons/FightingIcon";
import FireIcon from "../assets/images/icons/FireIcon";
import FlyingIcon from "../assets/images/icons/FlyingIcon";
import GhostIcon from "../assets/images/icons/GhostIcon";
import GrassIcon from "../assets/images/icons/GrassIcon";
import GroundIcon from "../assets/images/icons/GroundIcon";
import IceIcon from "../assets/images/icons/IceIcon";
import NormalIcon from "../assets/images/icons/NormalIcon";
import PoisonIcon from "../assets/images/icons/PoisonIcon";
import PsychicIcon from "../assets/images/icons/PsychicIcon";
import RockIcon from "../assets/images/icons/RockIcon";
import SteelIcon from "../assets/images/icons/SteelIcon";
import WaterIcon from "../assets/images/icons/WaterIcon";

export const POKE_ICON_BY_TYPE = {
  //POKE_ICON_BY_TYPE[pokeType].icon
  bug: {
    icon: <BugIcon />,
    text: "BUG",
    color: "rgb(146,188,44)",
    bgColor: "rgb(146,188,44, 0.7)",
  },
  dark: {
    icon: <DarkIcon />,
    text: "DARK",
    color: "rgb(89,87,97)",
    bgColor: "rgb(89,87,97, 0.7)",
  },
  dragon: {
    icon: <DragonIcon />,
    text: "DRAGON",
    color: "rgb(12,105,200)",
    bgColor: "rgb(12,105,200, 0.7)",
  },
  electric: {
    icon: <ElectricIcon />,
    text: "ELECTRIC",
    color: "rgb(242,217,78)",
    bgColor: "rgb(242,217,78)",
  },
  fairy: {
    icon: <FairyIcon />,
    text: "FAIRY",
    color: "rgb(238,144,230)",
    bgColor: "rgb(238,144,230,0.7)",
  },
  fighting: {
    icon: <FightingIcon />,
    text: "FIGHTING",
    color: "rgb(211,66,95,1.00)",
    bgColor: "rgb(211,66,95,0.7)",
  },
  fire: {
    icon: <FireIcon />,
    text: "FIRE",
    color: "rgb(251,165,76,1.00)",
    bgColor: "rgb(251,165,76,0.7)",
  },
  flying: {
    icon: <FlyingIcon />,
    text: "FLYING",
    color: " rgb(161,187,236,1.00)",
    bgColor: " rgb(161,187,236,0.7)",
  },
  ghost: {
    icon: <GhostIcon />,
    text: "GHOST",
    color: "rgb(95,109,188)",
    bgColor: "rgb(95,109,188)",
  },
  grass: {
    icon: <GrassIcon />,
    text: "GRASS",
    color: "rgb(95,189,88)",
    bgColor: "rgb(95,189,88,0.7)",
  },
  ground: {
    icon: <GroundIcon />,
    text: "GROUND",
    color: "rgb(218,124,77)",
    bgColor: "rgb(218,124,77,0.7)",
  },
  ice: {
    icon: <IceIcon />,
    text: "ICE",
    color: "rgb(117,208,193)",
    bgColor: "rgb(117,208,193,0.7)",
  },
  normal: {
    icon: <NormalIcon />,
    text: "NORMAL",
    color: " rgb(160,162,159)",
    bgColor: " rgb(160,162,159,0.7)",
  },
  poison: {
    icon: <PoisonIcon />,
    text: "POISON",
    color: "rgb(183,99,207)",
    bgColor: "rgb(183,99,207,0.7)",
  },
  psychic: {
    icon: <PsychicIcon />,
    text: "PSYCHIC",
    color: "rgb(250,133,129)",
    bgColor: "rgb(250,133,129,0.7)",
  },
  rock: {
    icon: <RockIcon />,
    text: "ROCK",
    color: "rgb(201,187,138)",
    bgColor: "rgb(201,187,138,0.7)",
  },
  steel: {
    icon: <SteelIcon />,
    text: "STEEL",
    color: "#rgb(86,149,163)",
    bgColor: "rgb(86,149,163,0.7)",
  },
  water: {
    icon: <WaterIcon />,
    text: "WATER",
    color: "rgb(83,157,223)",
    bgColor: "rgb(83,157,223,0.7)",
  },
};
const useGetPokeIcon = (pokeType) => {
  return POKE_ICON_BY_TYPE[pokeType];
  /* switch (pokeType) {
    case "bug":
      return {
        icon: <BugIcon />,
        text: "BUG",
        color: "rgb(146,188,44)",
        bgColor: "rgb(146,188,44, 0.7)",
      };
    case "dark":
      return {
        icon: <DarkIcon />,
        text: "DARK",
        color: "rgb(89,87,97)",
        bgColor: "rgb(89,87,97, 0.7)",
      };
    case "dragon":
      return {
        icon: <DragonIcon />,
        text: "DRAGON",
        color: "rgb(12,105,200)",
        bgColor: "rgb(12,105,200, 0.7)",
      };
    case "electric":
      return {
        icon: <ElectricIcon />,
        text: "ELECTRIC",
        color: "rgb(242,217,78)",
        bgColor: "rgb(242,217,78)",
      };
    case "fairy":
      return {
        icon: <FairyIcon />,
        text: "FAIRY",
        color: "rgb(238,144,230)",
        bgColor: "rgb(238,144,230,0.7)",
      };
    case "fighting":
      return {
        icon: <FightingIcon />,
        text: "FIGHTING",
        color: "rgb(211,66,95,1.00)",
        bgColor: "rgb(211,66,95,0.7)",
      };
    case "fire":
      return {
        icon: <FireIcon />,
        text: "FIRE",
        color: "rgb(251,165,76,1.00)",
        bgColor: "rgb(251,165,76,0.7)",
      };
    case "flying":
      return {
        icon: <FlyingIcon />,
        text: "FLYING",
        color: " rgb(161,187,236,1.00)",
        bgColor: " rgb(161,187,236,0.7)",
      };
    case "ghost":
      return {
        icon: <GhostIcon />,
        text: "GHOST",
        color: "rgb(95,109,188)",
        bgColor: "rgb(95,109,188)",
      };
    case "grass":
      return {
        icon: <GrassIcon />,
        text: "GRASS",
        color: "rgb(95,189,88)",
        bgColor: "rgb(95,189,88,0.7)",
      };
    case "ground":
      return {
        icon: <GroundIcon />,
        text: "GROUND",
        color: "rgb(218,124,77)",
        bgColor: "rgb(218,124,77,0.7)",
      };
    case "ice":
      return {
        icon: <IceIcon />,
        text: "ICE",
        color: "rgb(117,208,193)",
        bgColor: "rgb(117,208,193,0.7)",
      };
    case "normal":
      return {
        icon: <NormalIcon />,
        text: "NORMAL",
        color: " rgb(160,162,159)",
        bgColor: " rgb(160,162,159,0.7)",
      };
    case "poison":
      return {
        icon: <PoisonIcon />,
        text: "POISON",
        color: "rgb(183,99,207)",
        bgColor: "rgb(183,99,207,0.7)",
      };
    case "psychic":
      return {
        icon: <PsychicIcon />,
        text: "PSYCHIC",
        color: "rgb(250,133,129)",
        bgColor: "rgb(250,133,129,0.7)",
      };
    case "rock":
      return {
        icon: <RockIcon />,
        text: "ROCK",
        color: "rgb(201,187,138)",
        bgColor: "rgb(201,187,138,0.7)",
      };
    case "steel":
      return {
        icon: <SteelIcon />,
        text: "STEEL",
        color: "#rgb(86,149,163)",
        bgColor: "rgb(86,149,163,0.7)",
      };
    case "water":
      return {
        icon: <WaterIcon />,
        text: "WATER",
        color: "rgb(83,157,223)",
        bgColor: "rgb(83,157,223,0.7)",
      };
    default:
      return <></>; */
  //}
};

export default useGetPokeIcon;
