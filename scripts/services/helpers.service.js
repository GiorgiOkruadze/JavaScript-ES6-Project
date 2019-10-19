class HelperMethodService {
    
    //simple usage of C# delegates in JavaScript
    idexOfElement(collection,predicate) {
        for(var i = 0; i < collection.length; i++)
        {
            if(predicate(collection[i])){
                return i;
            }
        }
        return -1;
    }
}