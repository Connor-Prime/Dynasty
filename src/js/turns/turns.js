import prand from 'pure-rand';
import {App} from "../../App.jsx";
import {shuffle} from 'randy'
import { renderPage } from '../../main.jsx';
import { originOptions ,originOptionsByTheme} from './origins.js';
import { midtaleOptions, midtaleOptionsByTheme} from './truimphAndStruggles.js';
import { addTurn , getTurn, getTheme, setTheme} from '../../main.jsx';
import { newKingOptions ,newKingOptionsbyTheme} from './newKing.js';


function setPage(_stability, _might){

    let turn = addTurn();

    let title=""
    let question1=""
    let question2=""
    if(turn==0){
        title="Origin";
        question1="What is the cloth from which the empire was cut?"
        question2="Where did it all begin?"
    }else if (turn==1){
        title="The New Age Begins";
        question1="And when this time came to pass, how will it defined?"
        question2="What were the truimphs and struggles of the day?"
    }
    else if (turn==2){
        title="The Reigns Ends";
        question1="All things pass, as does the reign of the King."
        question2="How does their tale end?"
    }


    let pageOptions = generateOptions();
    

    renderPage(title,question1,question2,pageOptions,_stability,_might)
}


let seed =0;

function generateOptions(){

    let turn = getTurn()
    let tempOptions=[]


    if (turn==0){
         tempOptions= [...originOptionsByTheme];
    }else if (turn ==1){
        let theme = getTheme()

        console.log(theme)
        tempOptions =[...midtaleOptionsByTheme[theme]]
    }else if (turn ==2){
        let theme = getTheme()
        console.log(theme)
        tempOptions =[...newKingOptionsbyTheme[theme]]
    }


    tempOptions = shuffle(tempOptions);


    let option1= tempOptions.pop();

    let option2 = tempOptions.pop();

    let option3 = tempOptions.pop();

    let optionsOutput = [option1,option2,option3]
    return optionsOutput;
}

export default setPage


