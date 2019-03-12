const chai = require('chai');
const expect = chai.expect;

const Teacher = require('../classes/Teacher');

let myTeacher = new Teacher('Biggs Darklighter', 'BD', 'Flying');


describe('Teacher', () => {
    it('should allow an object to be instantiated from the class', () => {
        
        expect(myTeacher).to.have.property('yearsOfService');
        expect(myTeacher).to.have.property('name');
        expect(myTeacher).to.have.property('initials');
        expect(myTeacher).to.have.property('subject');
        expect(myTeacher).to.be.an.instanceOf(Teacher);
    });

    it('should return a string for name using `getName`', () => {
        const result =  myTeacher.getName();
        const expectedResult = 'Biggs Darklighter';
        
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })

    it('should return a number for year using `getYearsOfService`', () => {
        const result =  myTeacher.getYearsOfService();
        const expectedResult = 0;
        
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('number');
    })

    it('should return a string for initials using `getInitials`', () => {
        const result =  myTeacher.getInitials();
        const expectedResult = 'BD';
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })

    it('should return a string for subject using `getSubject`', () => {
        const result =  myTeacher.getSubject();
        const expectedResult = 'Flying';
        expect(result).to.equal(expectedResult);
        expect(result).to.be.a('string');
    })

    it('should allow yearsOfService to be set using `setYearsOfService`', () => {
        myTeacher.setYearsOfService(10);
        const expectedResult = 10;
        
        expect(myTeacher.getYearsOfService()).to.equal(expectedResult);
    })
    
})