export const fetchSliderImages = async () => {
  const BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "http://localhost:1993";

  const url = `${BASE_URL}/api/course`;
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
};
