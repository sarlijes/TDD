class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  update() {
    // Overridden
    return;
  }
}

class OtherItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn -= 1;

    if (this.quality >= 50) {
      return;
    }
    if (this.sellIn < 0 && this.quality < 0) {
      return;
    }

    if (this.sellIn < 0 && this.quality === 0) {
      this.quality = 0;
      return;
    }
    this.quality--;
    if (this.sellIn <= 0) {
      this.quality--;
    }
  }
}

class LegendaryItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, 80);
  }

  update() {
    return;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn -= 1;

    if (this.quality >= 50) {
      return;
    }
    this.quality++;

    if (this.sellIn <= 0) {
      this.quality++;
    }
  }
}

class ConcertTickets extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.sellIn > 10) {
      this.quality = this.quality + 1;
    }
    else if ( this.sellIn > 5 && this.sellIn < 11) {
      this.quality = this.quality + 2;
    }
    else if (this.sellIn > 0 && this.sellIn < 6) {
      this.quality = this.quality + 3;
    } else {
      this.quality = 0;
    }
    if (this.quality >= 50) {
      this.quality = 50;
    }
    this.sellIn = this.sellIn -1;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.update());
    return this.items;
  }
}

// eslint-disable-next-line no-undef
module.exports = {
  Item,
  Shop,
  AgedBrie,
  ConcertTickets,
  LegendaryItem,
  OtherItem
};
