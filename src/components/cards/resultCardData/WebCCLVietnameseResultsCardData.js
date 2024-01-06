const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:1993';

const fetchCourseResults = async () => {
  const url = `${BASE_URL}/api/course-result`;
  try {
    const res = await fetch(url, {
      method: "POST"
    });
    return await res.json();
  } catch (err) {
    return console.error(err);
  }
};
export default fetchCourseResults;
