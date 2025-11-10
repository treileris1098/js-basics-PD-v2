let klubaSaraksts = [
{vards : "renars", uzvards: "sultans",stundas : 17, loma : "leader"},
{vards : "jānis", uzvards: "sultans",stundas : 17, loma : "member"},
{vards : "roberts", uzvards: "sultans",stundas : 17, loma : "member"},
{vards : "haralds", uzvards: "sultans",stundas : 17, loma : "member"},
{vards : "maiks", uzvards: "sultans",stundas : 17, loma : "member"},
{vards : "ricards", uzvards: "sultans",stundas : 17, loma : "member"},
{vards : "emils", uzvards: "sultans",stundas : 17, loma : "leader"},
];
let sum = 0;
for(let i=0;i<klubaSaraksts.length;i++){
let biedri = klubaSaraksts[i];
if (biedri.loma == "leader") {
console.log(biedri.vards)
};
sum = sum + biedri.stundas

};
console.log("kopa",sum);