//function to delete human card ad human object from collection
//i know this is govno code 
function deleteCurrentUser(id) {
    const humanCollectionController = new HumansCollectionService();
    humanCollectionController.removeHuman(id);
    const allHumans = humanCollectionController.getHumans();
    const humandHtmlCont = new RenderHumanHtmlService();
    const HumansArea = document.querySelector(".persons-boxes");
    HumansArea.innerHTML = "";
    allHumans.forEach(o => {
        humandHtmlCont.renderHumanInArea(HumansArea,o);
    });
}

function sentMessageToUser(id){
    console.log(id);
}

//Function to Clear AllInputs values
function ClearInputs(){
    let inputs = document.querySelectorAll(".form-control");
    inputs.forEach(o => {
        o.value = "";
    });
}

