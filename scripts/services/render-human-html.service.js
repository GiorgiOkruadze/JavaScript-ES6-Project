class RenderHumanHtmlService {
    getHumanHtml(humanObj){
        return `<div class="card" style="width: 18rem;">
                    <i class="far fa-envelope"
                        onclick="RenderHumanHtmlService.sentMessageToUser(${humanObj.ID})"></i>
                    <i class="fas fa-times"
                        onclick="RenderHumanHtmlService.deleteCurrentUser(${humanObj.ID})"></i>
                    <img src="${humanObj.ImageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${humanObj.Name}</h5>
                        <p class="card-text">${humanObj.Text}</p>
                        <a href="${humanObj.link}" class="btn btn-primary">FB Page</a>
                    </div>
                </div>`
    }

    static deleteCurrentUser(id) {
        const humanCollectionController = new HumansCollectionService();
        humanCollectionController.removeHuman(id);
        const allHumans = humanCollectionController.getHumans();
        const HumansArea = document.querySelector(".persons-boxes");
        HumansArea.innerHTML = "";
        allHumans.forEach(o => {
            this.renderHumanInArea(HumansArea,o);
        });
    }

    static sentMessageToUser(id){
        console.log(id);
    }

    renderHumanInArea(renderArea,humanObj) {
        renderArea.innerHTML += this.getHumanHtml(humanObj);
    }
}