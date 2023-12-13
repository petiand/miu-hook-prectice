import { useEffect } from "react";
import storageSingletonInstance from "../services/singleton";

const useInitializeStorage = () => {
  useEffect(() => {
    storageSingletonInstance.setPropertyByName(
      "edited",
      JSON.parse(localStorage.getItem("edited"))
    );
    storageSingletonInstance.setPropertyByName(
      "deleted",
      JSON.parse(localStorage.getItem("deleted"))
    );
  }, []);
};

export default useInitializeStorage;
