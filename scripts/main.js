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

//Function to Clear AllInputs values
function ClearInputs(){
    let inputs = document.querySelectorAll(".form-control");
    inputs.forEach(o => {
        o.value = "";
    });
}


function BeautifulAlerts(deleteIndex){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,   
      })
      .then((willDelete) => {
        if (willDelete) {
            HumanDbo.splice(deleteIndex,1);
            ResetView();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}