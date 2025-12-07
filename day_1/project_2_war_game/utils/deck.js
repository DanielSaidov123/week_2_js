
function create_card(rank, suite) {
    let value=0
    if(rank=='J'){value=11}
    else if(rank=='Q'){value=12 }
    else if(rank=='K'){value=13 }
    else if(rank=='A'){value=14 }
    else{value=Number(rank)}
    return {rank, suite, value}

}

function compare_cards(p1_card, p2_card) {
    if(p1_card.value>p2_card.value){return 'p1' }
    else if(p2_card.value>p1_card.value){return 'p2' }
    else{return 'WAR'}
}

function create_deck() {
    const arr_cards=[]
    const arr_1=['H', 'C', 'D', 'S']
    const arr_2=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    for (let i = 0; i <arr_1.length ; i++) {
        for (let j = 0; j <arr_2.length ; j++) {
            const card=create_card(arr_2[j],arr_1[i])
                arr_cards.push(card)
         }
     }
     
     return arr_cards
}

function shuffle(deck) {}
