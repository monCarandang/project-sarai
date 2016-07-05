import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'suitability.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/suitability-copy-2.png',
    title: 'Suitability Maps',
    text: 'Maximize your yield by knowing what and where to plant.',
    path: 'suitability.root',
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
                    label: 'Prof. Vic Bato, UPLB'
                }
            ]
    	},
    	{
    		name: 'URA :',
    		text: [
                {
                    label: 'Roel Fucio'
                }
            ]
    	},
    	{
    		name: 'Project 1, Dr. Felino Lansigan, Project Leader',
    		text: [
            ]
    	},
    	{
    		name: 'Project 2, Dr. Art Salazar, Project Leader',
    		text: [
            ]
    	}
    ],
    video: '',
    img: '/images/Services/suitability-copy-2.png',
    isvideo: false,
    mediasubtext: 'Click here to view the gallery of suitability maps.',
    mediasubtextlink: 'https://sites.google.com/a/up.edu.ph/sarai-project/',
    challengetitle: 'The Challenge',
    challengetext: 'Knowing what and where to plant are important considerations if you want to maximize your productivity and yield. It is also important to identify the parts of the country which are feasible to plant so that the policy makers and the local government unit can be guided on the agricultural programs that they will plan.',
    solutiontitle: 'Solutions',
    solutiontext: 'The SARAI Suitability Maps can be used to identify the different locations of the country which are highly suitable, moderately suitable, and marginally suitable for its initial six crops. By identifying these areas, resources will not be put to waste and farmers can attain more yield.',
    share: [
        {
            title: 'facebook',
            class_name: 'fb',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=suitability-maps',
            img: '/images/icons/fb.png'
        },
        {
            title: 'twitter',
            class_name: 'twt',
            href: 'http://twitter.com/home?status=Suitability%20Maps%20http://sarai.ph/?tcsn_portfolio=suitability-maps',
            img: '/images/icons/twitter.png'
        },
        {
            title: 'googleplus',
            class_name: 'gp',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=suitability-maps',
            img: '/images/icons/googleplus.png'
        },
        {
            title: 'linkedin',
            class_name: 'li',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=suitability-maps',
            img: '/images/icons/linkedin.png'
        },
        {
            title: 'pinterest',
            class_name: 'pnt',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dsuitability-maps&description=Suitability%20Maps&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F03%2Fsuitability.png',
            img: '/images/icons/pinterest.png'
        },
        {
            title: 'mail',
            class_name: 'ml',
            href: 'mailto:?subject=Suitability%20Maps&body=http://sarai.ph/?tcsn_portfolio=suitability-maps',
            img: '/images/icons/mail.png'
        }
    ],
    prevName: 'Real-Time Weather Monitoring',
    prevLink: '/real-time-data',
    nextName: 'Vulnerability Maps',
    nextLink: '/vulnerability',
    isFirst: false,
    isLast: false,
    sort: 2
  });
}
