fetch('newHavenIndie/frontPage.json')
  .then(response => response.json())
  .then(data => {
    const articles = data.paper.articles;
    const articlesContainer = document.getElementById('articles');

    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.className = 'grid-item';

      const title = document.createElement('h3');
      title.textContent = article.title;
      articleElement.appendChild(title);

      const author = document.createElement('p');
      author.textContent = `Author: ${article.author}`;
      articleElement.appendChild(author);

      const category = document.createElement('p');
      category.textContent = `Category: ${article.category}`;
      articleElement.appendChild(category);

      const content = document.createElement('p');
      content.textContent = article.content;
      articleElement.appendChild(content);

      articlesContainer.appendChild(articleElement);
    });
  });