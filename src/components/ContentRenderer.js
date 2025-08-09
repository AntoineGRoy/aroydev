import React from 'react';
import { Link } from 'gatsby';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Divider,
  Chip,
  Alert,
  AlertTitle,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Code as CodeIcon,
  Link as LinkIcon,
  Star as StarIcon
} from '@mui/icons-material';

// Utility to parse **bold** and [links](url) in a string and return React nodes
function parseBold(text) {
  if (typeof text !== 'string') return text;
  
  // First handle markdown links [text](url)
  let parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  parts = parts.map((part, i) => {
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (match) {
        const [, linkText, linkUrl] = match;
        return (
          <Link 
            key={`link-${i}`} 
            href={linkUrl}
            sx={{ 
              color: 'primary.main', 
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            {linkText}
          </Link>
        );
      }
    }
    return part;
  });
  
  // Then handle bold text **text**
  parts = parts.map((part, partIndex) => {
    if (typeof part === 'string') {
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
          return <strong key={`bold-${partIndex}-${boldIndex}`}>{boldPart.slice(2, -2)}</strong>;
        }
        return boldPart;
      });
    }
    return part;
  });
  
  return parts.flat();
}

const ContentRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  const renderCodeBlock = (code, language = 'javascript') => {
    return (
      <Paper
        elevation={1}
        sx={{
          p: 2,
          mb: 2,
          backgroundColor: '#f5f5f5',
          border: '1px solid #e0e0e0',
          borderRadius: 1,
          fontFamily: 'monospace'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CodeIcon sx={{ mr: 1, fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
            {language}
          </Typography>
        </Box>
        <Typography
          component="pre"
          sx={{
            margin: 0,
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            lineHeight: 1.5
          }}
        >
          {code}
        </Typography>
      </Paper>
    );
  };

  const renderAlert = (type, title, message) => {
    const alertConfig = {
      info: { icon: InfoIcon, color: 'info' },
      warning: { icon: WarningIcon, color: 'warning' },
      error: { icon: ErrorIcon, color: 'error' },
      success: { icon: CheckIcon, color: 'success' }
    };

    const config = alertConfig[type] || alertConfig.info;
    const IconComponent = config.icon;

    return (
      <Alert
        severity={config.color}
        icon={<IconComponent />}
        sx={{ mb: 2 }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    );
  };

  const renderQuote = (text, author) => {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 2,
          backgroundColor: '#fafafa',
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          borderRadius: 0
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: 'italic',
            mb: author ? 1 : 0,
            color: 'text.secondary'
          }}
        >
          {text}
        </Typography>
        {author && (
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            — {author}
          </Typography>
        )}
      </Paper>
    );
  };

  const renderTable = (headers, rows) => {
    return (
      <Paper elevation={1} sx={{ mb: 2, overflow: 'hidden' }}>
        <Box sx={{ overflowX: 'auto' }}>
          <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
            <Box component="thead">
              <Box component="tr" sx={{ backgroundColor: 'primary.main' }}>
                {headers.map((header, index) => (
                  <Box
                    key={index}
                    component="th"
                    sx={{
                      p: 2,
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 600,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    {header}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box component="tbody">
              {rows.map((row, rowIndex) => (
                <Box
                  key={rowIndex}
                  component="tr"
                  sx={{
                    backgroundColor: rowIndex % 2 === 0 ? 'background.paper' : 'grey.50',
                    '&:hover': { backgroundColor: 'grey.100' }
                  }}
                >
                  {row.map((cell, cellIndex) => (
                    <Box
                      key={cellIndex}
                      component="td"
                      sx={{
                        p: 2,
                        borderBottom: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      {cell}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  };

  const renderImage = (src, alt, caption) => {
    return (
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
        {caption && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'block',
              mt: 1,
              fontStyle: 'italic'
            }}
          >
            {caption}
          </Typography>
        )}
      </Box>
    );
  };

  const renderFeatureList = (features) => {
    return (
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <StarIcon sx={{ mr: 1, color: 'primary.main', fontSize: 20 }} />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box>
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <Typography
                key={index}
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  mt: 4,
                  borderBottom: '2px solid',
                  pb: 1
                }}
              >
                {block.text}
              </Typography>
            );

          case 'subheading':
            return (
              <Typography
                key={index}
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  mt: 3,
                  color: 'text.primary'
                }}
              >
                {block.text}
              </Typography>
            );

          case 'paragraph':
            return (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  mb: 2,
                  lineHeight: 1.7,
                  color: 'text.secondary',
                  textAlign: block.align || 'left'
                }}
              >
                {parseBold(block.text)}
              </Typography>
            );

          case 'list':
            return (
              <List key={index} sx={{ mb: 2, pl: 2 }}>
                {block.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                          {parseBold(item)}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            );

          case 'code':
            return (
              <Box key={index}>
                {renderCodeBlock(block.code, block.language)}
              </Box>
            );

          case 'alert':
            return (
              <Box key={index}>
                {renderAlert(block.alertType, block.title, block.message)}
              </Box>
            );

          case 'quote':
            return (
              <Box key={index}>
                {renderQuote(block.text, block.author)}
              </Box>
            );

          case 'table':
            return (
              <Box key={index}>
                {renderTable(block.headers, block.rows)}
              </Box>
            );

          case 'image':
            return (
              <Box key={index}>
                {renderImage(block.src, block.alt, block.caption)}
              </Box>
            );

          case 'features':
            return (
              <Box key={index}>
                {renderFeatureList(block.features)}
              </Box>
            );

          case 'divider':
            return (
              <Divider key={index} sx={{ my: 3 }} />
            );

          case 'chips':
            return (
              <Box key={index} sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {block.chips.map((chip, chipIndex) => (
                  <Chip
                    key={chipIndex}
                    label={chip.label}
                    color={chip.color || 'primary'}
                    variant={chip.variant || 'outlined'}
                    size="small"
                  />
                ))}
              </Box>
            );

          case 'link':
            return (
              <Box key={index} sx={{ mb: 2 }}>
                <Link
                  href={block.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <LinkIcon sx={{ mr: 1, fontSize: 16 }} />
                  {block.text}
                </Link>
              </Box>
            );

          case 'demoLink':
            console.log('Rendering demoLink:', block);
            return (
              <Box key={index} sx={{ 
                mb: 4, 
                mt: 2,
                display: 'flex', 
                justifyContent: 'center',
                p: 2,
              }}>
                <Link
                  to={block.url}
                  style={{ 
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <Chip 
                    label={block.text} 
                    color="primary" 
                    variant="outlined"
                    sx={{ 
                      fontSize: '1.1rem',
                      padding: '16px 32px',
                      borderWidth: '2px',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white',
                        transform: 'translateY(-2px)',
                        boxShadow: 3,
                      }
                    }}
                  />
                </Link>
              </Box>
            );

          case 'separator':
            return (
              <Box key={index} sx={{ my: 3 }}>
                <Box component="hr" sx={{ border: 0, borderTop: '1px', borderColor: 'grey', my: 0 }} />
              </Box>
            );

          default:
            return null;
        }
      })}
    </Box>
  );
};

export default ContentRenderer; 