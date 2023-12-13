let instance;
let storageSingelton = {
  edited: [],
  deleted: [],
  tableList: [],
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
    if (storageSingelton[propertyName]) return storageSingelton[propertyName];
    else console.log("No value yet!");
  }

  setPropertyByName(propertyName, propertyValue) {
    storageSingelton[propertyName] = propertyValue || [];
  }

  setEdited(propertyValue) {
    const current = storageSingelton["edited"].filter(
      (item) => item.id !== propertyValue.id
    );
    storageSingelton["edited"] = [...current, propertyValue];
    localStorage.setItem("edited", JSON.stringify(storageSingelton["edited"]));
  }

  setDeleted(propertyValue) {
    storageSingelton["deleted"].push(propertyValue);
    localStorage.setItem(
      "deleted",
      JSON.stringify(storageSingelton["deleted"])
    );
  }

  setTableList(propertyValue) {
    const current = storageSingelton["tableList"].filter(
      (item) => item.id !== propertyValue.id
    );
    storageSingelton["tableList"] = [...current, propertyValue];
  }
}

let storageSingletonInstance = Object.freeze(new StorageSingleton()); //this makes the StorageSingleton class immutable

export default storageSingletonInstance; //returns the same instance throughout the application

//3 ian
//1. switch butto- change between views: -1 list of cards -2 a table, wher the colums are the name the experiance and ability
// the table should be a groupd one, and grup by the type of pokemon
// - the colum name and ability should be editable, by default as text, but if u click a text input will show, prefield with the current vlue
//and if the input is blurred we switch back to the text view with the new value
//2. on the table viuw instead of infinity scroll, use pagination. the total numers of pageis is the number of total items devided by the items per each page
//by default 20 items/page, impelemet: calculate the number of items / view, down to a minimum of 5 for the table
//
//also testing for all new feater
//3. make the app mobile responsive
// make PR
