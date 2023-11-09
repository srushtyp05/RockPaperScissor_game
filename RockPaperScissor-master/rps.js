const body=document.querySelector("body")
const choice_container=document.querySelector("div.choices")
const rock_option=document.querySelector("img#rock")
const paper_option=document.querySelector("img#paper")
const scissor_option=document.querySelector("img#scissor")
const result_container=document.querySelector('.result h1')
const user=document.querySelector("#user")
const comp=document.querySelector("#computer")

let user_score=0
let computer_score=0

const random=()=>{
        const val=Math.floor(Math.random().toFixed(1)*3)
    switch (val){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default :
            return "paper"
    }
}
const game=(user_choice)=>{
    const computer_choice=random()
    if(user_choice==computer_choice)
    return 'This is a tie'

    switch(user_choice){
        case "rock":
            switch(computer_choice){
                case "paper":
                    computer_score++
                return 'Paper beats Rock....YOU LOST THE GAME'
                case "scissor":
                    user_score++
                    return 'Rock beats Scissor....YOU WIN THE GAME'
            }
        case "paper":
            switch(computer_choice){
                case "rock":
                    user_score++
                return 'Paper beats Rock....YOU WIN THE GAME'
                case "scissor":
                    computer_score++
                    return 'Scissor beats Paper.... YOU LOST THE GAME'
            }
        case "scissor":
            switch(computer_choice){
                case "rock":
                    computer_score++
                return 'Rock beats Scissor....YOU LOST THE GAME'
                case "paper":
                    user_score++
                    return 'Scissor beats Paper....YOU WIN THE GAME'
            } 
        }
}

const refreshBoard=()=>{
   
    user.innerHTML=user_score
    comp.innerHTML=computer_score
}

rock_option.addEventListener('click',()=>{
    console.log()
    result_container.innerHTML=game('rock')
    refreshBoard()
})
paper_option.addEventListener('click',(e)=>{
    console.log()
    result_container.innerHTML=game('paper')
    refreshBoard()
})
scissor_option.addEventListener('click',(e)=>{
    console.log()
    result_container.innerHTML=game('scissor')
    refreshBoard()
})
