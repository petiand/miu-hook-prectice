let instance;
let storageSingelton = {
  edited: [],
  deleted: [],
};

class StorageSingleton {
  constructor() {
    if (instance) {
      console.log("Instance already exists.");
      return;
    }

    instance = this; //only assign the instance if it is not assigned yet
  }

  getPropertyByName(propertyName) {
    return storageSingelton[propertyName];
  }

  setPropertyValue(propertyName, propertyValue) {
    storageSingelton[propertyName] = propertyValue;
  }
}

let storageSingletonInstance = Object.freeze(new StorageSingleton()); //this makes the StorageSingleton class immutable

export default storageSingletonInstance; //returns the same instance throughout the application
