let { Readability } = require('./index.js');
let { JSDOM } = require('jsdom');

const url = 'https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html';

(async () => {
    const resp = await fetch(url);
    const html = Buffer.from(await resp.arrayBuffer()).toString('utf8');
    const doc = new JSDOM(html);
    const reader = new Readability(doc.window.document);
    const article = reader.parse();
    console.log(article);
})();
