const SaveBtn = document.querySelector(".register");
const Left = document.querySelector(".left");
var HumanDbo = new Array();
var HumanIdCounter = 0;

GetHumansFromLocalStorage();
// -------------------PCL------------------

window.addEventListener('resize',function(){
    Left.style.height = this.outerHeight;
})


//Function to get new created human obj
function CreateHuman(imgUrl,name,text,link) {
    return {
        ID:HumanIdCounter,
        Name:name.value,
        Text:text.value,
        ImageUrl:imgUrl.value,
        FbLink:link.value
    };
}


//Function to add EventListener on Register Human btn
SaveBtn.addEventListener("click",function(){
    HumanIdCounter++;
    let imageInp = document.querySelector("#image");
    let nameInp = document.querySelector("#name");
    let textInp = document.querySelector("#bio");
    let linkInp = document.querySelector("#link");
    let tmp = CreateHuman(imageInp,nameInp,textInp,linkInp);
    // ClearInputs();
    HumanDbo.push(tmp)
    AddNewHumansInView(tmp);
    SaveUsersInLocalStorage();
});



//Function to Clear AllInputs values
function ClearInputs(){
    let inputs = document.querySelectorAll(".form-control");
    inputs.forEach(o => {
        o.value = "";
    });
}


//Function to generate Human CarBoxes on View
function AddNewHumansInView(humanObj){
    var HumansBoxesCont = document.querySelector(".persons-boxes");
    HumansBoxesCont.innerHTML += GetHumansCardHtmlBox(humanObj);
}


function GetHumansCardHtmlBox(humanObj){
    return `<div class="card" style="width: 18rem;">
                <img class="cross" src="https://bit.ly/2yzXFFC" alt="" onclick="deleteCurrentUser(${humanObj.ID})">
                <img src="${humanObj.ImageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${humanObj.Name}</h5>
                    <p class="card-text">${humanObj.Text}</p>
                    <a href="${humanObj.link}" class="btn btn-primary">FB Page</a>
                </div>
            </div>`
}


function deleteCurrentUser(userId){
    // var humanToDelete = (HumanDbo.filter(o => o.ID == userId))[0];
    let deleteIndex = IndexOf(userId);
    BeautifulAlerts(deleteIndex);
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


//Function to find element index in collection
function IndexOf(id){
    for(var i = 0; i < HumanDbo.length; i++)
    {
        if(HumanDbo[i].ID == id){
            return i;
        }
    }
    return -1;
}


//Reset View
function ResetView(){
    var HumansBoxesCont = document.querySelector(".persons-boxes");
    HumansBoxesCont.innerHTML = "";
    HumanDbo.forEach(o => {
        HumansBoxesCont.innerHTML += GetHumansCardHtmlBox(o);
    })
    SaveUsersInLocalStorage();
}

//Function to save Humans in Local Storage (Brower History)
function SaveUsersInLocalStorage(){
    var DboString = JSON.stringify(HumanDbo);
    localStorage["DboArray"]=DboString;
}

//To Get All Humans From Brower History
function GetHumansFromLocalStorage(){
    try{
        DboString = localStorage["DboArray"];
        HumanDbo = JSON.parse(DboString);
        ResetView();
    }catch(arr){}  
}



// https://gist.github.com/DanDiplo/30528387da41332ff22b