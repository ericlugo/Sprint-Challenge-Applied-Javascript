/* <== REFACTORED WORK ==> */
class Tabs {
  constructor(className) {
    this.tabs = document.querySelectorAll(`${className}`);
    this.tabs = Array.from(this.tabs).map((tab) => (tab = new TabLink(tab)));
    this.tabs.forEach((tab) => {
      if (tab.tabElement.classList.contains('active-tab'))
        this.currentSelection = tab.tabData;
    });
    document.body.addEventListener('click', (event) => this.select(event));
  }

  select(event) {
    if (event.target.classList.contains('tab')) {
      if (event.target.dataset.tab !== this.currentSelection) {
        this.currentSelection = event.target.dataset.tab;
        this.tabs.forEach((tab) => {
          if (this.currentSelection === 'all') tab.selectTab();
          else {
            if (this.currentSelection === tab.tabData) tab.selectTab();
            else tab.deselectTab();
          }
        });
      }
    }
  }
}

class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    this.cards = document.querySelectorAll(
      `.card[data-tab = '${this.tabData}']`,
    );
    this.cards = Array.from(this.cards).map((card) => new TabCard(card));
  }

  selectTab() {
    this.tabElement.classList.add('active-tab');
    this.cards.forEach((card) => card.selectCard());
  }

  deselectTab() {
    this.tabElement.classList.remove('active-tab');
    this.cards.forEach((card) => card.deselectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = 'flex';
  }
  deselectCard() {
    this.cardElement.style.display = 'none';
  }
}

let tabs = new Tabs('.tab');

/* <== MVP WORK BELOW ==> */
/* class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;

    if (this.tabData === 'all') {
      this.cards = document.querySelectorAll('.card');
    } else {
      this.cards = document.querySelectorAll(
        `.card[data-tab = '${this.tabData}']`,
      );
    }

    this.cards = Array.from(this.cards).map((card) => new TabCard(card));
    this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => (card.style.display = 'none'));

    this.tabElement.classList.add('active-tab');
    this.cards.forEach((card) => card.selectCard());
  }
} */

/* class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement;
  }
  selectCard() {
    this.cardElement.style.display = 'flex';
  }
} */

// let tabs = document.querySelectorAll('.tab');
// tabs.forEach((tab) => {
//   tab = new TabLink(tab);
// });
