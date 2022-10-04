const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurassic Park", 100); // Arrange
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('t-rex', 'carnivore', 40);
    dinosaur_3 = new Dinosaur('compsognathus', 'carnivore', 10);
    dinosaur_4 = new Dinosaur('brachiosaurus', 'herbivore', 30);
    dinosaur_5 = new Dinosaur('ankylosaurus', 'herbivore', 45);
    dinosaur_6 = new Dinosaur('spinosaurus', 'carnivore', 10);
    dinosaur_7 = new Dinosaur('hagryphus', 'omnivore', 15);
    dinosaur_8 = new Dinosaur('ankylosaurus', 'herbivore', 42);
    dinosaur_9 = new Dinosaur('ankylosaurus', 'herbivore', 33);
  })

  it('should have a name', function(){
    const actual = park.name;                     // Act
    assert.strictEqual(actual, 'Jurassic Park');  // Assert
  });

  it('should have a ticket price',function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur_1);
    const actual = park.collectionOfDinosaurs[0].species;
    assert.deepStrictEqual(actual, "t-rex");
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur_1);
    park.removeDinosaur(dinosaur_1);
    const actual = park.collectionOfDinosaurs.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_3);
    const actual = park.mostPopularDinosaur().species;
    assert.strictEqual(actual, "t-rex");
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const actual = park.getDinosaursBySpecies('t-rex');
    assert.strictEqual(actual.length, 2);
  });


  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const actual = park.getTotalVisitors();
    assert.strictEqual(actual, 100);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const daysParkIsOpen = 364;
    const actual = park.getTotalVisitorsPerYear(daysParkIsOpen);
    assert.strictEqual(actual, 36400);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    const daysParkIsOpen = 364;
    const actual = park.getTotalRevenuePerYear(daysParkIsOpen);
    assert.strictEqual(actual, 3640000);
  });


  // EXTENSIONS

  it('should all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    park.addDinosaur(dinosaur_4);
    park.addDinosaur(dinosaur_5);
    park.addDinosaur(dinosaur_6);
    park.addDinosaur(dinosaur_7);
    park.addDinosaur(dinosaur_8);
    park.addDinosaur(dinosaur_9);
    const speciesToRemove = 'ankylosaurus';
    park.removeDinosaursOfThisSpecies(speciesToRemove);
    const actual = park.collectionOfDinosaurs
    assert.strictEqual(actual.length, 6);
    // console.log(park.collectionOfDinosaurs)
  });


  it('should be able to provide an object of diet types, and number of dinosaurs of that type.', function() {
    park.addDinosaur(dinosaur_1);
    park.addDinosaur(dinosaur_2);
    park.addDinosaur(dinosaur_3);
    park.addDinosaur(dinosaur_4);
    park.addDinosaur(dinosaur_5);
    park.addDinosaur(dinosaur_6);
    park.addDinosaur(dinosaur_7);
    park.addDinosaur(dinosaur_8);
    park.addDinosaur(dinosaur_9);
    
    
    const actual = park.getNumberOfEachDietaryType()
    assert.deepStrictEqual(actual, { carnivore: 4, herbivore: 4, omnivore: 1 });
  });



  //Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
  // Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }
});
