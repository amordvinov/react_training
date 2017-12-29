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
      const cardId = parseInt(id, 10);
      parsedLocalCards.map((localCard, i) => {
        if (localCard.id === cardId) {
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
  let cardIndex = 1;
  let existingIds = [];

  localCards.map((localCard) => {
    const cardId = parseInt(localCard.id, 10);

    if (existingIds.indexOf(cardId) === -1) {
      existingIds.push(cardId);
    }
  });

  if (existingIds.length > 0) {
    cardIndex = Math.max(...existingIds) + 1;
  }

  card.id = cardIndex;

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
    let cardIdInteger = parseInt(id, 10);

    if (localCard.id === cardIdInteger) {
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

function save(card) {
  try {
    if (card) {
      if (card.id) {
        return update(card.id, card);
      }

      return create(card);
    }

    return false;
  } catch (e) {
    return false;
  }
}

function bulkUpdate(localCards) {
  try {
    saveCards(localCards);

    return true;
  } catch (e) {
    return false;
  }
}

function destroy(id) {
  let index;
  let localCards = loadCards();

  localCards.map((localCard, cardId) => {
    let cardIdInteger = parseInt(id, 10);

    if (localCard.id === cardIdInteger) {
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

function getEmptyCard() {
  return {
    createdAt: new Date(),
    description: '',
    title: '',
    favorite: false
  };
}

const CardService = {
  get,
  create,
  update,
  save,
  destroy,
  bulkUpdate,
  getEmptyCard
};

export default CardService;
