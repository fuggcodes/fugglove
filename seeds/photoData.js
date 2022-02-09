const { Photo } = require('../models');

// Types of photos 
const photodata = [
  {
    title: 'Amy',
    artist: 'FUGG',
    category: 'Petite',
    gallery_id: 1,
    filename: 'amy.jpeg',
    description:'Quiet but loudy personality',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    category: 'May 05, 2017',
    gallery_id: 1,
    filetitle: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    title: 'Sand + Sea = Summer',
    artist: 'S_Photo',
    category: 'June 10, 2019',
    gallery_id: 2,
    filetitle: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    title: 'Beach Chairs',
    artist: 'icemanphotos',
    category: 'July 4, 2020',
    gallery_id: 2,
    filetitle: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    title: 'Beach Sunrise',
    artist: 'VRstudio',
    category: 'August 14, 2016',
    gallery_id: 2,
    filetitle: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    title: 'Fall Colors',
    artist: 'DrivingJack',
    category: 'October 15, 2018',
    gallery_id: 3,
    filetitle: '06-fall-colors.jpg',
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    title: 'Autumn Mountains',
    artist: 'Vitalii_Mamchuk',
    category: 'November 3, 2016',
    gallery_id: 3,
    filetitle: '07-autumn-mountains.jpg',
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    title: 'Frozen River',
    artist: 'Vlad Sokolovsky',
    category: 'December 24, 2020',
    gallery_id: 4,
    filetitle: '08-frozen-river.jpg',
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    title: 'Winter Home',
    artist: 'Smit',
    category: 'January 20, 2018',
    gallery_id: 4,
    filetitle: '09-winter-home.jpg',
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPhotos = () => Photo.bulkCreate(photodata);

module.exports = seedPhotos;
