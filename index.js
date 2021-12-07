const PORT = 8000
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url =  'https://www.cnews.fr/';

axios(url)
    .then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        const articles = [];

        $('.dm-news-title', html).each(function() {
            const title = $(this).text();
            articles.push({
                title
            });
        })
        console.log(articles);
    })
    .catch(err => console.log(err));


app.listen(PORT, () => console.log(`server running on Port : ${PORT}`));
