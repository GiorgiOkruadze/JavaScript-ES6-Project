class ViewControllerService {

    constructor(){
        this.HumanHtmlRenderer = new RenderHumanHtmlService();
        this.HumanCollectionController = new HumansCollectionService();
        this.PersonsArea = this.getPersonsAreaHtmlElement();
        this.RegisterHumanButton = this.getRegisterHumanHtmlElement();
        this.renderAllHumansInArea();
        this.addListenerToRegisterBtn();
    }

    getPersonsAreaHtmlElement() {
        return this.getHtmlElement(".persons-boxes");
    }

    getRegisterHumanHtmlElement() {
        return this.getHtmlElement("#registerHumanBtn");
    }

    getHtmlElement(selector) { return document.querySelector(selector); }
    getHtmlInputElementValue(selector) { return document.querySelector(selector).value; }

    addListenerToRegisterBtn() {
        const self = this;
        console.log(this.RegisterHumanButton);
        this.RegisterHumanButton
        .addEventListener("click",function(){
            let tmp = self.createHumanObjectFromInputValues();
            self.HumanCollectionController.saveHuman(tmp);
            self.HumanHtmlRenderer.renderHumanInArea(self.PersonsArea,tmp);
            self.cleanAllInputsAfterSubmitting();
        })
    }

    createHumanObjectFromInputValues() {
        let imageUrl = this.getHtmlInputElementValue("#image")
        let fullName = this.getHtmlInputElementValue("#fullName");
        let mail = this.getHtmlInputElementValue("#mail");
        let bio = this.getHtmlInputElementValue("#bio");
        let link = this.getHtmlInputElementValue("#link");
        let genderIndex = this.getHtmlInputElementValue(".gender");
        return new Human(fullName,imageUrl,genderIndex,mail,bio,link);
    }


    renderAllHumansInArea() {
        const self = this;
        const allHumans = this.HumanCollectionController.getHumans();
        allHumans.forEach(o => {
            self.HumanHtmlRenderer.renderHumanInArea(self.PersonsArea,o);
        });
    }


    cleanAllInputsAfterSubmitting(){
        let inputs = document.querySelectorAll(".form-control");
        inputs.forEach(o => {
            o.value = "";
        });
    }
}