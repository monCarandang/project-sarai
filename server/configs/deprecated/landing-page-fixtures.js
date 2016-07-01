import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'home.root'})) {
  LandingData.insert({
    path: 'home.root',
    background: '/images/homepage-slider/Project SARAI.png',
    img: '',
    title: 'About Project SARAI',
    text: 'Smarter Farmers, Smarter Agriculture.',
    subtext: 'Search through the different SARAI technologies and systems to what, when, and where to plant'
  });
}

if (!LandingData.findOne({path: 'header.root'})) {
  LandingData.insert({
    path: 'header.root',
    background: '',
    img: '',
    title: '',
    text: 'El Nino Watch Issued'
  });
}

if (!LandingData.findOne({path: 'search.header'})) {
  LandingData.insert({
    path: 'search.header',
    background: '',
    img: '',
    title: '',
    text: 'How can we help you?'
  });
}
if (!LandingData.findOne({path: 'core.crop'})) {
  LandingData.insert({
    path: 'core.crop',
    title: '',
    text: '',
    subtext: '',
    crops: [
      {
        href: '',
        label: 'RICE',
        id: 'rice-link',
        img: '/images/crops-flat-icons/rice.png'
      },
      {
        href: '',
        label: 'CORN',
        id: 'corn-link',
        img: '/images/crops-flat-icons/corn.png'
      },
      {
        href: '',
        label: 'BANANA',
        id: 'banana-link',
        img: '/images/crops-flat-icons/banana.png'
      },
      {
        href: '',
        label: 'COCONUT',
        id: 'coconut-link',
        img: '/images/crops-flat-icons/coconut.png'
      },
      {
        href: '',
        label: 'COFFEE',
        id: 'coffee-link',
        img: '/images/crops-flat-icons/coffee.png'
      },
      {
        href: '',
        label: 'CACAO',
        id: 'cacao-link',
        img: '/images/crops-flat-icons/cacao.png'
      }
    ]
  });
}

if (!LandingData.findOne({path: 'core.project'})) {
  LandingData.insert({
    path: 'core.project',
    background: '',
    img: '',
    title: 'Our Projects',
    text: 'Project SARAI, which is on anchored on precision agriculture, uses advances on technology to know what, when, and where to plant.',
    subtext: 'Field photos from PVeluz',
    buttonColor: '#333333',
    buttonText: 'MORE PROJECTS',
    buttonLink: ''
  });
}

if (!LandingData.findOne({path: 'core.report'})) {
  LandingData.insert({
    path: 'core.report',
    title: 'Get our reports on events related to rice, corn, banana, coconut, coffee, and cacao.',
    text: '',
    subtext: '',
    reports: [
      {
        href: 'http://sarai.ph/wp-content/uploads/2016/03/Assessment_basis_Project-SARAI.pdf',
        label: 'View Report',
        text: 'To request a printed copy send us an email on',
        id: 'report-link1',
        img: '/images/samplepics/Lando_cover.png',
        mail: 'sarai@uplb.edu.ph'
      },
      {
        href: 'http://sarai.ph/wp-content/uploads/2016/03/Pest-Risk-Map-Armyworm.png',
        label: 'View Report',
        text: 'To request a printed copy send us an email on',
        id: 'report-link2',
        img: '/images/samplepics/Pest-Risk-Map-Armyworm-copy_2.png',
        mail: 'sarai@uplb.edu.ph'
      }
    ]
  });
}
if (!LandingData.findOne({path: 'core.subscribe'})) {
  LandingData.insert({
    path: 'core.subscribe',
    background: '/images/samplepics/banner-approved.jpg',
    icon: '/images/samplepics/inbox-icon.png',
    title: 'Stay in Touch',
    text: 'Receive real-time mobile updates even without Internet using SARAI’s Message Exchange System. Subscribe now for free!',
    subtext: '',
    samplename: 'Juan dela Cruz',
    sampleemail: 'juan@example.com',
    samplenumber: '09xxxxxxxxx',
    buttonText: 'SUBSCRIBE',
    buttonColor: 'green'
  });
}

if (!LandingData.findOne({path: 'core.blog'})) {
  LandingData.insert({
    path: 'core.blog',
    title: 'From The Blog',
    text: 'Read articles & express your opinions on environment',
    subtext: '',
    blogs: [
      {
        href: '',
        title: 'Training Workshop on Crop Modeling and Simulation',
        author: 'raguia',
        authorhref: '',
        date: 'April 7, 2016',
        datehref: '',
        category: 'Eskwela',
        categoryhref: '',
        comments: [],
        subtext: 'Maximizing the yield and potential of crops, maximizing the profit of the farmers',
        text: '',
        id: 'blog1-link',
        img: '/images/samplepics/blog1.png'
      },
      {
        href: '',
        title: 'Simplifying information for comprehensibility and sustainability',
        author: 'raguia',
        authorhref: '',
        date: 'April 6, 2016',
        datehref: '',
        category: 'Eskwela',
        categoryhref: '',
        comments: [],
        subtext: '',
        text: '',
        id: 'blog2-link',
        img: '/images/samplepics/blog2.png'
      },
      {
        href: '',
        title: 'Bringing agriculture monitoring and DRRM technologies closer to stakeholders',
        author: 'raguia',
        authorhref: '',
        date: 'April 6, 2016',
        datehref: '',
        category: 'Eskwela',
        categoryhref: '',
        comments: [],
        subtext: '',
        text: '',
        id: 'blog3-link',
        img: '/images/samplepics/blog3.png'
      },
      {
        href: '',
        title: 'Project SARAI Seminar',
        author: 'raguia',
        authorhref: '',
        date: 'March 16, 2016',
        datehref: '',
        category: 'Uncatergorized',
        categoryhref: '',
        comments: [],
        subtext: '',
        text: '',
        id: 'blog4-link',
        img: '/images/samplepics/blog4.jpg'
      },
      {
        href: '',
        title: 'Project SARAI joins DOST-PCAARRD’s SIPAG Fiesta Exhibit as its banner program for Smarter Agriculture',
        author: 'raguia',
        authorhref: '',
        date: 'March 8, 2016',
        datehref: '',
        category: 'Uncatergorized',
        categoryhref: '',
        comments: [],
        subtext: 'By Heidi D. Mendoza',
        text: '',
        id: 'blog5-link',
        img: '/images/samplepics/blog5.jpg'
      }
    ]
  });
}

if (!LandingData.findOne({path: 'core.quotes'})) {
  LandingData.insert({
    path: 'core.quotes',
    title: 'What People Say…',
    text: 'SARAI aims to harness state-of-the-art science and technology to empower Filipino farmers.',
    subtext: '',
    author: 'Dr. Ma. Victoria O. Espaldon',
    img: '/images/samplepics/MVOE-2.jpg',
    background: '',
    quotes: [
      {
        href: '',
        title: '',
        author: 'Mr. Ricky S. Dador',
        authorInfo: 'Weather Observer, Dumangas Agromet Station',
        subtext: '',
        text: 'Yung SARAI makakatulong sa Dumangas para mas makilala o mas maging successful itong aming climate feild school for Dumangas',
        id: 'quotes1-link',
        img: ''
      },
      {
        href: '',
        title: '',
        author: '',
        authorInfo: '',
        subtext: '',
        text: '',
        id: 'quotes2-link',
        img: ''
      },
      {
        href: '',
        title: '',
        author: '',
        authorInfo: '',
        subtext: '',
        text: '',
        id: 'quotes3-link',
        img: ''
      },
      {
        href: '',
        title: '',
        author: '',
        authorInfo: '',
        subtext: '',
        text: '',
        id: 'quotes4-link',
        img: ''
      }
    ]
  });
}