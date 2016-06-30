import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'suitability.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/suitability-copy-2.png',
    title: 'Suitability Maps',
    text: 'Maximize your yield by knowing what and where to plant.',
    path: 'suitability.root',
    sort: 2
  });
}
