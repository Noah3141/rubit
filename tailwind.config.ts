import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { lime, stone, transparent, inherit } from "tailwindcss/colors";

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
            purple: {
                50: "#F2E9F6",
                100: "#E7D7EF",
                200: "#CDACDD",
                300: "#B684CC",
                400: "#9C59BA",
                500: "#7E409B",
                600: "#6A3682",
                700: "#582D6C",
                800: "#442253",
                900: "#32193D",
                950: "#26132F",
            },
            violet: {
                50: "#F9F0F9",
                100: "#F3E2F3",
                200: "#E7C5E7",
                300: "#DCA8DB",
                400: "#CE87CD",
                500: "#C36AC1",
                600: "#B74DB5",
                700: "#9C3F9A",
                800: "#7F347E",
                900: "#60275F",
                950: "#2F132F",
            },
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
            neutral: stone,
        },
    },
    plugins: [],
} satisfies Config;
