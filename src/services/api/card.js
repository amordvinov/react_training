/**
 * TODO: add using of external REST API
 */

/*
* TODO: add using of Promises
* */
import cards from './data/card-fixtures.json';

const loadCards = (id) => {
  try {
    const localCards = localStorage.getItem('cards');
    let parsedLocalCards;

    if (localCards === null) {
      parsedLocalCards = cards || [];

      saveCards(parsedLocalCards);

      console.log('data was loaded from json file');
    } else {
      parsedLocalCards = JSON.parse(localCards);

      console.log('data was loaded from localStorage');
    }

    if (id !== undefined && id >= 0) {
      let card;
      parsedLocalCards.map((localCard, i) => {
        if (localCard.id === id) {
          card = localCard;
        }
      });

      return card;
    }

    return parsedLocalCards;
  } catch (err) {
    return undefined;
  }
};

const saveCards = (localCards) => {
  try {
    const serializedCards = JSON.stringify(localCards);
    localStorage.setItem('cards', serializedCards);
  } catch (err) {
    // Ignore any errors
  }
};

function get(id) {
  return loadCards(id);
}

function create(card) {
  let localCards = loadCards();
  let result = true;

  localCards.push(card);

  try {
    saveCards(localCards);

    return result;
  } catch (e) {
    return false;
  }
}

function update(id, card) {
  let localCards = loadCards();
  let result = false;

  localCards.map((localCard, cardId) => {
    if (localCard.id === id) {
      localCards[cardId] = card;
      result = true;
    }
  });

  try {
    saveCards(localCards);

    return result;
  } catch (e) {
    return false;
  }
}


function bulkUpdate(cards) {
  try {
    saveCards(cards);

    return true;
  } catch (e) {
    return false;
  }
}

function destroy(id) {
  let index;
  let localCards = loadCards();

  localCards.map((localCard, cardId) => {
    if (localCard.id === id) {
      index = cardId;
    }
  });

  if (index !== undefined) {
    localCards = [
      ...localCards.slice(0, index),
      ...localCards.slice(index + 1)
    ];

    try {
      saveCards(localCards);

      return true;
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

const CardService = {
  get,
  create,
  update,
  destroy,
  bulkUpdate
};

export default CardService;
