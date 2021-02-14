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
  }
];

const printToDom = (divId, textToShow) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToShow;
}

const febJournalBuilder = (taco) => {
  let showDom = '';
  taco.forEach((item, i) => {
    showDom += `<div class="card m-1 style="width: 12rem;" id=${i}">
                  <div class="card-header">
                    ${item.date}
                  </div>
                  <div class="card-body">
                    <p class="card-title">${item.note}</p>
                    <p class="card-text">${item.note2}</p>
                    <button href="#" id="${item.id}"class="btn btn-danger">Delete</button>
                  </div>
                </div>`
  })
  printToDom('#showJournal', showDom);
}

const init = () => {
  febJournalBuilder(febJournal);
}

init();
