const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur)
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostPopularDinosaur = function () {
    var currentTopGuestsAttracted = 0
    var mostPopularDinosaur;
    for (var currentDinosaur of this.collectionOfDinosaurs){
        if (currentDinosaur.guestsAttractedPerDay > currentTopGuestsAttracted){
            currentTopGuestsAttracted= currentDinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = currentDinosaur;
        }
    }
    return mostPopularDinosaur;
}
Park.prototype.getDinosaursBySpecies = function (speciesToFind) {
    var arrayOfDinosaursThisSpecies = [];

    for (var currentDinosaur of this.collectionOfDinosaurs){
        if (currentDinosaur.species == speciesToFind){
            arrayOfDinosaursThisSpecies.push(currentDinosaur);
        }
    }
    return arrayOfDinosaursThisSpecies;
}


Park.prototype.getTotalVisitors = function () {
    var totalVisitors = 0;

    for (var currentDinosaur of this.collectionOfDinosaurs){
        totalVisitors+=currentDinosaur.guestsAttractedPerDay;
        
    }
    return totalVisitors;
}


Park.prototype.getTotalVisitorsPerYear = function (dayOpenEachYear) {
    return this.getTotalVisitors()*dayOpenEachYear;
}

Park.prototype.getTotalRevenuePerYear = function (dayOpenEachYear){
    return this.getTotalVisitorsPerYear(dayOpenEachYear) * this.ticketPrice;
}

Park.prototype.removeDinosaursOfThisSpecies = function (speciesToRemove){
    var arrayOfDinosaursNotThisSpecies = [];

    for (var currentDinosaur of this.collectionOfDinosaurs){
        if (currentDinosaur.species != speciesToRemove){
            arrayOfDinosaursNotThisSpecies.push(currentDinosaur);
        }
    }
    this.collectionOfDinosaurs = arrayOfDinosaursNotThisSpecies;
}


Park.prototype.getNumberOfEachDietaryType = function (){
    var objectOfDietaryTypes = { 'carnivore': 0, 'herbivore': 0, 'omnivore': 0 };
    for (var currentDinosaur of this.collectionOfDinosaurs){
        ++objectOfDietaryTypes[currentDinosaur.diet];
    }
    return objectOfDietaryTypes;

    // previously this was inside the for loop - 
    // if (currentDinosaur.diet=='carnivore'){
        //     ++objectOfDietaryTypes.carnivore;
        // }
        // else if (currentDinosaur.diet=='herbivore'){
        //     ++objectOfDietaryTypes.herbivore;
        // } 
        // else if (currentDinosaur.diet=='omnivore'){
        //     ++objectOfDietaryTypes.omnivore;
        // }
    // console.log(objectOfDietaryTypes);
}

module.exports = Park;
