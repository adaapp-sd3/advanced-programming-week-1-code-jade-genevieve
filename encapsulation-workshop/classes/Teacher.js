class Teacher{

    constructor(name, initials, subject){
        this.yearsOfService = 0;
        this.name = name;
        this.initials = initials;
        this.subject = subject;
    }


    getName() {
        return this.name;
    };

    getInitials() {
        return this.initials;
    };

    getSubject() {
        return this.subject;
    };
  
    getYearsOfService() {
        return this.yearsOfService;
    };

    setYearsOfService(Number) {
        this.yearsOfService = Number;
        console.log(this.yearsOfService);
        console.log(this);
  };
  
}

module.exports = Teacher;