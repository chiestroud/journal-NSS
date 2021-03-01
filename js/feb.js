const febJournal = [
  {
    date: new Date('Feb 1 2021'),
    note: 'Ternary Operator - condition ? exprIfTrue : exprIfFalse',
    note2: 'Spread syntax(...) it solved the mystery of not being able to iterate array from different array from .push method. wow',
    id: 1,
  },
  {
    date: new Date('Feb 2 2021'),
    note: 'Front End consists of three types - 1.UX/UI Design - CSS processor, some JS, SASS Bootstrap etc. 2.Middle person - focus on functionality. 3. Back person - take things and merge to back end',
    note2: 'ES6 Module - Module helps to Simplify things & Data becomes private',
    id: 2,
  },
  {
    date: new Date('Feb 6 2021'),
    note: 'Group project',
    note2: 'First Group Project',
    id: 6,
  },
  {
    date: new Date('Feb 8 2021'),
    note: 'Group project continues - best team',
    note2: '',
    id: 8,
  },
  {
    date: new Date('Feb 9 2021'),
    note: 'Group project continues',
    note2: '',
    id: 9,
  },
  {
    date: new Date('Feb 13 2021'),
    note: 'when only 1 js file needs to be shared - important to use location.pathname',
    note2: '',
    id: 13,
  },
  {
    date: new Date('Feb 15 2021'),
    note: "snow day, but watched video about setting up webpack and modules",
    note2: '',
    id: 15,
  },
  {
    date: new Date('Feb 16 2021'),
    note: "presentation of our group project. Went pretty well",
    note2: '',
    id: 16,
  },
  {
    date: new Date('Feb 18 2021'),
    note: "new group. assignment was bear watcher!",
    note2: '',
    id: 18,
  },
  {
    date: new Date('Feb 20 2021'),
    note: "Almost Amazon project started. Excited to learn firebase and authentication",
    note2: 'Firebase code has to stay in .env file so it will be ignored. API key could get hacked if you accidentally push this up.',
    id: 20,
  },
  {
    date: new Date('Feb 22 2021'),
    note: "Postman - tool to test your request. 400 error is error in client side, 500 error is server error, 200 is OK",
    note2: "Starting Promise tomorrow - [async] function returns promise and [await] waits for promise to be resolved",
    id: 22,
  },
  {
    date: new Date('Feb 23 2021'),
    note: "Promise! if you don't catch error, your app will BREAK",
    note2: "Object.value/object.keys => these are used to change object into array",
    id: 23,
  },
  {
    date: new Date('Feb 25 2021'),
    note: "Tamagotchi project. Learned a new way to import different CSS files into main.scss",
    note2: "Excited for the new project, but it's getting tougher",
    id: 25,
  },
  {
    date: new Date('Feb 27 2021'),
    note: "Bookclub - readme is so important use image!!!!",
    note2: "Firebase - you can't patch something that don't have key so id is necessary. Also I found out that e.preventDefault() bypasses the 'required' so no wonder my form was allowing blank form to be submitted. Lastly, if you want to search through something on firebase, you need to add RULES",
    id: 27,
  }
];

const printToDom = (divId, textToShow) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToShow;
}

const febJournalBuilder = (taco) => {
  let showDom = '';
  taco.forEach((item, i) => {
    showDom += `<div class="card col-3 m-1" id=${i}">
                  <div class="card-header">
                    ${item.date}
                  </div>
                  <div class="card-body">
                    <p class="card-title">${item.note}</p>
                    <p class="card-text">${item.note2}</p>
                    <button type="button" href="#" id="${i}" class="btn btn-danger">Delete</button>
                  </div>
                </div>`
  })
  printToDom('#showJournal', showDom);
}

const buttonFunc = (e) => {
  const buttonId = e.target.id;
  const buttonType = e.target.type;
  if (buttonType === 'button') {
    document.querySelector('#show').innerHTML = `<p>You closed id # ${buttonId}</p>`
    febJournal.splice(buttonId, 1);
  } 
  febJournalBuilder(febJournal);
}

const handleButtonClick = (e) => {
  document.querySelector('#feb').addEventListener('click', buttonFunc);
}

const init = () => {
  febJournalBuilder(febJournal);
  handleButtonClick();
}

init();
