const Sequelize = require('sequelize');

const sequelize = new Sequelize('puppies', 'postgres', 'Iimpeccable1',{
    host: '127.0.0.1', 
    dialect:'postgres'
})

const Puppy = sequelize.define('puppy', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
        //get() {
           // const age = this.getDataValue('age')
           // return `${this.getDataValue('name')} ${this.age}`
       // },
    },
    age: {
        type: Sequelize.INTEGER, 
        allowNull: false
    },
    favFood: {
        type: Sequelize.STRING
    }
}, {
    getterMethods: {
        nameAndFood() {
           return `${this.name} ${this.favFood}`;
        }
    }
})
Puppy.prototype.greet = function() {
    return `Woof, my name is ${this.nameAndFood}`;
}

module.exports = {
    Puppy: Puppy,
    sequelize: sequelize
}