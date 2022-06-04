import CustomComponent from "./CustomComponent/CustomComponent.js";
import ImageSection from "./Components/ImageSectionComponent.js";
import ContentSection from "./Components/ContentSectionComponent.js";

// Why do I use "const functionName = function() {}" convention.
// Arrow functions are nice and neat, but not clearly visible and readable as function();
// Also I want named function being const to don't let it being overwritten from somewhere else.

const main = function() {

	const { createTagElement } = CustomComponent;

	const body = document.body;
	const title = document.getElementsByTagName( "title" );
	title[0].textContent = "Filip Szettel - Recruitment task";

	const section = createTagElement( 
		"section",
		body,
		{ type: "main-section" } 
	);
		
		const imagePath = "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg";

		ImageSection( section, imagePath );
		ContentSection( section );
};

window.onload = main();
