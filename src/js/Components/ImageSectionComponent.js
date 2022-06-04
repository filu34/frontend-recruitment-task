import CustomComponent from "../CustomComponent/CustomComponent.js";
import StyleSheetLinkComponent from "./StyleSheetLinkComponent.js";

const ImageSection = function( parent, imageSourcePath ) {

	const { newCustomTag, createTagElement } = CustomComponent;

	const imageSection = newCustomTag( "image-section", parent );

	imageSection.attachShadow( { mode: "open" } );
		
		const styleSource = "./src/css/ImageSectionStyles.css";

		StyleSheetLinkComponent( imageSection.shadowRoot, styleSource );

		const imgHero = createTagElement(
			"img",
	  		imageSection.shadowRoot,
			{
				src: imageSourcePath,
				alt: "Beach, Palms & Sea"
			}
		);
};

export default ImageSection;
