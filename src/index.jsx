/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import ReactDOM from "react-dom";
import Deck from "@mdxp/core";
import * as components from "@mdxp/components";
import { tailwind as theme } from "@theme-ui/presets";
import Prism from "@theme-ui/prism";
import syntaxTheme from "@theme-ui/prism/presets/github.json";
import MDXPresentation from "./presentation.mdx";

const deckTheme = {
	...theme,
	styles: {
		...theme.styles,
		code: {
			...syntaxTheme,
		},
	},
};

ReactDOM.render(
	<Deck
		components={{
			...components,
			pre: ({ children }) => <React.Fragment>{children}</React.Fragment>,
			code: Prism,
		}}
		theme={deckTheme}
	>
		<MDXPresentation />
	</Deck>,
	document.getElementById("root")
);
