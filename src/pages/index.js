import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"
import Icon from "../assets/logo.svg"
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Card, 
  CardContent, 
  Chip
} from '@mui/material'
import { 
  Work as WorkIcon, 
  Person as PersonIcon, 
  Timeline as TimelineIcon 
} from '@mui/icons-material'

const IndexPage = () => {

  // Import articles from JavaScript file
  const articlesData = require('../data/articles.js').default;
  const posts = articlesData;

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


  // Group articles by category
  const articlesByCategory = Array.from(categoryMap.entries()).map(([category, articles]) => ({
    category,
    articles: articles.sort((a, b) => parseInt(b.date) - parseInt(a.date))
  }));

  return (
    <Layout>
      <Head pageTitle="Home" />
      <SEO title="Home" />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgb(2, 110, 173) 0%,rgb(9, 17, 77) 100%)',
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
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Icon style={{ height: '4rem', maxWidth: '350px' }} />
          </Box>
        </Container>
      </Box>

      {/* Content Sections */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {articlesByCategory.map(({ category, articles }) => (
          <Box key={category} sx={{ mb: 6 }}>
            {/* Category Header */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
                {category}
              </Typography>
            </Box>
            
            {/* Articles Grid */}
            <Grid container spacing={3}>
              {articles.map((article) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                  <Card 
                    component={Link}
                    to={`/${article.slug}/`}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      textDecoration: 'none',
                      color: 'inherit',
                      maxWidth: '300px',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                        textDecoration: 'none',
                        color: 'inherit'
                      }
                    }}
                  >
                    {article.featuredImage && (
                      <Card
                        height="200"
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                        {article.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 2,
                          flexGrow: 1
                        }}
                      >
                        {article.excerpt}
                      </Typography>
                      <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {article.categories.map((cat, index) => (
                          <Chip 
                            key={index}
                            label={cat} 
                            size="small" 
                            color={index === 0 ? "primary" : "secondary"}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage
