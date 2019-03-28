const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];

for (let i = 20; i <= 26; i++) {
    osmosis
        .get(`https://www.ferra.ru/news/2019/03/${i}`)
        .find('.jsx-2140080109 .jsx-423516911')
        .set({
                'link': '.item > a@href',
                'title': '._2oXhZlL9gmDW4pOrJTTmwX',
                'rubric': '._3Dy8WrPhCEO9gd8w-CzNbC',
                'date': '.meta',
                'img': '.imageFlexWrapper link@href:first'
        })
        .data(function (data) {
            data.link = `https://www.ferra.ru${data.link}`;
            data.img = `https://www.ferra.ru${data.img}`;
            console.log(data);
            savedData.push(data);
        })
        .done(function () {
            fs.writeFile('data.json', JSON.stringify(savedData, null, 4), function (err) {
                if (err) console.error(err);
                else console.log('Data Saved to data.json file');
            })
        });
}
