class InputValidationService {
    constructor(){
        this.addEventOnInputsClick();
    }

    checkInputsValidation(inputSelector) {
        var inputsAreValid = true;
        var inputs = document.querySelectorAll(inputSelector);
        for(var i = 0; i < inputs.length; i++)
        {
            if(!this.checkSngleInput(inputs[i])) {
                inputsAreValid = false;
            }
        }

        return inputsAreValid;
    }

    checkSngleInput(inp) {
        if(inp.value.length > 2 && inp.value != null)
            return true;
        
        this.addRedBorderToInputs(inp);
        return false;
    }


    addRedBorderToInputs(inp){
        inp.style.border = "1px solid rgb(200,0,0)";
    }

    addDefaultBorder(inp){
        inp.style.border = "1px solid rgb(222,222,222)";
    }

    addEventOnInputsClick(selector) {
        const self = this;
        var inputs = document.querySelectorAll(inputSelector);
        inputs.forEach(o => {
            o.addEventOnInputsClick("click",function(){
                self.addDefaultBorder(this);
            })
        })
    }
}