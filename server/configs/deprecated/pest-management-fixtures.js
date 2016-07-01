import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'pest-management.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/integrated-pest-management.JPG',
    title: 'Integrated Pest Management',
    text: 'Identify pests and know how to manage them by dragging pest images on the platform.',
    path: 'pest-management.root',
    sort: 6
  });
}
