var eggIngrd = ['egg', 'oil', 'salt', 'blackpepper'];
var teaIngrd = ['water', 'suger', 'patti', 'salt'];
var pakoraIngrd = ['oil', 'baisan', 'water', 'salt'];
var lachaParantha = ['flour', 'water', 'salt', 'banaspati'];
var presentIngrd = 0,
    notPresentIngrd = 0,
    variable = 0;
var item = [];
var presentIngArray = [];
var notPresentIngArray = [];
/***************************************** empty variables **********************************************/
function setEmpty() {
    presentIngArray.splice(0);
    notPresentIngArray.splice(0);
    presentIngrd = 0;
    notPresentIngrd = 0;
    variable = 0;
}

/***************************************** output function **********************************************/

function checkEmptyArray(array, item_name) {
    if (array === undefined || !array.length) {
        console.log("you have " + presentIngrd + " ingredient which is " + presentIngArray + " to cook " + item_name);
    }
    else {
        console.log("you have " + presentIngrd + " ingredient which is " + presentIngArray + " to cook " + item_name + " you doesn't have " + array.length + " ingrediant which is " + array);
    }
}

/***************************************** UserInput Items **********************************************/

var quantity = prompt("enter no of items")
for (var i = 0; i < quantity; i++) {
    item[i] = prompt("enter your ingredients");
}

/***************************************** checking Ingredients **********************************************/

if (item.indexOf("egg") !== -1) {

    for (var i = 0; i < item.length; i++) {
        variable = eggIngrd.indexOf(item[i])
        if (variable !== -1) {
            presentIngrd++;
            presentIngArray.push(eggIngrd[variable]);
            eggIngrd.splice(variable, 1);
        }
        else {
            notPresentIngrd++;
        }
    }

    checkEmptyArray(eggIngrd, 'egg');
}
setEmpty();
if (item.indexOf("patti") !== -1) {

    for (var i = 0; i < item.length; i++) {
        variable = teaIngrd.indexOf(item[i])
        if (variable !== -1) {
            presentIngrd++;
            presentIngArray.push(teaIngrd[variable]);
            teaIngrd.splice(variable, 1);
        }
        else {
            notPresentIngrd++;
        }
    }

    checkEmptyArray(teaIngrd, 'tea')
}
setEmpty();
if (item.indexOf("baisan") !== -1) {

    for (var i = 0; i < item.length; i++) {
        variable = pakoraIngrd.indexOf(item[i])
        if (variable !== -1) {
            presentIngrd++;
            presentIngArray.push(pakoraIngrd[variable]);
            pakoraIngrd.splice(variable, 1);
        }
        else {
            notPresentIngrd++;
        }
    }

    checkEmptyArray(pakoraIngrd, "pakora");
}
setEmpty();
if (item.indexOf("flour") !== -1) {

    for (var i = 0; i < item.length; i++) {
        variable = lachaParantha.indexOf(item[i])
        if (variable !== -1) {
            presentIngrd++;
            presentIngArray.push(lachaParantha[variable]);
            lachaParantha.splice(variable, 1);

        }
        else {
            notPresentIngrd++;
        }
    }
    checkEmptyArray(lachaParantha, "lachaparantha");
}

else {
    console.log("You doesn't have main ingredient which is used to cook any think like egg, baisan, patti, flour");
}