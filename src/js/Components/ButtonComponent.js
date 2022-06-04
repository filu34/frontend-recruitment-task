import CustomComponent from "../CustomComponent/CustomComponent.js";

const ButtonComponent = function( name, parent, type ) {
	
	const { createTagElement } = CustomComponent;
	
 	const button = createTagElement(
		"button",
		parent,
		{ type: type }
	);

	button.textContent = `${name}`;

	return button;
};

export default ButtonComponent;
