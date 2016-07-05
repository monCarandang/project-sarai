import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'multispectral-camera-imaging.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/multispectral-copy.jpg',
    title: 'Multispectral Camera Imaging',
    text: 'Determine the health of your crops without destroying it for analysis.',
    path: 'multispectral-camera-imaging.root',
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
                    label: 'Prof. Nel Altoveros, CAS, UPLB'
                }
            ]
    	},
    	{
    		name: 'URA :',
    		text: [
                {
                    label: 'Janah Monsanto'
                }
            ]
    	},
    	{
    		name: 'Project 2, Dr. Art Salazar, Project Leader',
    		text: [
            ]
    	}
    ],
    video: 'https://www.youtube.com/embed/X8YRDeCIaME?feature=oembed',
    img: '',
    isvideo: true,
    mediasubtext: 'Click here to view the Multispectral Camera Imaging application.',
    mediasubtextlink: '',
    challengetitle: 'The Challenge',
    challengetext: 'How can  the health of the crops be determined without destroying or pulling the plants out from the field for analysis in a laboratory?',
    solutiontitle: 'Solutions',
    solutiontext: 'By using a multispectral camera mounted on a drone to take images of the crops. Plants reflect light coming from the sun into light of various colors. Our eyes can only see some of these colors (visible light). However, other colors (infrared and ultraviolet) which are not visible to the naked eye can be “seen” by the multispectral camera mounted on a drone. By analyzing the images captured by the multispectral camera, scientists can tell if the plants are healthy, stressed, lacking water or nutrients without destroying them or pulling them out from the field for analysis in a laboratory. Using the results from the image analysis, the scientists can advise farmers how to manage their crops to increase yield. Uses of Multispectral Images. The multispectral camera captures images of various colors using a special lens, filters and sensors. The brightness of the image for a given color can be used as an indication of the health of the plants. By analyzing these colors, the amount of chlorophyll, water content and other nutrients present in the plants can be determined. The images taken by the multispectral camera are 2 infrareds (900nm and 800 nm), red-edge (720 nm), red (680 nm), green (550 nm) and blue (490 nm). By taking the ratios of the intensities of colors, vegetation indices (such as normalized differential vegetation index or NDVI) can be computed. These indices provide indication of the health of the plants.',
    share: [
        {
            title: 'facebook',
            class_name: 'fb',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=multispectral-camera-imaging',
            img: '/images/icons/fb.png'
        },
        {
            title: 'twitter',
            class_name: 'twt',
            href: 'http://twitter.com/home?status=Multispectral%20Camera%20Imaging%20http://sarai.ph/?tcsn_portfolio=multispectral-camera-imaging',
            img: '/images/icons/twitter.png'
        },
        {
            title: 'googleplus',
            class_name: 'gp',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=multispectral-camera-imaging',
            img: '/images/icons/googleplus.png'
        },
        {
            title: 'linkedin',
            class_name: 'li',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=multispectral-camera-imaging',
            img: '/images/icons/linkedin.png'
        },
        {
            title: 'pinterest',
            class_name: 'pnt',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dmultispectral-camera-imaging&description=Multispectral%20Camera%20Imaging&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2Fmultispectral-copy.jpg',
            img: '/images/icons/pinterest.png'
        },
        {
            title: 'mail',
            class_name: 'ml',
            href: 'mailto:?subject=Multispectral%20Camera%20Imaging&body=http://sarai.ph/?tcsn_portfolio=multispectral-camera-imaging',
            img: '/images/icons/mail.png'
        }
    ],
    prevName: 'Vulnerability Maps',
    prevLink: '/vulnerability',
    nextName: 'Integrated Crop Management',
    nextLink: '/integrated-crop-management',
    isFirst: false,
    isLast: false,
    sort: 4
  });
}
