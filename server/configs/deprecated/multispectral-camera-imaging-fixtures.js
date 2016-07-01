import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'multispectral-camera-imaging.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/multispectral-copy.jpg',
    title: 'Multispectral Camera Imaging',
    text: 'Determine the health of your crops without destroying it for analysis.',
    path: 'multispectral-camera-imaging.root',
    sort: 4
  });
}
