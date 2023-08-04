import heroSliderData from "./__WebCCLVietnameseHeroSliderLibrary.json";

const CARD_DATA_HERO = Object.entries(heroSliderData).flatMap(([achievementCategories, items]) => {
  return items.map(item => ({
    ...item,
    achievementCategories
  }));
});

export default CARD_DATA_HERO;
