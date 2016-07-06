import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'pest-management.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/integrated-pest-management.JPG',
    title: 'Integrated Pest Management',
    text: 'Identify pests and know how to manage them by dragging pest images on the platform.',
    path: 'pest-management.root',
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
                    label: 'Prof. Melvin Ebuenga, NCPC, UPLB'
                }
            ]
    	},
    	{
    		name: 'URA :',
    		text: [
                {
                    label: 'Gideon Aries Burgonio'
                },
                {
                	label: 'Roinand Aguila'	
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
    img: '/images/Services/integrated-pest-management.JPG',
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
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=integrated-pest-management',
            img: '/images/icons/fb.png'
        },
        {
            title: 'twitter',
            class_name: 'twt',
            href: 'http://twitter.com/home?status=Integrated%20Pest%20Management%20http://sarai.ph/?tcsn_portfolio=integrated-pest-management',
            img: '/images/icons/twitter.png'
        },
        {
            title: 'googleplus',
            class_name: 'gp',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=integrated-pest-management',
            img: '/images/icons/googleplus.png'
        },
        {
            title: 'linkedin',
            class_name: 'li',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=integrated-pest-management',
            img: '/images/icons/linkedin.png'
        },
        {
            title: 'pinterest',
            class_name: 'pnt',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dintegrated-pest-management&description=Integrated%20Pest%20Management&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2Fintegrated-pest-management-copy.jpg',
            img: '/images/icons/pinterest.png'
        },
        {
            title: 'mail',
            class_name: 'ml',
            href: 'mailto:?subject=Integrated%20Pest%20Management&body=http://sarai.ph/?tcsn_portfolio=integrated-pest-management',
            img: '/images/icons/mail.png'
        }
    ],
    prevName: 'Integrated Crop Management',
    prevLink: '/integrated-crop-management',
    nextName: 'Crop Monitoring and Forecasting',
    nextLink: '/crop-monitoring-and-forecasting',
    isFirst: false,
    isLast: false,
    sort: 6
  });
}
