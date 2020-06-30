//Education
const educationList = [
	{
		name: "GoStack Bootcamp",
		school: "Rocketseat",
		schoolLink: "https://rocketseat.com.br/",
		period: "In progress",
	},
	{
		name: "Emotional Inteligence",
		school: "Conquer",
		schoolLink: "https://escolaconquer.com.br/",
		period: "Apr/2020-May/2020",
	},
	{
		name: "Full Stack PHP Developer",
		school: "UpInside",
		schoolLink: "https://www.upinside.com.br/",
		period: "Dez/2019-Mar/2020",
	},
	{
		name: "Design for Web",
		school: "Senac",
		schoolLink: "https://www.sp.senac.br/",
		period: "Feb-Apr/2019",
	},
	{
		name: "Front End Development",
		school: "FreeCodeCamp",
		schoolLink: "https://www.freecodecamp.org/",
		period: "May-Jun/2018",
	},
	{
		name: "Computer Programming",
		school: "Khan Academy",
		schoolLink: "https://www.khanacademy.org/",
		period: "Sep/2017",
	},
	{
		name: "Mechanical Engineering",
		school: "FEI",
		schoolLink: "https://portal.fei.edu.br/",
		period: "2005-2010",
	},
];

const educationSection = document.querySelector("#education");

educationList.forEach((item) => {
	educationSection.innerHTML += `<h3>
		${item.name}<br />
		<small>
			@ <a href="${item.schoolLink}" target="_blank">${item.school}</a> ( ${item.period} )
		</small>
		</h3>`;
});

//Certifications
const certificationsList = [
	{
		courseName: "Emotional Inteligence @ Conquer",
		img: "./assets/certificates/conquer-ie.png",
		url: "https://www.ralomach.com.br/assets/certificates/conquer-ie.pdf",
	},
	{
		courseName: "OmniStack 11 @ Rocketseat",
		img: "./assets/certificates/rocketseat-omnistack11.png",
		url:
			"https://www.ralomach.com.br/assets/certificates/rocketseat-omnistack11.pdf",
	},
	{
		courseName: "Full-stack PHP Developer @ UpInside",
		img: "./assets/certificates/upinside-phpfullstack.png",
		url:
			"https://www.ralomach.com.br/assets/certificates/upinside-phpfullstack.pdf",
	},
	{
		courseName: "Data Visualization @ freeCodeCamp",
		img: "./assets/certificates/freecodecamp-data.png",
		url:
			"https://www.freecodecamp.org/certification/ralomach/data-visualization",
	},
	{
		courseName: "Front End Libraries @ freeCodeCamp",
		img: "./assets/certificates/freecodecamp-frontend.png",
		url:
			"https://www.freecodecamp.org/certification/ralomach/front-end-libraries",
	},
	{
		courseName: "Javascript Algorithms and Data Structures @ freeCodeCamp",
		img: "./assets/certificates/freecodecamp-javascript.png",
		url:
			"https://www.freecodecamp.org/certification/ralomach/javascript-algorithms-and-data-structures",
	},
	{
		courseName: "Responsive Web Design @ freeCodeCamp",
		img: "./assets/certificates/freecodecamp-responsive.png",
		url:
			"https://www.freecodecamp.org/certification/ralomach/responsive-web-design",
	},
	{
		courseName: "Design for Web - Production and Creation @ Senac",
		img: "./assets/certificates/senac-designweb.png",
		url: "https://www.ralomach.com.br/assets/certificates/senac-designweb.pdf",
	},
];

const certificationsSection = document.querySelector("#certifications");

certificationsList.forEach((certification) => {
	certificationsSection.innerHTML += `<div class="certification">
		<h3 class="my-2">
			<span style="display: none">${certification.courseName}</span>
			<a href="${certification.url}" target="_blank" title="${certification.courseName}">
				<img class="lazy" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="${certification.img}" width="350" alt="${certification.courseName} Certification" style="width: 100%; max-width: 350px; border: 1px solid #eee;" />
			</a>
		</h3>
	</div>`;
});

//Skills
const skillsList = [
	"Bootstrap",
	"CodeIgniter",
	"CSS",
	"Gulp",
	"HTML",
	"JavaScript",
	"Laravel",
	"Linux",
	"MySQL",
	"NodeJS",
	"PHP",
	"PWA",
	"Python",
	"ReactJS",
	"React Native",
	"SQL",
];

const skillSection = document.querySelector("#skills");

skillsList.forEach((skill) => {
	skillSection.innerHTML += `<h3>${skill}</h3>`;
});

//Projects
const projectsList = [
	{
		name: "Deutschtrainer App",
		description: `App to learn common phrases of German based on <a href="https://www.dw.com/pt-br/aprender-alemão/deutschtrainer-lektionen/s-47361512" target="_blank" > Deutschtrainer by DW</a> <br /> <br /> Under construction...`,
		url: "",
		img: "./assets/images/under_construction.jpg",
		imgAlt: "Imagem de construção",
		builtWith: {
			title: "Flutter",
			logo: "./assets/images/flutter.jpg",
			alt: "Made with Flutter",
			width: 100,
		},
	},
	{
		name: "RTM Bible Courses",
		description: "Custom learning management system for RTM listeners <br /><br /> Problem solved: automatic users registration, users grade and certificates issuing",
		url: "https://cursos.transmundial.com.br",
		img: "./assets/images/screenshot-cursosrtm.png",
		imgAlt: "RTM Bible Courses",
		builtWith: {
			title: "PHP",
			logo: "./assets/images/php.png",
			alt: "Made with PHP",
			width: 75,
		},
	},
	{
		name: "Be The Hero",
		description:
			'Application "Be The Hero" <br/><br/> Problem solved: For NGO organizations to get help/funds for their needs',
		url: "https://github.com/ralomach/be-the-hero",
		img: "./assets/images/screenshot-bethehero.png",
		imgAlt: "Be The Hero Logo",
		builtWith: {
			title: "Made with NodeJS, Express, ReactJs and React Native",
			logo: "./assets/images/react.jpg",
			alt: "Made with NodeJS, Express, ReactJs and React Native",
			width: 100,
		},
	},
	{
		name: "PD23 PWA",
		description: `A progressive web app for the most accessed devotional of RTM
		<br /><br />
		Problem solved: with this web app, users can install it on their mobile and even use it offline`,
		url: "https://www.transmundial.com.br/pd23/",
		img: "./assets/images/screenshot-pd23.png",
		imgAlt: "PD23 website thumbnail",
		builtWith: {
			title: "Made with PWA",
			logo: "./assets/images/pwa.jpg",
			alt: "PWA Logo",
			width: 100,
		},
	},
	{
		name: "Letícia e Christian",
		description: `A wedding website made by hand for my dear friends<br /><br /> 
		Problem solved: a place to see all their wedding details and a form linked to a database API to control
		RSVP's confirmations`,
		url: "https://www.leticiaechristian.com.br/",
		img: "./assets/images/screenshot-lecaechris.png",
		imgAlt: "Imagem do site de casamento da Letícia e Christian",
		builtWith: {
			title: "Made with HTML5, CSS3 and JS",
			logo: "./assets/images/hcj.png",
			alt: "HTML5, CSS3 and JS Logos",
			width: 100,
		},
	},
	{
		name: "RTM Website",
		description: `Python crawler script to analyse all audio links and find broken ones
		<br /><br />
		Problem solved: found 3094 broken links out of +11k and fixed all in 11 days`,
		url: "https://www.transmundial.com.br/",
		img: "./assets/images/screenshot-rtm.png",
		imgAlt: "Imagem do site da Rádio Trans Mundial",
		builtWith: {
			title: "Made with Python",
			logo: "./assets/images/python.jpg",
			alt: "Python logo",
			width: 50,
		},
	},
	{
		name: "RTM Store",
		description: `A Woocommerce theme based on Storefront with custom CSS and JS
		<br /><br />
		Problem solved: automation of products tags, new layout and faster loading time`,
		url: "https://loja.transmundial.com.br/",
		img: "./assets/images/screenshot-lojartm.png",
		imgAlt: "Imagem do site da Loja da Rádio Trans Mundial",
		builtWith: {
			title: "Made with Woocommerce",
			logo: "./assets/images/woocommerce.jpg",
			alt: "Woocommerce logo",
			width: 175,
		},
	},
	{
		name: "Kindergarten Website",
		description: `A WordPress theme with custom front page and multilingual
		<br /><br />
		Problem solved: compare the new and
		<a href="./kindergartenhanselgretel/old/index.html" target="_blank">old version</a>`,
		url: "https://www.kindergartenhanselgretel.com.br/",
		img: "./assets/images/screenshot-kindergarten.png",
		imgAlt: "Imagem do site Kindergarten",
		builtWith: {
			title: "Made with WordPress",
			logo: "./assets/images/wordpress.jpg",
			alt: "WordPress logo",
			width: 100,
		},
	},
	{
		name: "J & Góes Odonto Website",
		description: `A simple website using CSS sprites
		<br /><br />
		Problem solved: offered a no cost hosting solution and increased SEO for the company`,
		url: "https://www.jgoesodonto.com.br/",
		img: "./assets/images/screenshot-jegoes.png",
		imgAlt: "Imagem do site J & Góes Odonto",
		builtWith: {
			title: "Made with Bootstrap",
			logo: "./assets/images/bootstrap.jpg",
			alt: "Bootstrap logo",
			width: 150,
		},
	},
	{
		name: "IBASP Website",
		description: `A WordPress theme with custom front page, events, SEO and notifications
		<br /><br />
		Problem solved: migrated from Wix to their own website with all included (minimize hosting cost, create database and optimize website)`,
		url: "https://www.ibasp.org.br/",
		img: "./assets/images/screenshot-ibasp.png",
		imgAlt: "Imagem do site da IBASP",
		builtWith: {
			title: "Made with WordPress",
			logo: "./assets/images/wordpress.jpg",
			alt: "WordPress logo",
			width: 100,
		},
	},
];

const projectsSection = document.querySelector("#projects");

projectsList.forEach((project) => {
	projectsSection.innerHTML += `<div class="project row justify-content-center align-items-center">
		<div class="col-md-6">
			<a href="${project.url}" target="_blank">
				<img class="websites-images lazy" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="${project.img}" alt="${project.imgAlt}" width="540" />
			</a>
		</div>
		<div class="col-md-6">
			<h3 class="my-2">
				<a class="websites-titles" href="${project.url}" target="_blank">${project.name}</a>
			</h3>
			<p class="websites-descriptions">${project.description}</p>
			<img  class="lazy" loading="lazy"
			src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
			data-src="${project.builtWith.logo}" width="${project.builtWith.width}" alt="${project.builtWith.alt}" title="${project.builtWith.title}" />
		</div>
	</div>
	<hr />`;
});
