import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import {
    amber,
    lime,
    red,
    stone,
    transparent,
    violet,
    inherit,
} from "tailwindcss/colors";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
            },
        },
        colors: {
            transparent,
            inherit,
            purple: violet,
            red: red,
            yellow: amber,
            green: lime,
            neutral: stone,
        },
    },
    plugins: [],
} satisfies Config;
