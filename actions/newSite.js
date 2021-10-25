"use strict";
exports.__esModule = true;
exports.newSite = void 0;
var sites_1 = require("../tables/sites");
var functions_1 = require("../util/functions");
var styles_1 = require("../util/styles");
function newSite() {
    var thisfocus = functions_1.pick(sites_1.focus);
    var site = {
        construction: styles_1.em(functions_1.one(functions_1.join(functions_1.pick(sites_1.construction)))),
        ruination: functions_1.join(functions_1.pick(sites_1.ruination)),
        inhabitants: styles_1.em(functions_1.join(functions_1.pick(sites_1.inhabitants))),
        direction: functions_1.pick(thisfocus.direction),
        goal: styles_1.em(functions_1.join(thisfocus.goal)),
        secret: styles_1.em(functions_1.join(functions_1.pick(sites_1.secret)))
    };
    return "\n        <p>You come across " + site.construction + ", ruined by " + site.ruination + ".</p>\n        <p>It is inhabited by " + site.inhabitants + ", who are " + site.direction + " " + site.goal + ".</p>\n        <p>There is something mysterious about the " + site.secret + ".</p>\n    ";
}
exports.newSite = newSite;
