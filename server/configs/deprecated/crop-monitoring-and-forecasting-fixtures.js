import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'crop-monitoring-and-forecasting.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/ICM.jpg',
    title: 'Crop Monitoring and Forecasting',
    text: 'Plan your planting practices wisely for optimum yield.',
    path: 'crop-monitoring-and-forecasting.root',
    info: [
    	{
    		name: 'Crops :',
    		text: [
                {
                    label: 'Rice, Corn, Banana, Coconut, Coffee, and Cacao'
                }
            ]
    	},
    	{
    		name: 'Experts :',
    		text: [
                {
                    label: 'Dr. Felino A. Lansigan, CA, UPLB'
                }
            ]
    	},
    	{
    		name: 'URA :',
    		text: [
                {
                    label: 'Karen Berido Burdeos'
                },
                {
                	label: 'Julia Dalagan'	
                },
                {
                	label: 'John Christopher Lorenzo'
                },
                {
                	label: 'Marilyn Yere'
                }
            ]
    	},
    	{
    		name: 'Project 1, Dr. Felino Lansigan, Project Leader',
    		text: [
            ]
    	}
    ],
    video: '',
    img: '/images/Services/ICM.jpg',
    isvideo: false,
    mediasubtext: 'Click here to view the crop monitoring application.',
    mediasubtextlink: 'http://159.203.253.36:8080/index.php',
    challengetitle: 'The Challenge',
    challengetext: 'Reliable and timely crop forecasts are essential elements in food security assessment of a region at any given period.',
    solutiontitle: 'Solution',
    solutiontext: 'Use and applications of advances in Science and Technology facilitate the determination of cropped area and yield forecasts to provide reliable crop forecasts on a regular basis.',
    share: [
        {
            title: 'facebook',
            class_name: 'facebook',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=crop-monitoring-and-forecasting'
        },
        {
            title: 'twitter',
            class_name: 'twitter',
            href: 'http://twitter.com/home?status=Crop%20Monitoring%20and%20Forecasting%20http://sarai.ph/?tcsn_portfolio=crop-monitoring-and-forecasting'
        },
        {
            title: 'googleplus',
            class_name: 'googleplus',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=crop-monitoring-and-forecasting'
        },
        {
            title: 'linkedin',
            class_name: 'linkedin',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=crop-monitoring-and-forecasting'
        },
        {
            title: 'pinterest',
            class_name: 'pinterest',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dcrop-monitoring-and-forecasting&description=Crop%20Monitoring%20and%20Forecasting&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2F0-2.jpg'
        },
        {
            title: 'mail',
            class_name: 'mail',
            href: 'mailto:?subject=Crop%20Monitoring%20and%20Forecasting&body=http://sarai.ph/?tcsn_portfolio=crop-monitoring-and-forecasting'
        }
    ],
    prevName: 'Integrated Pest Management',
    prevLink: '/pest-management',
    nextName: 'Alerts and Advisories',
    nextLink: '/alerts-and-advisories',
    isFirst: false,
    isLast: false,
    sort: 7
  });
}
