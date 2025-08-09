const path = require(`path`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Import articles from JavaScript file
  const articlesData = require('./src/data/articles.js');

  articlesData.forEach(article => {
    createPage({
      path: `/${article.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: article.id,
        slug: article.slug,
        article: article,
      },
    });
  });
};

// Create a source node for the articles data
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  
  // Import articles from JavaScript file
  const articlesData = require('./src/data/articles.js');

  // Create nodes for each article
  articlesData.forEach(article => {
    const node = {
      id: createNodeId(`article-${article.id}`),
      ...article,
      internal: {
        type: 'Article',
        contentDigest: createContentDigest(article),
      },
    };
    createNode(node);
  });
};
