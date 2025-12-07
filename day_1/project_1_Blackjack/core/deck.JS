function build_standard_deck(){
    const arr_1=['H','C','D','S']
    const arr_2=['1','2','3','4','5','6','7','8','9','10','J','Q','K']
    const arr_cards=[]
    for (let i = 0; i <arr_1.length ; i++) {
        for (let j = 0; j <arr_2.length ; j++) {
            const obj_card={rank:arr_2[j],
                            suite:arr_1[i]}
            arr_cards.push(obj_card)
         }
     }
     console.log(arr_cards.length);
     
     return arr_cards
 } 


// //TODO: 
// function test(){
//     console.log(build_standard_deck());
    
//  } 
//  test()