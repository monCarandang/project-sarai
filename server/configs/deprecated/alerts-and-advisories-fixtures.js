import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'alerts-and-advisories.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/alerts-and-advisories.jpg',
    title: 'Alerts and Advisories',
    text: 'Receive crop alerts and advisories to help you increase your yield and your profit.',
    path: 'alerts-and-advisories.root',
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
    		name: 'URA :',
    		text: [
                {
                    label: 'Roinand Aguila'
                },
                {
                	label: 'Monina Gazelle Charina Carandang'	
                },
                {
                	label: 'Jeyneth Ann Mariano'
                }
            ]
    	}
    ],
    video: '',
    img: '/images/Services/alerts-and-advisories.jpg',
    isvideo: false,
    mediasubtext: 'The application is still under development.',
    mediasubtextlink: '',
    challengetitle: '',
    challengetext: '',
    solutiontitle: '',
    solutiontext: '',
    share: [
        {
            title: 'facebook',
            class_name: 'fb',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=alerts-and-advisories',
            img: '/images/icons/fb.png'
        },
        {
            title: 'twitter',
            class_name: 'twt',
            href: 'http://twitter.com/home?status=Alerts%20and%20Advisories%20http://sarai.ph/?tcsn_portfolio=alerts-and-advisories',
            img: '/images/icons/twitter.png'
        },
        {
            title: 'googleplus',
            class_name: 'gp',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=alerts-and-advisories',
            img: '/images/icons/googleplus.png'
        },
        {
            title: 'linkedin',
            class_name: 'li',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=alerts-and-advisories',
            img: '/images/icons/linkedin.png'
        },
        {
            title: 'pinterest',
            class_name: 'pnt',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dalerts-and-advisories&description=Alerts%20and%20Advisories&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2Falerts-and-advisories-1.jpg',
            img: '/images/icons/pinterest.png'
        },
        {
            title: 'mail',
            class_name: 'ml',
            href: 'mailto:?subject=Alerts%20and%20Advisories&body=http://sarai.ph/?tcsn_portfolio=alerts-and-advisories',
            img: '/images/icons/mail.png'
        }
    ],
    prevName: 'Crop Monitoring and Forecasting',
    prevLink: '/crop-monitoring-and-forecasting',
    nextName: 'SARAI Eskwela',
    nextLink: '/sarai-eskwela',
    isFirst: false,
    isLast: false,
    sort: 8
  });
}
