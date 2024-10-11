import articlesData from "../data/articlesData";

export default function getArticles(num, defNum = 4) {
  console.log(num);
  const maxNum = articlesData.length;
  const articleArray = [];
  // const tempArray = new Array(num || defNum).fill("").forEach(getRandomArticle)
  for (let i = 0; i < num || i < defNum; i++) {
    getRandomArticle();
  }

  function getRandomArticle() {
    const randomArticle = articlesData[Math.floor(Math.random() * maxNum)];
    let duplicateDetected = false;
    articleArray.forEach((article) => {
      if (article.id === randomArticle.id) {
        duplicateDetected = true;
      }
    });
    if (duplicateDetected) {
      getRandomArticle();
    } else {
      articleArray.push(randomArticle);
    }
    console.log(articleArray);
  }
  return articleArray;
}
