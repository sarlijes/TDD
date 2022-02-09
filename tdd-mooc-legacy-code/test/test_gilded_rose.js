/* eslint-disable max-len */
// eslint-disable-next-line no-undef
const { expect } = require("chai");
// eslint-disable-next-line no-undef
const { Shop, Item, AgedBrie, ConcertTickets, LegendaryItem, OtherItem } = require("../src/gilded_rose.js");

describe("Gilded Rose - general", function () {
  it("returns the Item's name", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("no items if Shop was created without items (empty list)", function () {
    const gildedRose = new Shop([]);
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
    expect(items[0]).to.equal(undefined);
  });

  it("no items if Shop was created without items parameter", function () {
    const gildedRose = new Shop();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
    expect(items[0]).to.equal(undefined);
  });

  it("Shop's item has correct data type", function () {
    const gildedRose = new Shop([new Item("t", 1, 0)]);
    expect(gildedRose.items[0] instanceof Item).to.be,true;
  });

});

describe("Aged Brie", function () {

  let gildedRose;
  let items;
  const itemName = "Aged Brie";

  it("the correct product name is returned", function () {
    gildedRose = new Shop([new AgedBrie(itemName, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
  });

  describe("Quality is updated", function () {

    it("When sellIn is negative - quality gets better", function () {
      let gildedRose = new Shop([new AgedBrie(itemName, -1, 12)]);
      let items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(14);
    });

    it("when sellIn is 0, and quality is 7, the quality goes up by 2", function () {
      const gildedRose = new Shop([new AgedBrie(itemName, 0, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(9);
    });

    it("When sellIn is greater than 0 and quality greater than 50, quality stays the same", function () {
      gildedRose = new Shop([new AgedBrie(itemName, -5, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });

    it("When quality is 0, it's raised to 1", function () {
      gildedRose = new Shop([new AgedBrie(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(1);
    });

    it("When quality is max, it stays at max", function () {
      gildedRose = new Shop([new AgedBrie(itemName, 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });

  });

  describe("SellIn is updated", function () {

    it("When sellIn is 0", function () {
      gildedRose = new Shop([new AgedBrie(itemName, 0, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-1);
    });

    it("When sellIn is negative - it's still decreased", function () {
      let gildedRose = new Shop([new AgedBrie(itemName, -1, 12)]);
      let items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-2);
    });

    it("When sellIn is 7", function () {
      gildedRose = new Shop([new AgedBrie(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(6);
    });

  });

});

describe("Backstage passes to a TAFKAL80ETC concert", function () {
  let gildedRose;
  let items;
  const passes = "Backstage passes to a TAFKAL80ETC concert";

  it("the correct product is returned", function () {
    gildedRose = new Shop([new ConcertTickets(passes, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
  });

  describe("Quality is updated", function () {

    it("when sellIn is negative, the quality is 0", function () {
      gildedRose = new Shop([new ConcertTickets(passes, -15, 25)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });

    it("when sellIn is 0, and quality is 7, the quality goes to 0", function () {
      const gildedRose = new Shop([new ConcertTickets(passes, 0, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });

    it("when sellIn is 5, and quality is 49, the quality goes to 50", function () {
      const gildedRose = new Shop([new ConcertTickets(passes, 5, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });

    it("When sellIn is 6, and quality is 6, the quality goes to 8", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 6, 6)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(8);
    });

    it("When quality is 0, it goes to 2", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });

    it("When quality is max, it stays at max", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });

    it("When quality is 40, it goes to 43", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 5, 40)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(43);
    });

    it("when sellIn is 1, and quality is 7, the quality goes to 10", function () {
      const gildedRose = new Shop([new ConcertTickets(passes, 1, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(10);
    });

    it("When sellIn is 11, and quality is 6. the quality goes to 7", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 11, 6)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(7);
    });

    it("When sellIn is 14, and quality is 6. the quality goes to 7", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 10, 6)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(8);
    });

  });

  describe("SellIn is updated", function () {

    it("When sellIn goes to 0 (= after the concert has taken place), quality goes to 0", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 1, 25)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(0);
    });

    it("When sellIn is 0, quality goes negative", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 0, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-1);
    });

    it("When sellIn is 7, quality goes to 6", function () {
      gildedRose = new Shop([new ConcertTickets(passes, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(6);
    });

  });
});

describe("Sulfuras, Hand of Ragnaros", function () {
  let gildedRose;
  let items;
  const itemName = "Sulfuras, Hand of Ragnaros";

  it("the product name is returned", function () {
    gildedRose = new Shop([new LegendaryItem(itemName, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });

  describe("Quality is not updated", function () {

    it("When quality was inputted as 0, it's still 80", function () {
      gildedRose = new Shop([new LegendaryItem(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });

    it("When quality was inputted as 50, it's still 80", function () {
      gildedRose = new Shop([new LegendaryItem(itemName, 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });
    // TODO these seem excess now
    it("when sellIn is negative, and quality is greater to 0, the quality is still 80", function () {
      const gildedRose = new Shop([new LegendaryItem(itemName, -15, 25)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });

    it("when sellIn is negative, and quality is inputted as 0, the quality is still 80", function () {
      const gildedRose = new Shop([new LegendaryItem(itemName, -15, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });

    it("when sellIn is negative, and quality is inputted as < 0, the quality is still 80", function () {
      const gildedRose = new Shop([new LegendaryItem(itemName, -15, -15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });

    it("when sellIn is 0, and quality is 7, the quality is still 80", function () {
      const gildedRose = new Shop([new LegendaryItem(itemName, 0, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(80);
    });
  });

  describe("SellIn is updated", function () {

    it("When sellIn is 7, it stays the same", function () {
      gildedRose = new Shop([new LegendaryItem(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(7);
    });

    it("When sellIn is 0, it stays the same", function () {
      gildedRose = new Shop([new LegendaryItem(itemName, 0, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(0);
    });
  });
});

// Additional item to cover all rows
describe("Monstera Albo Variegata", function () {

  let gildedRose;
  let items;
  const itemName = "Monstera Albo Variegata";

  it("the product is returned", function () {
    gildedRose = new Shop([new OtherItem(itemName, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Monstera Albo Variegata");
  });

  describe("quality is updated", function () {
    it("When quality is 7, it goes to 6", function () {
      gildedRose = new Shop([new OtherItem(itemName, 7, 7)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(6);
    });

    it("when item was supposed to be sold yesterday, quality goes down", function () {
      gildedRose = new Shop([new OtherItem(itemName, 0, 7)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(5);
    });

    it("when sellIn is negative, and quality is greater than 0, the quality goes down by two", function () {
      const gildedRose = new Shop([new OtherItem(itemName, -15, 25)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(23);
    });

    it("when sellIn is negative, and quality is smaller than 0, the quality stays the same", function () {
      const gildedRose = new Shop([new OtherItem(itemName, -15, -15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(-15);
    });

    it("when sellIn is negative, and quality is smaller than 0, the quality stays the same", function () {
      const gildedRose = new Shop([new OtherItem(itemName, -15, -15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(-15);
    });

    it("when sellIn is negative, and quality is 0, the quality stays at 0", function () {
      const gildedRose = new Shop([new OtherItem(itemName, -15, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });

    it("when sellIn is 0, and quality is 7, the quality goes down by two", function () {
      const gildedRose = new Shop([new OtherItem(itemName, 0, 7)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(5);
    });

  });
});