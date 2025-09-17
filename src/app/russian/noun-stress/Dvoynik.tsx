import * as React from "react";

const Dvoynik = () => (
    <table
        cellSpacing={0}
        cellPadding={0}
        dir="ltr"
        border={1}
        style={{
            tableLayout: "fixed",
            fontSize: "10pt",
            fontFamily: "Arial",
            width: 0,
            borderCollapse: "collapse",
            border: "medium",
        }}
    >
        <thead>
            <tr className="text-xs">
                <td></td>
                <td></td>
                <td></td>
                <td className="w-full">sing</td>
                <td></td>
                <td></td>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="w-full">plur</td>
                <td></td>
                <td></td>
            </tr>
            <tr className="text-center text-xs">
                <td>nom</td>
                <td>acc</td>
                <td>gen</td>
                <td>dat</td>
                <td>ins</td>
                <td>pre</td>
                <td></td>
                <td>nom</td>
                <td>acc</td>
                <td>gen</td>
                <td>dat</td>
                <td>ins</td>
                <td>pre</td>
            </tr>
        </thead>
        <colgroup>
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={18} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
            <col width={65} />
        </colgroup>
        <tbody>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0432\u043E\u0439\u043D\u0438\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0301\u0432\u043B\u044C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044E\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u0451\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044F\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044F\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0436\u0443\u0440\u0430\u0432\u043B\u044F\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043C\u044F\u0441\u043D\u0438\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0301\u0437\u0434\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u044B\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0434\u0440\u043E\u0437\u0434\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u0301\u043F\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u044B\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u043B\u043E\u043F\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0438\u043B\u043E\u0432\u0438\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0445\u043E\u043C\u044F\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u0301\u043B\u044C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044E\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u0451\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044F\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044F\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0438\u0441\u0435\u043B\u044F\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0301\u0441\u0442\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u044B\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u043A\u0440\u0435\u0441\u0442\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0301\u0440\u044C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044E\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u0451\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u0435\u0301\u0439\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0435\u043A\u0440\u0435\u0442\u0430\u0440\u044F\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0442\u0430\u0440\u0438\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0431\u0430\u0440\u0441\u0443\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
            <tr
                style={{
                    height: 21,
                }}
            >
                <td
                    style={{
                        borderWidth: "1px 2px 1px 3px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(230, 184, 175)",
                        fontSize: "8pt",
                        fontWeight: "bold",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u0301\u043A\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0430\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0443\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u043E\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0435\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 255, 255)",
                    }}
                >
                    <br />
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(243, 243, 243)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0438\u0301\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(234, 209, 220)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(217, 234, 211)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u043E\u0301\u0432\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(255, 242, 204)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0430\u0301\u043C\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 2px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(201, 218, 248)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0430\u0301\u043C\u0438\n            "}
                </td>
                <td
                    style={{
                        borderWidth: "1px 3px 1px 1px",
                        borderStyle: "solid",
                        color: "black",
                        borderColor: "rgb(204, 204, 204) rgb(0, 0, 0) rgb(204, 204, 204) rgb(204, 204, 204)",
                        overflow: "hidden",
                        padding: "2px 3px",
                        verticalAlign: "bottom",
                        backgroundColor: "rgb(252, 229, 205)",
                        fontSize: "8pt",
                    }}
                >
                    {"\n                \u0441\u0432\u0435\u0442\u043B\u044F\u043A\u0430\u0301\u0445\n            "}
                </td>
            </tr>
        </tbody>
    </table>
);
export default Dvoynik;
