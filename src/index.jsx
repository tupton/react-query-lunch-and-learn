/** @jsx jsx */
import { jsx } from "theme-ui";
import ReactDOM from "react-dom";
import Deck from "@mdxp/core";
import MDXPresentation from "./presentation.mdx";
import theme from "./theme";
import components from "./components";

ReactDOM.render(
	<Deck components={components} theme={theme}>
		<MDXPresentation />
	</Deck>,
	document.getElementById("root")
);
