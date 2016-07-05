import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'integrated-crop-management.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/DSC_0533-copy.jpg',
    title: 'Integrated Crop Management',
    text: 'Enhance your adaptibility by using SARAI’s integrated crop support system.',
    path: 'integrated-crop-management.root',
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
                    label: 'Dr. Pompe Sta. Cruz, CA, UPLB'
                },
                {
                	label: 'Dr. Ronaldo Saludes, CEAT, UPLB'
                }
            ]
    	},
    	{
    		name: 'URA :',
    		text: [
                {
                    label: 'Ivy Rose Marajas'
                },
                {
                	label: 'Kim Nyka Pedeguerra'	
                },
                {
                	label: 'Marck Ferdie Eusebio'
                },
                {
                	label: 'Yaminah Mochica Pinca'
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
    img: '/images/Services/DSC_0533-copy.jpg',
    isvideo: false,
    mediasubtext: 'The application is still under development.',
    mediasubtextlink: '',
    challengetitle: 'The Challenge',
    challengetext: 'Nutrient Management is a vital process in farming. It pertains to the management of crop fertility inputs in order to attain optimum yield. A large amount of farmers’ capital is usually allotted to nutrient/fertilizers, therefore, there is a need to manage efficiently the use of these resources. Furthermore, soil moisture is also an important consideration in crop growth and agricultural production. It influences the crop yield severely especially if the crop lacks on water or if it is stressed. If the soil moisture drops below the critical point, it is highly probable that there will be a massive loss on crop yield thus, lessening the farmer’s profit. Considering this factor, especially in our country, it is crucial since we are usually experiencing drought which highly affects our crops and food production.',
    solutiontitle: 'Solutions',
    solutiontext: 'Using the SARAI Nutrient Manager, registered farmers can get recommendation based on the status of their farms. SARAI will recommend what and how much nutrient they will apply on their crops and their estimated yield. Another service of SARAI is the Integrated Water Management Service. It allows farmers to monitor the soil moisture content of their farm through sensors. They can be notified if there is a significant effect on their crops if there is a detected soil-moisture deficit. By monitoring the soil moisture, they can react accordingly to their crops’ water needs to avoid crop yield losses.',
    share: [
        {
            title: 'facebook',
            class_name: 'fb',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=integrated-crop-management',
            img: '/images/icons/fb.png'
        },
        {
            title: 'twitter',
            class_name: 'twt',
            href: 'http://twitter.com/home?status=Integrated%20Crop%20Management%20http://sarai.ph/?tcsn_portfolio=integrated-crop-management',
            img: '/images/icons/twitter.png'
        },
        {
            title: 'googleplus',
            class_name: 'gp',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=integrated-crop-management',
            img: '/images/icons/googleplus.png'
        },
        {
            title: 'linkedin',
            class_name: 'li',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=integrated-crop-management',
            img: '/images/icons/linkedin.png'
        },
        {
            title: 'pinterest',
            class_name: 'pnt',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dintegrated-crop-management&description=Integrated%20Crop%20Management&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2FDSC_0533-copy.jpg',
            img: '/images/icons/pinterest.png'
        },
        {
            title: 'mail',
            class_name: 'ml',
            href: 'mailto:?subject=Integrated%20Crop%20Management&body=http://sarai.ph/?tcsn_portfolio=integrated-crop-management',
            img: '/images/icons/mail.png'
        }
    ],
    prevName: 'Multispectral Camera Imaging',
    prevLink: '/multispectral-camera-imaging',
    nextName: 'Integrated Pest Management',
    nextLink: '/pest-management',
    isFirst: false,
    isLast: false,
    sort: 5
  });
}
