const faker = require("faker");
const stores = [...Array(3)].map((store) => ({
  name: faker.company.companyName(),
  pets: faker.random.number({ min: 1, max: 20 }),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stores", stores, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stores", null, {});
  },
};
