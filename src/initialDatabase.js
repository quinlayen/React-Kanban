const cardsFromFakeDB = [{
            id: 1,
            title: 'Jerry Rig',
            notes: 'Bacon ipsum dolor sit amet salami ham hock ham',
            priority: 'Kinda Important',
            status: 'In Queue',
            created_by: 'Peter',
            assigned_to: 'Anyone Except Peter'
  },
  {
            id: 2,
            title: 'Learn React',
            notes: 'Bacon ipsum dolor sit amet salami ham hock ham',
            priority: 'Very Freaking Important',
            status: 'In Progress',
            created_by: 'Peter',
            assigned_to: 'Peter'
  },
  {
            id: 3,
            title: 'Sell House',
            notes: 'Bacon ipsum dolor sit amet salami ham hock ham',
            priority: 'Important',
            status: 'Completed',
            created_by: 'Peter',
            assigned_to: 'Gary Gulahi'
  }
]

let newId = 4



// export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
//   setTimeout( () => {
//     console.log('card',card)
//     //card.id = newId;
//     newId++;
//     cardsFromFakeDB.push(card);
//     //console.log('itemFromFakeDB', cardsFromFakeDB)
//     resolve(cardsFromFakeDB)
//   },500)
//})