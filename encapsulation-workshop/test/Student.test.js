const chai = require('chai');
const expect = chai.expect;

const Student = require('../classes/Student');

let myStudent = new Student('Poe Dameron', '6HP');


describe('Student', () => {
    it('should allow an object to be instantiated from the class', () => {

        expect(myStudent).to.have.property('name');
        expect(myStudent).to.have.property('year');
        expect(myStudent).to.have.property('form');
        expect(myStudent).to.be.an.instanceOf(Student);
    });

    it('should return a string for name using `getName`', () => {
        const result =  myStudent.getName();
        const expectedResult = 'Poe Dameron';
        
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })

    it('should return a number for year using `getYearGroup`', () => {
        const result =  myStudent.getYearGroup();
        const expectedResult = 6;
        
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('number');
    })

    it('should return a string for initials using `getForm`', () => {
        const result =  myStudent.getForm();
        const expectedResult = 'HP';
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })
    
})