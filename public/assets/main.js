
const divResult = document.querySelector('#cards');
let score = 0;
let count = document.querySelector(".score");
//initialisation du jeu (tableau vide)
let gameTab = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];

let gameTabResult = generateRandomTab(); //genration aléatoire des images
let previousSelect = [];
let numberDisplay = 0;
let ready = true;
//affichage du tableau
displayTab();

//crée les "boutons" ou dos des images
function displayTab(){
    let tag = "";

    for(let i = 0; i < gameTab.length; i++){
        tag += "<div>";
        for(let j = 0; j < gameTab[i].length; j++){
            if(gameTab[i][j] === 0){
                tag += "<button class='btn btn-primary m-2' style='width:150px;height:150px' onClick='check(\""+i+"-"+j+"\")'>Cliquez pour voir l'image </button>";
            } else{
                tag += "<img src='"+getImg(gameTab[i][j])+"'style='width:150px;height:150px' class='m-2'>";
            }    
        }
        tag += "</div>";
    }
   divResult.innerHTML = tag; 
}
//affecte les images au bouton
function getImg(value){
    let img= "assets/img/";
    switch(value){
        case 1: img += "bellatrix.jpeg";
        break
        case 2: img += "dumbeldore.jpeg";
        break;
        case 3: img += "falloeil.jpeg";
        break
        case 4: img += "harry.jpeg";
        break
        case 5: img += "rone.jpeg";
        break
        case 6: img += "hermione.jpeg";
        break      
        case 7: img += "voldemort.jpeg";
        break      
        case 8: img += "agrid.jpeg";
        break      
        default : console.log("non pris en compte");
    }
    return img;
}
// verifie si le bouton est déjà cliqué et garde le dernier clic pour comparer
function check(element){
   numberDisplay++;
   if(ready){
   let line = element.substr(0,1);
   let column = element.substr(2,1);

   gameTab[line][column] = gameTabResult[line][column];

   displayTab();

        if(numberDisplay > 1){
            ready = false;

            setTimeout(()=>{
            if(gameTab[line][column] !== gameTabResult[previousSelect[0]][previousSelect[1]]){
                    gameTab[line][column] = 0;
                    gameTab[previousSelect[0]][previousSelect[1]] = 0;
                }
                displayTab();
                ready = true;
                numberDisplay = 0;
            },500)
                
        }else {
            previousSelect = [line,column];
        }
    }
}
//genration aléatoire des images dans le tableau
function generateRandomTab(){
    let tab = [];
    let countImgTab = [0,0,0,0,0,0,0,0];
    for(let i = 0; i< 4; i++){
        let line = [];
        for(let j = 0; j< 4; j++){
            let ending = false;
            while(!ending){
                let randomImg = Math.floor(Math.random()*8);
                if(countImgTab[randomImg] < 2){
                    line.push(randomImg+1);
                    countImgTab[randomImg]++;
                    ending = true;
                }
            }
    }
        tab.push(line);

    }
    return tab;
}