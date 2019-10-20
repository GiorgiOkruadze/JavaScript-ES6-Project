class CollectionFilterService
{
    getOnlyFemales(collection){
        return this.collection.filter(o => o.Gender.GenderCode == 0);
    }

    getOnlyMales(collection){
        return this.collection.filter(o => o.Gender.GenderCode == 1);
    }

    filterByProperty(humanCardsCollection,filterSelector,name) {
        const self = this;
        humanCardsCollection.forEach(o => {
            let elementName = o.querySelector(filterSelector);
            if(elementName.textContent.search(name) == -1)
                self.hideHumanCard(o);
            else 
                self.showHumanCard(o);
        });
    }

    hideHumanCard(element){
        element.style.display = "none";
    }

    showHumanCard(element){
        element.style.display = "block";
    }
}