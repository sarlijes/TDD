// eslint-disable-next-line no-undef
var { expect } = require("chai");
// eslint-disable-next-line no-undef
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
});


describe("Aged Brie", function () {

  let gildedRose;
  let items;

  beforeEach(() => {
    gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
    items = gildedRose.updateQuality();
  });

  it("the product is returned", function () {
    expect(items[0].name).to.equal("Aged Brie");
  });

  describe("Quality is updated", function () {

    it("When quality is 0, it's raised to 1", function () {
      gildedRose = new Shop([new Item("Aged Brie", 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(1);
    });

    it("When quality is max, it stays at max", function () {
      gildedRose = new Shop([new Item("Aged Brie", 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });
  });

  describe("SellIn is updated", function () {

    it("When sellIn is 7", function () {
      gildedRose = new Shop([new Item("Aged Brie", 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(6);
    });

    it("When sellIn is 0", function () {
      gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-1);
    });
  });

});


describe("Backstage passes to a TAFKAL80ETC concert", function () {
  let gildedRose;
  let items;
  const passes = "Backstage passes to a TAFKAL80ETC concert";

  it("the product is returned", function () {
    gildedRose = new Shop([new Item(passes, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(passes);
  });

  describe("Quality is updated", function () {

    it("When quality is 0, it goes to 2", function () {
      gildedRose = new Shop([new Item(passes, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(2);
    });

    it("When quality is max, it stays at max", function () {
      gildedRose = new Shop([new Item(passes, 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });
  });

  describe("SellIn is updated", function () {

    it("When sellIn is 7", function () {
      gildedRose = new Shop([new Item(passes, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(6);
    });

    it("When sellIn is 0", function () {
      gildedRose = new Shop([new Item(passes, 0, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-1);
    });
  });

  it("quality goes to 0 after the concert has taken place", function () {
    gildedRose = new Shop([new Item(passes, 1, 25)]);
    items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
  });

});


describe("Sulfuras, Hand of Ragnaros", function () {
  let gildedRose;
  let items;
  const itemName = "Sulfuras, Hand of Ragnaros";

  it("the product is returned", function () {
    gildedRose = new Shop([new Item(itemName, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });

  describe("Quality is updated", function () {

    it("When quality is 0, stays in 0", function () {
      gildedRose = new Shop([new Item(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
    });

    it("When quality is max, it stays at max", function () {
      gildedRose = new Shop([new Item(itemName, 7, 50)]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
    });
  });

  describe("SellIn is updated", function () {

    it("When sellIn is 7, it stays the same", function () {
      gildedRose = new Shop([new Item(itemName, 7, 0)]);
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(7);
    });

    it("When sellIn is 0, it stays the same", function () {
      gildedRose = new Shop([new Item(itemName, 0, 0)]);
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
    gildedRose = new Shop([new Item(itemName, 0, 0)]);
    items = gildedRose.updateQuality();
    expect(items[0].name).to.equal(itemName);
  });

  it("When quality is 7, it goes to 6", function () {
    gildedRose = new Shop([new Item(itemName, 7, 7)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });

  it("when item was supposed to be sold yesterday, quality goes down", function () {
    gildedRose = new Shop([new Item(itemName, 0, 7)]);
    items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
  });

});

describe("", function () {
  it("", function () {

  });
});