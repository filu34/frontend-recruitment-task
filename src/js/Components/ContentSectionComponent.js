import CustomComponent from "../CustomComponent/CustomComponent.js";
import StyleSheetLinkComponent from "./StyleSheetLinkComponent.js";
import ButtonComponent from "./ButtonComponent.js";

const ContentSection = function( parent ) {

	const { newCustomTag, createTagElement } = CustomComponent;

	const ContentSectionRoot = () => {
		const contentSection = newCustomTag( "content-section", parent );
		contentSection.attachShadow( { mode: "open" } );

  		return contentSection.shadowRoot;
	};

	const ArticleTitle = ( parent ) => {
		const articleTitle = newCustomTag( "article-title", parent );
		articleTitle.textContent = "Lorem Ipsum";
		
		return articleTitle;
	};

	const Article = ( parent ) => {
		const article = createTagElement( "article", parent );
		article.textContent = "Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required."

		return article;
	};

	// HTML Structure of ContentSection.
	const contentSectionRoot = ContentSectionRoot();

		const stylesSource = "./src/css/ContentSectionStyles.css";
		StyleSheetLinkComponent( contentSectionRoot, stylesSource );

		ArticleTitle( contentSectionRoot );
		
		Article( contentSectionRoot );

		const Button = ButtonComponent( "Button", contentSectionRoot, "pop-up-button" );
};

export default ContentSection;
