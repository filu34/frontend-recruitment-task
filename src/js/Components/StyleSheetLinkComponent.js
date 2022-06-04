import CustomComponent from "../CustomComponent/CustomComponent.js";

const StyleSheetLinkComponent = function( parent, source ) {

	const { createTagElement } = CustomComponent;

	const linkElementAttributes = {
        rel: "stylesheet",
        type: "text/css",
        href: source
		//"ParagraphComponent.css",
    };

    createTagElement(
        "link",
        parent,
        linkElementAttributes,
    );
};

export default StyleSheetLinkComponent;
