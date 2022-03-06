const findTheOldest = function(people) {


    
    let oldest = people.reduce((oldestPerson, person) => {
        
        if(person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear();
        }
    
        let age = person.yearOfDeath - person.yearOfBirth;

        if(age > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)){
            oldestPerson = person;
        }
        return oldestPerson;
        

    },people[0]);

    return oldest;
    
};


// Do not edit below this line
module.exports = findTheOldest;


