const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPhoto = require('./photoData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPhoto();

  process.exit(0);
};

seedAll();
