import CustomComponent from "./CustomComponent/CustomComponent.js";

// Why do I use "const functionName = function() {}" convention.
// Arrow functions are nice and neat, but not clearly visible and readable as function();
// Also I want named function being const to don't let it being overwritten from somewhere else.

const main = function() {

	console.log( "Hello World!" );

	const { newCustomTag, createTagElement } = CustomComponent;

	const body = document.body;
	const title = document.getElementsByTagName( "title" );
	title[0].textContent = "Filip Szettel - Recruitment task";

	console.log( title[0].textContent );

	const section = createTagElement( "section", body, { type: "main-section" } );
		const imageSection = newCustomTag( "image-section", section );
		const imgHero = createTagElement( 
			"img", 
			imageSection, 
			{ 
				src: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg", 
				alt: "Beach, Palms & Sea" 
			}
		);

		const contentSection = newCustomTag( "content-section", body );

			const articleTitle = newCustomTag( "article-title", contentSection );
				articleTitle.textContent = "Lorem Ipsum";

			const article = createTagElement( "article", contentSection );
				article.textContent = "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."

			const button = createTagElement( "button", contentSection, { type: "pop-up-button" } );
				button.textContent = "Button";
};

window.onload = main();
