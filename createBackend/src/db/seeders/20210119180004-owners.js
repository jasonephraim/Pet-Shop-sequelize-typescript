const faker = require("faker");
const owners = [...Array(10)].map((owner) => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  pets: faker.random.number({ min: 1, max: 20 }),
  phoneNumber: faker.random.number({ min: 1000000000, max: 9999999999 }),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Owners", owners, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Owners", null, {});
  },
};
