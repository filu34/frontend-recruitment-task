import CustomComponent from "../CustomComponent/CustomComponent.js";
import StyleSheetLinkComponent from "./StyleSheetLinkComponent.js";

const ContentSection = function( parent ) {

	const { newCustomTag, createTagElement } = CustomComponent;

	const contentSection = newCustomTag( "content-section", parent );

	contentSection.attachShadow( { mode: "open" } );

	const contentSectionRoot = contentSection.shadowRoot;

		StyleSheetLinkComponent( contentSectionRoot );

		const articleTitle = newCustomTag( "article-title", contentSectionRoot );

		articleTitle.textContent = "Lorem Ipsum";

		const article = createTagElement( "article", contentSectionRoot );

		article.textContent = "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."

		const button = createTagElement(
			"button",
			contentSectionRoot,
			{ type: "pop-up-button" }
		);

		button.textContent = "Button";
};

export default ContentSection;
