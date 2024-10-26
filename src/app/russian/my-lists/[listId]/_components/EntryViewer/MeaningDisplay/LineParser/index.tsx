import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import BracketLink from "../BracketLink";
import LabelMacro from "../LabelMacro";
//
// to [[mean]], to [[signify]]
// to [[mean]], to [[be]] [[of]] [[importance]], to [[matter]]
// {{lb|ru|legal}} [[plaintiff]]
// [[period]] ({{n-g|all senses}})
//
//
//
const LineParser: FC<{
    text: string;
}> = ({ text }) => {
    const chars: string[] = [];

    // First pass: Transform [[, ]], {{, and }} into identifiable tokens
    for (let i = 0; i < text.length; i++) {
        const char = text[i]!;
        const nextChar = text[i + 1];

        if (char === "[" && nextChar === "[") {
            chars.push("[[");
            i++; // Skip next char as it's part of the token
        } else if (char === "]" && nextChar === "]") {
            chars.push("]]");
            i++;
        } else if (char === "{" && nextChar === "{") {
            chars.push("{{");
            i++;
        } else if (char === "}" && nextChar === "}") {
            chars.push("}}");
            i++;
        } else {
            chars.push(char);
        }
    }

    const result: (string | JSX.Element)[] = [];
    let tempText = "";
    let withinBrackets = false;
    let withinMacro = false;
    let componentBuffer = "";

    for (const char of chars) {
        // Check for the start or end of [[...]] or {{...}}
        if (char === "[[") {
            // Push any accumulated text before brackets
            if (tempText) {
                result.push(tempText);
                tempText = "";
            }
            withinBrackets = true;
            componentBuffer = ""; // Start new buffer for the component text
            continue;
        }

        if (char === "]]") {
            if (withinBrackets) {
                result.push(<BracketLink token={componentBuffer} />);
                withinBrackets = false;
                componentBuffer = "";
            }
            continue;
        }

        if (char === "{{") {
            // Push any accumulated text before macros
            if (tempText) {
                result.push(tempText);
                tempText = "";
            }
            withinMacro = true;
            componentBuffer = ""; // Start new buffer for the component text
            continue;
        }

        if (char === "}}") {
            if (withinMacro) {
                result.push(<LabelMacro macroText={componentBuffer} />);
                withinMacro = false;
                componentBuffer = "";
            }
            continue;
        }

        // Add characters to the appropriate buffer
        if (withinBrackets || withinMacro) {
            componentBuffer += char;
        } else {
            tempText += char;
        }
    }

    // Push any remaining text after the last bracketed segment
    if (tempText) {
        result.push(tempText);
    }

    return <span className={classNames(styles.parser)}>{result}</span>;
};

export default LineParser;
