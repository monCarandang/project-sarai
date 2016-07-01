import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'integrated-crop-management.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/DSC_0533-copy.jpg',
    title: 'Integrated Crop Management',
    text: 'Enhance your adaptibility by using SARAI’s integrated crop support system.',
    path: 'integrated-crop-management.root',
    sort: 5
  });
}
