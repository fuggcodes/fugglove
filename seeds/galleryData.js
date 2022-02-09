const { Gallery } = require('../models');

const Gallerydata = [
  {
    name: 'Amy',
    filename: 'amy.jpeg',
    ending_date: 'June 21, 2021 17:00:00',
  },
  {
    name: 'Sommer',
    filename: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'Herfst',
    filename: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    name: 'Invierno',
    filename: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(Gallerydata);

module.exports = seedGallery;
