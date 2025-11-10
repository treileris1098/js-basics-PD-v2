let books=[
{
    nosaukums: "vīramāte",autors: "salija",isAvailable: "ir piejama",
},
{nosaukums: "nodevejs",autors: "armands",isAvailable: "nav-piejama",}
];


function title (){
for(let i=0;i<books.length;i++){
let gramatas  = books[i]
console.log(gramatas.nosaukums);

};
};
function author (){
for(let i=0;i<books.length;i++){
let gramatas  = books[i]
console.log(gramatas.autors);

};
};
author()
title()