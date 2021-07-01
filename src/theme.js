import { deep as theme } from "@theme-ui/presets";
import syntaxTheme from "@theme-ui/prism/presets/night-owl.json";

export default {
	...theme,
	styles: {
		...theme.styles,
		pre: {
			...theme.styles.pre,
			padding: "2rem",
		},
		code: {
			...syntaxTheme,
		},
	},
};
