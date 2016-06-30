import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'alerts-and-advisories.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/alerts-and-advisories.jpg',
    title: 'Alerts and Advisories',
    text: 'Receive crop alerts and advisories to help you increase your yield and your profit.',
    path: 'alerts-and-advisories.root',
    sort: 8
  });
}
