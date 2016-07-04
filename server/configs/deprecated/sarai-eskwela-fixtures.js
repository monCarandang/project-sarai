import {LandingData} from '/lib/collections';

if (!LandingData.findOne({path: 'sarai-eskwela.root'})) {
  LandingData.insert({
    img: '',
    background: '/images/Services/sarai-eskwela.jpg',
    title: 'SARAI Eskwela',
    text: 'Learn more about smarter agriculture information access, knowledge sharing, and practical trainings by Project SARAI',
    path: 'sarai-eskwela.root',
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
                    label: 'Loucel Cui'
                },
                {
                	label: 'Rosemarie Laila Areglado'	
                }
            ]
    	},
    	{
    		name: 'Project 4: Dr.Decibel V. Faustino-Eslava, Project Leader',
    		text: [
    		]
    	}
    ],
    video: '',
    img: '/images/Services/sarai-eskwela.jpg',
    isvideo: false,
    mediasubtext: 'Alpha Version. Click here to go to the sarai eskwela page.',
    mediasubtextlink: '',
    challengetitle: 'The Challenge',
    challengetext: 'With sustainability as the goal, Project 4 – Capacity and Knowledge-Building component of Project SARAI is tasked to ensure that technical capacities of target groups are strengthened, and that farmers and their communities become more willing participants to the development of the agriculture sector, collectively and individually. Ultimately, this will ensure a more climate-resilient Philippine agricultural industry that is capable of addressing our national food security issues.',
    solutiontitle: 'Solutions',
    solutiontext: 'A major thrust of this project is to develop Information Education and Communication (IEC) materials. Such materials are important components of mass communication or public information campaigns. It is the process of learning that empowers people to make informed decisions, modify behaviors and change social conditions. In order to design these IEC materials, the team had to conduct training needs analyses (TNA) to ensure that the developed resources suit their target audiences. According to the TNA results, in most farming communities, access to information is very variable. Such differences are anchored on the differences in the farmers’ economic circumstances and their ability to adopt technological developments (reflected as a function of age range, educational attainment, and the likes). Additionally, a national lack of reliable extension-communication infrastructure, particularly of internet and mobile connectivity, is blocking significant progress in this field. Hence, the TNA showed a huge demand for on-site, face to face trainings over an online-based approach. Despite these observations, Project SARAI is preparing to utilize both approaches to ensure the sustainability of its efforts and investments. To spread scientific agricultural knowledge and to present the new technologies on Smarter Farming, SARAI Eskwela was created for the farmers as an avenue to access information and interaction with SARAI experts. SARAI Eskwela will serve through both online and field-based platforms where all the developed resources will be utilized.  The online platform will be hosting the IEC materials, training modules, and other such materials, including testimonials intended for audiences with access to the internet. Field and classroom-based SARAI Eskwela is also being developed to answer the demand for face to face trainings.',
    share: [
        {
            title: 'facebook',
            class_name: 'facebook',
            href: 'http://www.facebook.com/sharer.php?u=http://sarai.ph/?tcsn_portfolio=sarai-eskwela'
        },
        {
            title: 'twitter',
            class_name: 'twitter',
            href: 'http://twitter.com/home?status=SARAI%20Eskwela%20http://sarai.ph/?tcsn_portfolio=sarai-eskwela'
        },
        {
            title: 'googleplus',
            class_name: 'googleplus',
            href: 'http://google.com/bookmarks/mark?op=edit&bkmk=http://sarai.ph/?tcsn_portfolio=sarai-eskwela'
        },
        {
            title: 'linkedin',
            class_name: 'linkedin',
            href: 'http://linkedin.com/shareArticle?url=http://sarai.ph/?tcsn_portfolio=sarai-eskwela'
        },
        {
            title: 'pinterest',
            class_name: 'pinterest',
            href: 'http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fsarai.ph%2F%3Ftcsn_portfolio%3Dsarai-eskwela&description=SARAI%20Eskwela&media=http%3A%2F%2Fsarai.ph%2Fwp-content%2Fuploads%2F2016%2F02%2Fsarai-eskwela-copy-1.jpg'
        },
        {
            title: 'mail',
            class_name: 'mail',
            href: 'mailto:?subject=SARAI%20Eskwela&body=http://sarai.ph/?tcsn_portfolio=sarai-eskwela'
        }
    ],
    prevName: 'Alerts and Advisories',
    prevLink: '/alerts-and-advisories',
    nextName: 'Web and Mobile Application',
    nextLink: '',
    isFirst: false,
    isLast: false,
    sort: 9
  });
}
