import heroSliderData from "./__WebCCLVietnameseHeroSliderLibrary.json";

const CARD_DATA_HERO = Object.entries(heroSliderData).flatMap(([year, items]) => {
  return items.map(item => ({
    ...item,
    year
  }));
});

export default CARD_DATA_HERO;
