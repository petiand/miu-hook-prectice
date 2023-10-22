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

const useGetPokeIcon = (pokeType) => {
  switch (pokeType) {
    case "bug":
      return { icon: <BugIcon />, text: "BUG", color: "#92BC2C" };
    case "dark":
      return { icon: <DarkIcon />, text: "DARK", color: "#595761" };
    case "dragon":
      return { icon: <DragonIcon />, text: "DRAGON", color: "#0C69C8" };
    case "electric":
      return { icon: <ElectricIcon />, text: "ELECTRIC", color: "#F2D94E" };
    case "fairy":
      return { icon: <FairyIcon />, text: "FAIRY", color: "#EE90E6" };
    case "fighting":
      return { icon: <FightingIcon />, text: "FIGHTING", color: "#D3425F" };
    case "fire":
      return { icon: <FireIcon />, text: "FIRE", color: "#FBA54C" };
    case "flying":
      return { icon: <FlyingIcon />, text: "FLYING", color: "#A1BBEC" };
    case "ghost":
      return { icon: <GhostIcon />, text: "GHOST", color: "#5F6DBC" };
    case "grass":
      return { icon: <GrassIcon />, text: "GRASS", color: "#5FBD58" };
    case "ground":
      return { icon: <GroundIcon />, text: "GROUND", color: "#DA7C4D" };
    case "ice":
      return { icon: <IceIcon />, text: "ICE", color: "#75D0C1" };
    case "normal":
      return { icon: <NormalIcon />, text: "NORMAL", color: "#A0A29F" };
    case "poison":
      return { icon: <PoisonIcon />, text: "POISON", color: "#B763CF" };
    case "psychic":
      return { icon: <PsychicIcon />, text: "PSYCHIC", color: "#FA8581" };
    case "rock":
      return { icon: <RockIcon />, text: "ROCK", color: "#C9BB8A" };
    case "steel":
      return { icon: <SteelIcon />, text: "STEEL", color: "#5695A3" };
    case "water":
      return { icon: <WaterIcon />, text: "WATER", color: "#539DDF" };
    default:
      return <></>;
  }
};

export default useGetPokeIcon;
