export const normalizeCategories = (categoriesObj) => {
  if (!categoriesObj || typeof categoriesObj !== "object") return [];

  return Object.keys(categoriesObj).map((key) => ({
    name: key,
    children: categoriesObj[key],
  }));
};
