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

class PokemonType {
  constructor(typeName, icon, color, bgColor) {
    this.typeName = typeName;
    this.icon = icon;
    this.color = color;
    this.bgColor = bgColor;
  }

  getInfo() {
    return {
      icon: this.icon,
      text: this.typeName,
      color: this.color,
      bgColor: this.bgColor,
    };
  }
}

class BugType extends PokemonType {
  constructor() {
    super("BUG", <BugIcon />, "rgb(146,188,44)", "rgb(146,188,44, 0.7)");
  }
}

class DarkType extends PokemonType {
  constructor() {
    super("DARK", <DarkIcon />, "rgb(89,87,97)", "rgb(89,87,97, 0.7)");
  }
}

class DragonType extends PokemonType {
  constructor() {
    super("DRAGON", <DragonIcon />, "rgb(12,105,200)", "rgb(12,105,200, 0.7)");
  }
}

class ElectricType extends PokemonType {
  constructor() {
    super("ELECTRIC", <ElectricIcon />, "rgb(242,217,78)", "rgb(242,217,78)");
  }
}

class FairyType extends PokemonType {
  constructor() {
    super("FAIRY", <FairyIcon />, "rgb(238,144,230)", "rgb(238,144,230,0.7)");
  }
}

class FightingType extends PokemonType {
  constructor() {
    super(
      "FIGHTING",
      <FightingIcon />,
      "rgb(211,66,95,1.00)",
      "rgb(211,66,95,0.7)"
    );
  }
}

class FireType extends PokemonType {
  constructor() {
    super("FIRE", <FireIcon />, "rgb(251,165,76,1.00)", "rgb(251,165,76,0.7)");
  }
}

class FlyingType extends PokemonType {
  constructor() {
    super(
      "FLYING",
      <FlyingIcon />,
      "rgb(161,187,236,1.00)",
      "rgb(161,187,236,0.7)"
    );
  }
}

class GhostType extends PokemonType {
  constructor() {
    super("GHOST", <GhostIcon />, "rgb(95,109,188)", "rgb(95,109,188)");
  }
}

class GrassType extends PokemonType {
  constructor() {
    super("GRASS", <GrassIcon />, "rgb(95,189,88)", "rgb(95,189,88,0.7)");
  }
}

class GroundType extends PokemonType {
  constructor() {
    super("GROUND", <GroundIcon />, "rgb(218,124,77)", "rgb(218,124,77,0.7)");
  }
}

class IceType extends PokemonType {
  constructor() {
    super("ICE", <IceIcon />, "rgb(117,208,193)", "rgb(117,208,193,0.7)");
  }
}

class NormalType extends PokemonType {
  constructor() {
    super("NORMAL", <NormalIcon />, "rgb(160,162,159)", "rgb(160,162,159,0.7)");
  }
}

class PoisonType extends PokemonType {
  constructor() {
    super("POISON", <PoisonIcon />, "rgb(183,99,207)", "rgb(183,99,207,0.7)");
  }
}

class PsychicType extends PokemonType {
  constructor() {
    super(
      "PSYCHIC",
      <PsychicIcon />,
      "rgb(250,133,129)",
      "rgb(250,133,129,0.7)"
    );
  }
}

class RockType extends PokemonType {
  constructor() {
    super("ROCK", <RockIcon />, "rgb(201,187,138)", "rgb(201,187,138,0.7)");
  }
}

class SteelType extends PokemonType {
  constructor() {
    super("STEEL", <SteelIcon />, "rgb(86,149,163)", "rgb(86,149,163,0.7)");
  }
}

class WaterType extends PokemonType {
  constructor() {
    super("WATER", <WaterIcon />, "rgb(83,157,223)", "rgb(83,157,223,0.7)");
  }
}

function getTypeInfo(pokeType) {
  let typeInstance;
  switch (pokeType) {
    case "bug":
      typeInstance = new BugType();
      break;
    case "dark":
      typeInstance = new DarkType();
      break;
    case "dragon":
      typeInstance = new DragonType();
      break;
    case "electric":
      typeInstance = new ElectricType();
      break;
    case "fairy":
      typeInstance = new FairyType();
      break;
    case "fighting":
      typeInstance = new FightingType();
      break;
    case "fire":
      typeInstance = new FireType();
      break;
    case "flying":
      typeInstance = new FlyingType();
      break;
    case "ghost":
      typeInstance = new GhostType();
      break;
    case "grass":
      typeInstance = new GrassType();
      break;
    case "ground":
      typeInstance = new GroundType();
      break;
    case "ice":
      typeInstance = new IceType();
      break;
    case "normal":
      typeInstance = new NormalType();
      break;
    case "poison":
      typeInstance = new PoisonType();
      break;
    case "psychic":
      typeInstance = new PsychicType();
      break;
    case "rock":
      typeInstance = new RockType();
      break;
    case "steel":
      typeInstance = new SteelType();
      break;
    case "water":
      typeInstance = new WaterType();
      break;
    default:
      typeInstance = new PokemonType("", "", "", "");
  }
  return typeInstance.getInfo();
}

export const useGetPokeIconOOP = (pokeType) => {
  return getTypeInfo(pokeType);
};
