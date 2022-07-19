class Employee{
    constructor(name,id,email){
        this.name=name
        this.id=idthis.email=email
    }
    getName(){
    return this.name
}
    getID(){

    }
    getEmail(){

    }
    getRole(){
        return 'Employee'
    }
}
module.exports=Employee