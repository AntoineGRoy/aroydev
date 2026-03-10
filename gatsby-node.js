const path = require(`path`);

const WP_API_BASE = 'https://roy-a.name/gatsby/wordpress/wp-json/wp/v2/posts/';
// WP posts that have dedicated page components — skip creating template pages for these
const WP_DEDICATED_PAGE_IDS = [450, 472];

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

  // Fetch WordPress posts and create pages for them
  try {
    const response = await fetch(`${WP_API_BASE}?per_page=100&orderby=date&order=desc`);
    if (response.ok) {
      const posts = await response.json();
      posts.forEach(post => {
        // Skip posts that have dedicated page components
        if (WP_DEDICATED_PAGE_IDS.includes(post.id)) return;

        createPage({
          path: `/${post.slug}/`,
          component: path.resolve(`./src/templates/wp-post.js`),
          context: {
            postID: post.id,
          },
        });
      });
    }
  } catch (error) {
    console.error('Error fetching WordPress posts for page creation:', error);
  }
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
