//singleton class wich instance creates only once
class HumansCollectionService {
    constructor() {
        if (!!HumansCollectionService.instance) {
            return HumansCollectionService.instance;
        }

        HumansCollectionService.instance = this;

        //create class fields
        this.HumansCollection = this.getHumansCollectionFromLocalStorage();
        this.HelperMethods = new HelperMethodService();
        this.HumansCollection = new Array();

        return this;
    }


    saveHuman(humanObj){
        this.HumansCollection.push(humanObj);
        this.saveHumansCollectionInLocalStorage();
    }

    removeHuman(id){
        let humanInex = this.HelperMethods.idexOfElement(this.HumansCollection, (o)=> o.ID == id);
        this.HumansCollection.splice(humanInex,1);
        this.saveHumansCollectionInLocalStorage();
    }

    getHumans() {
        return this.HumansCollection;
    }

    //calls after saving and deleting human object
    saveHumansCollectionInLocalStorage() {
        localStorage["HumansCollection"] = JSON.stringify(this.HumansCollection);
    }

    getHumansCollectionFromLocalStorage() {
        try {
            return JSON.parse(localStorage["HumansCollection"]);
        } catch(arr) {
            new Array();
        }
    }
}