const chai = require('chai');
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup');

let myYearGroup = new YearGroup(6, 'HP');


describe('YearGroup', () => {
    it('should allow an object to be instantiated from the class', () => {

        expect(myYearGroup).to.have.property('year');
        expect(myYearGroup).to.have.property('headOfYear');
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    });

    it('should return a number for year using `getYear`', () => {
        const result =  myYearGroup.getYear();
        const expectedResult = 6;
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('number');
    })

    it('should return a string for initials using `getHeadOfYear`', () => {
        const result =  myYearGroup.getHeadOfYear();
        const expectedResult = 'HP';
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })
    
})