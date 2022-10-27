//Required package
const pdf = require("pdf-creator-node");
const fs = require("fs");

const createPDF = async ({ data, title, template, fileName = "output", orientation = "portrait" }) => {
    // https://www.npmjs.com/package/pdf-creator-node
    // landscapelandscape or portrait


    // Read HTML Template
    const html = template
    const options = {
        format: "A4",
        orientation,
        border: "10mm",
        header: {
            height: "15mm",
            contents: `<div style="text-align: center;">${title}</div>`
        },
        footer: {
            height: "18mm",
            contents: {
                // first: 'Cover page',
                // 2: 'Second page', // Any page number is working. 1-based index
                default: `<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>`, // fallback value
                // last: 'Last Page'
            }
        }
    };

    // const users = [
    //     {
    //         name: "ismİL",
    //         age: "26",
    //     },
    //     {
    //         name: "ŞABAN",
    //         age: "26",
    //     },
    //     {
    //         name: "Vitthal",
    //         age: "26",
    //     },
    // ];

    const document = {
        html: html,
        data: data,
        path: `../output/${fileName}.pdf`,
        type: "",
    };

    pdf
        .create(document, options)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = createPDF;