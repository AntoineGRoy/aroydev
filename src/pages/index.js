import React from "react"
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
  Button
} from '@mui/material'
import Grid from '@mui/material/Grid2'

const IndexPage = () => {

  // Import articles from JavaScript file
  const articlesData = require('../data/articles.js');
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
      <Seo title="Home" />
      
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Icon style={{ height: '4rem', maxWidth: '350px' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/resume/"
              variant="contained"
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
        {articlesByCategory.map(({ category, articles }) => (
          <Box key={category} sx={{ mb: 6 }}>
            {/* Category Header */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 500 }}>
                {category}
              </Typography>
            </Box>
            
            {/* Articles Grid */}
            <Grid container spacing={6}>
              {articles.map((article) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                  <Card 
                    component={Link}
                    to={`/${article.slug}/`}
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
