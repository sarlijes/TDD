class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
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

class OtherItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
}

class LegendaryItem extends Item {
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

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super("Aged Brie", sellIn, quality);
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

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof AgedBrie
        || this.items[i] instanceof ConcertTickets) {
        this.items[i].update();
        return this.items;
      }

    }

    for (var i = 0; i < this.items.length; i++) {
      // eslint-disable-next-line max-len
      if (this.items[i].name !== "Aged Brie"
      && this.items[i].name !== "Backstage passes to a TAFKAL80ETC concert") {
        // Only "Sulfuras, Hand of Ragnaros" is handled here
        if (this.items[i].quality > 0) {
          if (this.items[i].name !== "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
        //
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name !== "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name !== "Aged Brie") {
          if (this.items[i].name !== "Backstage passes to a TAFKAL80ETC concert") {
            if (this.items[i].quality > 0) {
              if (this.items[i].name !== "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

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
