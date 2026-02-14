import React, { useState, useEffect } from "react"
import Layout from "./layout"
import Head from "./head"
import Seo from "./seo"
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia, 
  Chip,
  Paper,
  CircularProgress,
  Alert
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Link } from 'gatsby'

const WP_API_BASE = 'https://roy-a.name/gatsby/wordpress/wp-json/wp/v2/posts/'

const WPArticle = ({ postID }) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`${WP_API_BASE}${postID}`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch post: ${response.status} ${response.statusText}`)
        }
        
        const data = await response.json()
        setPost(data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching WordPress post:', err)
      } finally {
        setLoading(false)
      }
    }

    if (postID) {
      fetchPost()
    } else {
      setError('No post ID provided')
      setLoading(false)
    }
  }, [postID])

  if (loading) {
    return (
      <Layout>
        <Head pageTitle="Loading..." />
        <Container maxWidth="lg" sx={{ py: 8, mt: 8, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Container>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <Head pageTitle="Error" />
        <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Container>
      </Layout>
    )
  }

  if (!post) {
    return (
      <Layout>
        <Head pageTitle="Not Found" />
        <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
          <Alert severity="warning">
            Post not found
          </Alert>
        </Container>
      </Layout>
    )
  }

  // Extract title from rendered HTML or use title.rendered
  const title = post.title?.rendered || post.title || 'Untitled'
  
  // Format date
  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  // Extract featured image from content if available
  const contentHtml = post.content?.rendered || ''
  // Try to find image in figure tag first, then any img tag
  const figureMatch = contentHtml.match(/<figure[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/i)
  const imgMatch = contentHtml.match(/<img[^>]+src="([^"]+)"/i)
  const featuredImageSrc = figureMatch ? figureMatch[1] : (imgMatch ? imgMatch[1] : null)

  return (
    <Layout>
      <Head pageTitle={title} />
      <Seo title={title} />

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
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          {/* Category and Date */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
            {post.categories && post.categories.length > 0 && (
              <Chip 
                label="Work" 
                color="primary" 
                variant="outlined"
                size="small"
              />
            )}
            {formattedDate && (
              <Typography variant="body2" color="text.secondary">
                {formattedDate}
              </Typography>
            )}
          </Box>
        </Box>


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
          <Box
            sx={{
              '& img': {
                maxWidth: '100%',
                height: 'auto',
                borderRadius: 1,
                mb: 2
              },
              '& figure': {
                margin: 0,
                mb: 2
              },
              '& p': {
                mb: 2,
                lineHeight: 1.7,
                color: 'text.secondary'
              },
              '& ul, & ol': {
                mb: 2,
                pl: 3
              },
              '& li': {
                mb: 1,
                lineHeight: 1.6
              },
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              },
              '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontWeight: 600,
                mb: 2,
                mt: 3,
                color: 'text.primary'
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                pl: 2,
                py: 1,
                my: 2,
                fontStyle: 'italic',
                backgroundColor: '#fafafa'
              }
            }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </Paper>
      </Container>
    </Layout>
  )
}

export default WPArticle
