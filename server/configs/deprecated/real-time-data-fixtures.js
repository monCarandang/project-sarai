import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'real-time-data.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/real-time-data-copy.jpg',
    title: 'Real-Time Weather Monitoring',
    text: 'View real-time weather data from the Automatic Weather Stations installed throughout the country.',
    path: 'real-time-data.root',
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
    video: 'https://www.youtube.com/embed/LgyYBLmmJkA?feature=oembed',
    img: '',
    isvideo: true,
    mediasubtext: 'Click here to view the weather monitoring application.',
    mediasubtextlink: 'http://project-sarai-tjmonsi1.c9users.io/weather-monitoring',
    challengetitle: 'The Challenge',
    challengetext: 'Weather data is vital for managing the right planting schedule for one’s vegetation. Different crops require different levels of rainfall, temperature, humidity and other weather parameters. Farmers and agriculturists alike should be regularly informed about these important weather conditions in order for them to maximize their crop production and profit, use their time and land more efficiently and minimize crop damages caused by the weather.',
    solutiontitle: 'Solutions',
    solutiontext: 'Weather stations are being set up in various sites all around the country where major crop plantations are found. These stations, along with the satellite data, will be used to inform farmers and agriculturists on previous weather patterns and current weather conditions through our outputs of historical and current weather data. Later on, weather prediction will be available to serve as a guiding tool for future planting.',
    share: [
        {
            title: 'facebook',
            class_name: 'facebook',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=real-time-data'
        },
        {
            title: 'twitter',
            class_name: 'twitter',
            href: 'http://twitter.com/home?status=Real-Time%20Weather%20Monitoring%20http://sarai.ph/?tcsn_portfolio=real-time-data'        },
        {
            title: 'googleplus',
            class_name: 'googleplus',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=real-time-data'
        },
        {
            title: 'linkedin',
            class_name: 'linkedin',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=real-time-data'
        },
        {
            title: 'pinterest',
            class_name: 'pinterest',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dreal-time-data&description=Real-Time%20Weather%20Monitoring&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2Freal-time-data-copy-1.jpg'
        },
        {
            title: 'mail',
            class_name: 'mail',
            href: 'mailto:?subject=Real-Time Weather Monitoring&amp;body=http://sarai.ph/?tcsn_portfolio=real-time-data'
        }
    ],
    prevName: '',
    prevLink: '',
    nextName: 'Suitability Maps',
    nextLink: '/suitability',
    isFirst: true,
    isLast: false,
    sort: 1
  });
}
