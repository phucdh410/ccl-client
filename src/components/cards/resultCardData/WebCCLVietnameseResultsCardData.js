import resultCardData from "./__WebCCLVietnameseResultsCardData.json";

const CARD_DATA_RESULT = Object.entries(resultCardData).flatMap(([TestYear, items]) => {
  return items.map(item => ({
    ...item,
    TestYear
  }));
});

export default CARD_DATA_RESULT;
