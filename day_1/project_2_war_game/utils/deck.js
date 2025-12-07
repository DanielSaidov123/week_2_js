
function create_card(rank, suite) {
    let value=0
    if(rank=='J'){rank=11}
    else if(rank=='Q'){value=12 }
    else if(rank=='K'){value=13 }
    else if(rank=='A'){value=14 }
    return {rank, suite, value}

}

function compare_cards(p1_card, p2_card) {
    if(p1_card.value>p2_card.value){return 'p1' }
    else if(p2_card.value>p1_card.value){return 'p2' }
    else{return 'WAR'}

}


function create_deck() {}
function shuffle(deck) {}
