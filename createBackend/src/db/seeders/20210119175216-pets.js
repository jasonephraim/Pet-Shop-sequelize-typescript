const faker = require("faker");
const pets = [...Array(20)].map((pet) => ({
  name: faker.name.firstName(),
  age: faker.random.number(20),
  weight: faker.random.number(100),
  gender: faker.name.gender(),
  breed: faker.vehicle.model(),
  storeID: faker.random.number({ min: 1, max: 3 }),
  ownerID: faker.random.number({ min: 1, max: 10 }),
  hasShots: faker.random.boolean(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pets", pets, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pets", null, {});
  },
};
