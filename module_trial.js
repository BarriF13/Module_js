export default class User { //we only can have one default export
  constructor(name,age){
    this.name = name;
    this.age =age;
  }
}
export function printName(user){
  console.log('user name is ${user.age}')
}

export function printAge(user){
  console.log('user is ${user.age} years old')
}
// export default User.. we put this on the top
// export{printName , printAge}