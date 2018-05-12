const cardsFromFakeDB = [{
            id: 1,
            title: 'Jerry Rig',
            notes: 'Bacon ipsum dolor sit amet salami ham hock ham',
            priority: 'Kinda Important',
            status: 'Queue',
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

export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve(cardsFromFakeDB.slice())
  }, 500)
})

export const addCardToFakeXHR = (item) => new Promise((resolve, reject) => {
  setTimeout( () => {
    item.id = newId;
    newId++;
    cardsFromFakeDB.push(item);
    console.log('itemFromFakeDB', cardsFromFakeDB)
    resolve(cardsFromFakeDB)
  },500)
})