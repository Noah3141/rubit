import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors, { lime, stone, transparent, inherit, sky, yellow } from "tailwindcss/colors";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: [...fontFamily.sans],
                serif: "times new roman",
            },
        },
        colors: {
            transparent,
            inherit,
            red: {
                50: "#FDE8E8",
                100: "#FACCCC",
                200: "#F39B9B",
                300: "#EC6969",
                400: "#E43A3A",
                500: "#C91E1E",
                600: "#AB1717",
                700: "#881111",
                800: "#640C0C",
                900: "#450707",
                950: "#330505",
            },
            orange: {
                50: "#FFF3E5",
                100: "#FFE7CC",
                200: "#FFCF99",
                300: "#FFB866",
                400: "#FFA033",
                500: "#FF8800",
                600: "#D17000",
                700: "#A85A00",
                800: "#7A4100",
                900: "#522C00",
                950: "#381E00",
            },
            green: lime,
            neutral: colors.stone,
            blue: sky,
            yellow,
        },
    },
    plugins: [],
} satisfies Config;
