import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Seo from "../components/seo"
import ContentRenderer from "../components/ContentRenderer"
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  Chip,
  Paper
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Link } from 'gatsby'

const Post = ({ pageContext }) => {
  const post = pageContext.article;
  const featuredImg = post.featuredImage?.url;

  const content = post.content || post.excerpt

  return (
    <Layout>
      <Head pageTitle={post.title} />
      <Seo title={post.title} />

      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        {/* Back to Home Link */}
        <Box sx={{ mb: 3 }}>
          <Link 
            to="/" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              width: 'fit-content'
            }}
          >
            <ArrowBackIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Back to Home
            </Typography>
          </Link>
        </Box>

        {/* Article Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              mb: 2
            }}
          >
            {post.title}
          </Typography>
          
          {/* Category and Date */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
            {post.categories && post.categories[0] && (
              <Chip 
                label={post.categories[0]} 
                color="primary" 
                variant="outlined"
                size="small"
              />
            )}
            {post.date && (
              <Typography variant="body2" color="text.secondary">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Featured Image */}
        {featuredImg && (
          <Box sx={{ mb: 4 }}>
            <Card elevation={2} sx={{ overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="400"
                image={featuredImg}
                alt={post.slug}
                sx={{ 
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
            </Card>
          </Box>
        )}

        {/* Article Content */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            backgroundColor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <ContentRenderer content={content} />
        </Paper>
      </Container>
    </Layout>
  )
}

export default Post
