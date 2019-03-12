class Student{

    constructor(name, tutorgroup){
        this.name = name;
        this.year = parseInt(tutorgroup);
        this.form = tutorgroup.substr(-2);
    }


    getName() {
        return this.name;
    };
  
    getYearGroup() {
          return this.year;
    };

    getForm() {
        return this.form;
  };

    
}

module.exports = Student;
