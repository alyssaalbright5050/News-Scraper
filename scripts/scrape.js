var request = require("request");
var cheerio = require("cheerio");

var scrape = function (cb) {

    request("https://www.nytimes.com"), function(err, res, body) {

    var $ = cheerio.load(body);

    var articles = [];

    $(".theme-summary").each(function(i, element) {

        var head = $(this).children(".story-heading").text().trim();
        var url = $(this).children(".story-heading").children("a").attr("href")
        var sum = $(this).children("summary").text().trim();

        if(head && sum){
            var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ") .trim();
            var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ") .trim();

            var dataToAdd = {
                headline: headNeat,
                summary: sumNeat,
                url:url
            };
            articles.push(dateToAdd);
        }
    });
        cb(articles);
    }

};

module.exports = scrape;