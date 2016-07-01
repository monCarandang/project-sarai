import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'crop-monitoring-and-forecasting.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/ICM.jpg',
    title: 'Crop Monitoring and Forecasting',
    text: 'Plan your planting practices wisely for optimum yield.',
    path: 'crop-monitoring-and-forecasting.root',
    sort: 7
  });
}
