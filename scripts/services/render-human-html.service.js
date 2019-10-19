class RenderHumanHtmlService {
    getHumanHtml(humanObj){
        return `<div class="card" style="width: 18rem;">
                <img class="cross" src="https://bit.ly/2yzXFFC" alt="" 
                    onclick="deleteCurrentUser(${humanObj.ID})">
                <img src="${humanObj.ImageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${humanObj.Name}</h5>
                    <p class="card-text">${humanObj.Text}</p>
                    <a href="${humanObj.link}" class="btn btn-primary">FB Page</a>
                </div>
            </div>`
    }

    renderHumanInArea(renderArea,humanObj) {
        renderArea.innerHTML += this.getHumanHtml(humanObj);
    }
}