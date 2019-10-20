class ViewControllerService {

    constructor(){
        //services
        this.humanHtmlRenderer = new RenderHumanHtmlService();
        this.humanCollectionController = new HumansCollectionService();
        this.alertService = new SweetAlertService(); 
        this.validationService = new InputValidationService();


        this.PersonsArea = this.getPersonsAreaHtmlElement();
        this.RegisterHumanButton = this.getRegisterHumanHtmlElement();
        this.renderAllHumansInArea();
        this.addListenerToRegisterBtn();
        this.addEventOnInputsClick();
    }

    addEventOnInputsClick(){
        this.validationService.addEventOnInputsClick(".check-inp");
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
            if(!self.validationService.checkInputsValidation(".check-inp")){
                self.alertService.getErrorMessage();
                return;
            }
            
            let tmp = self.createHumanObjectFromInputValues();
            self.humanCollectionController.saveHuman(tmp);
            self.humanHtmlRenderer.renderHumanInArea(self.PersonsArea,tmp);
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
        const allHumans = this.humanCollectionController.getHumans();
        allHumans.forEach(o => {
            self.humanHtmlRenderer.renderHumanInArea(self.PersonsArea,o);
        });
    }


    cleanAllInputsAfterSubmitting(){
        let inputs = document.querySelectorAll(".check-inp");
        inputs.forEach(o => {
            o.value = "";
        });
    }
}