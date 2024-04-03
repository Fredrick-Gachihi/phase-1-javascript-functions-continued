// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
   
}

function wrapAdjective(flair = '*'){
    return function(adjective ='Special'){
    return `You are ${flair}${adjective}${flair}!`;
    }
}
const encouragingPromptFunction1 = wrapAdjective("*")
console.log(encouragingPromptFunction1("a hardworking student"));

const encouragingPromptFunction2 = wrapAdjective("!!!")
console.log(encouragingPromptFunction2("a hardworking student"));
