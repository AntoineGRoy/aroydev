import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Icon from "../assets/logo.svg"
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Button,
  CircularProgress
} from '@mui/material'
import Grid from '@mui/material/Grid2'

const WP_API_BASE = 'https://roy-a.name/gatsby/wordpress/wp-json/wp/v2/posts/'

// WP posts with dedicated pages: always include these on the home page
const WP_PAGE_POST_IDS = [450, 472]
// Path for each (WordPress slug may differ from page route)
const WP_PAGE_PATHS = { 450: 'williams-sonoma', 472: 'growth-engineering' }

const toArticle = (post) => ({
  id: `wp-${post.id}`,
  title: post.title?.rendered || post.title || 'Untitled',
  slug: post.slug,
  date: post.date,
  excerpt: post.excerpt?.rendered
    ? post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
    : 'No excerpt available',
  categories: ["Work"],
  isWpPost: true,
  wpPostId: post.id
})

const IndexPage = () => {
  const [wpPosts, setWpPosts] = useState([])
  const [wpLoading, setWpLoading] = useState(true)

  // Fetch WordPress posts; ensure WP_PAGE_POST_IDS are always included
  useEffect(() => {
    const fetchWpPosts = async () => {
      try {
        const response = await fetch(`${WP_API_BASE}?per_page=100&orderby=date&order=desc`)
        const data = response.ok ? await response.json() : []
        const byId = new Map(data.map((post) => [post.id, post]))

        for (const id of WP_PAGE_POST_IDS) {
          if (!byId.has(id)) {
            const res = await fetch(`${WP_API_BASE}${id}`)
            if (res.ok) {
              const post = await res.json()
              byId.set(post.id, post)
            }
          }
        }

        const transformedPosts = Array.from(byId.values()).map(toArticle)
        setWpPosts(transformedPosts)
      } catch (error) {
        console.error('Error fetching WordPress posts:', error)
      } finally {
        setWpLoading(false)
      }
    }

    fetchWpPosts()
  }, [])

  // Import articles from JavaScript file
  const articlesData = require('../data/articles.js');
  const posts = [...articlesData, ...wpPosts];

  // Extract unique categories and subcategories
  const categoryMap = new Map();
  
  posts.forEach(article => {
    // categories is an array of strings [category, subcategory]
    if (article.categories && article.categories.length > 0) {
      const mainCategory = article.categories[0]; // First element is the main category
      
      if (!categoryMap.has(mainCategory)) {
        categoryMap.set(mainCategory, []);
      }
      categoryMap.get(mainCategory).push(article);
    }
  });

  // Group articles by category and sort
  const articlesByCategory = Array.from(categoryMap.entries()).map(([category, articles]) => ({
    category,
    articles: articles.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })
  }));

  // Sort categories: "About Me" first, "Work" second, then others
  const categoryOrder = ["About Me", "Work"];
  articlesByCategory.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.category);
    const indexB = categoryOrder.indexOf(b.category);
    
    // If both are in the order array, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only A is in the order array, A comes first
    if (indexA !== -1) return -1;
    // If only B is in the order array, B comes first
    if (indexB !== -1) return 1;
    // If neither is in the order array, maintain original order
    return 0;
  });

  return (
    <Layout>
      <Head pageTitle="Home" />
      <Seo title="Home" />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgba(0, 126, 199, 0.9) 0%,rgba(0, 6, 10, 0.9) 100%)',
          color: 'white',
          py: 10,
          mt: 8, // Account for fixed header
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 300,
              mb: 3,
              color: 'white'
            }}
          >
            Hi, I'm Antoine
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              fontWeight: 300,
              mb: 4,
              opacity: 0.9
            }}
          >
            Senior Software Engineer & Creative Technologist
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Icon style={{ height: '4rem', maxWidth: '350px' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/resume/"
              variant="contrast"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 500
              }}
            >
              View Resume
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Content Sections */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {wpLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        )}
        {articlesByCategory.map(({ category, articles }, index) => {
          // Check if this is "About Me" and next is "Blog" to display side by side
          const isAboutMe = category === "About Me";
          const nextCategory = articlesByCategory[index + 1];
          const isBlogNext = nextCategory?.category === "Blog";
          const shouldDisplaySideBySide = isAboutMe && isBlogNext;

          // If this is Blog and previous was About Me, skip rendering (already rendered)
          const prevCategory = articlesByCategory[index - 1];
          const isBlogAfterAboutMe = category === "Blog" && prevCategory?.category === "About Me";
          if (isBlogAfterAboutMe) return null;

          const renderArticleCard = (article) => {
            const slug = article.isWpPost && WP_PAGE_PATHS[article.wpPostId]
              ? WP_PAGE_PATHS[article.wpPostId]
              : article.slug
            const linkPath = `/${slug}/`
            
            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                <Card 
                  component={Link}
                  to={linkPath}
                  elevation={2}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    color: 'inherit',
                    maxWidth: '350px'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom 
                      sx={{ fontWeight: 600 }}
                      dangerouslySetInnerHTML={{ __html: article.title }}
                    />
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        mb: 2,
                        flexGrow: 1
                      }}
                      dangerouslySetInnerHTML={{ __html: article.excerpt }}
                    />
                    <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {article.categories.map((cat, catIndex) => (
                        <Chip 
                          key={catIndex}
                          label={cat} 
                          size="small" 
                          color={catIndex === 0 ? "primary" : "secondary"}
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          };

          // Render About Me and Blog side by side
          if (shouldDisplaySideBySide) {
            return (
              <Box key={`${category}-${nextCategory.category}`} sx={{ mb: 6 }}>
                <Grid container spacing={4}>
                  {/* About Me Section */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h4" component="h2" sx={{ fontWeight: 500, mb: 4 }}>
                        {category}
                      </Typography>
                      <Grid container spacing={6}>
                        {articles.map(renderArticleCard)}
                      </Grid>
                    </Box>
                  </Grid>
                  {/* Blog Section */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h4" component="h2" sx={{ fontWeight: 500, mb: 4 }}>
                        {nextCategory.category}
                      </Typography>
                      <Grid container spacing={6}>
                        {nextCategory.articles.map(renderArticleCard)}
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          }

          // Regular single section rendering
          return (
            <Box key={category} sx={{ mb: 6 }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
                  {category}
                </Typography>
              </Box>
              
              <Grid container spacing={6}>
                {articles.map(renderArticleCard)}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Layout>
  )
}

export default IndexPage
