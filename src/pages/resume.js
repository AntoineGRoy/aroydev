import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Seo from "../components/seo"
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Chip,
  Grid,
  Divider,
  Link as MuiLink
} from '@mui/material'
import { Email, Phone, LinkedIn, GitHub } from '@mui/icons-material'

const ResumePage = () => {
  return (
    <Layout>
      <Head pageTitle="Resume" />
      <Seo title="Resume - Antoine G Roy" />
      
      <Container maxWidth="md" sx={{ py: 6, mt: 8 }}>
        {/* Header */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
              Antoine Roy
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Senior Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Tomball, TX • 619.966.7599
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email color="primary" />
                <Typography variant="body2">antoineroy.dev@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinkedIn color="primary" />
                <MuiLink href="https://linkedin.com/in/antoine-roy" target="_blank" rel="noopener noreferrer">
                  <Typography variant="body2">LinkedIn</Typography>
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <GitHub color="primary" />
                <MuiLink href="https://github.com/antoineroy" target="_blank" rel="noopener noreferrer">
                  <Typography variant="body2">GitHub</Typography>
                </MuiLink>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Professional Summary
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Senior Frontend Software Engineer:</strong> 5+ years of experience specializing in scalable component 
              development, frontend architecture, and design system implementation.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Expertise:</strong> Strong focus on user experience, accessibility, and cross-functional collaboration. 
              Proven track record leading cross-team projects and driving measurable business outcomes. AB testing and Growth initiatives.
            </Typography>
            <Typography variant="body1">
              <strong>Soft Skills:</strong> Project Leadership, Mentoring, Teaching, Cross-functional Collaboration Experience, Fast Pace Growth Iterations
            </Typography>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Technical Skills
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Key Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {['JavaScript', 'React', 'React Native', 'Vue', 'HTML5', 'CSS3', 'Tailwind', 'Next.js', 'Gatsby', 'Jest', 'Accessibility', 'Design Systems', 'A/B testing'].map((skill) => (
                  <Chip key={skill} label={skill} color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Backend Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {['Node.js', 'Firestore', 'AWS', 'Axios', 'Express', 'Apollo', 'GraphQL'].map((skill) => (
                  <Chip key={skill} label={skill} color="secondary" variant="outlined" />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Tools & Platforms
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {['Cursor', 'VSCode', 'Figma', 'AWS', 'Stripe API', 'Eppo', 'Segment', 'React Dev Tools', 'Google Lighthouse', 'Rollbar'].map((skill) => (
                  <Chip key={skill} label={skill} color="default" variant="outlined" />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Professional Experience
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Senior Software Engineer
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                TrainingPeaks • San Diego, CA (Remote) • January 2023 - Present
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Design System Team:</Typography>
              <Typography variant="body1" paragraph>
                • Led design token organization across engineering and design teams, creating npm package with CSS variables, MUI themes, and icon components
              </Typography>
              <Typography variant="body1" paragraph>
                • Facilitated cross-environment rebrand implementation, improving design consistency and maintainability
              </Typography>
              <Typography variant="body1" paragraph>
                • Established standardized component library reducing development time by 25%
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Growth Team:</Typography>
              <Typography variant="body1" paragraph>
                • Designed and implemented reusable A/B testing solution using Eppo, Segment, React, and React Native
              </Typography>
              <Typography variant="body1" paragraph>
                • Collaborated with Product Managers and Data teams to execute experiments across mobile, web, and checkout environments
              </Typography>
              <Typography variant="body1" paragraph>
                • Delivered measurable growth insights through systematic testing frameworks
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Checkout Team:</Typography>
              <Typography variant="body1" paragraph>
                • Architected Frontend & context management for Stripe-powered checkout system using React SSR, Material UI, and Tailwind CSS, increasing checkout efficiency by 20%
              </Typography>
              <Typography variant="body1" paragraph>
                • Partnered with UI/UX designers to establish unified design system in Figma
              </Typography>
              <Typography variant="body1" paragraph>
                • Participated in Agile sprint planning and cross-team coordination
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Web Guild:</Typography>
              <Typography variant="body1" paragraph>
                • Documented and implemented component styling best practices across teams and environments
              </Typography>
              <Typography variant="body1" paragraph>
                • Established frontend development standards and guidelines
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Software Engineer II
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Nexient Software Development Agency • San Diego, CA (Remote) • January 2022 - January 2023
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Williams Sonoma Retail Website:</Typography>
              <Typography variant="body1" paragraph>
                • Led frontend development of Swatch Search Feature using Vue.js and micro-frontends, enhancing product discoverability by 30%
              </Typography>
              <Typography variant="body1" paragraph>
                • Owned complete feature lifecycle from concept to deployment, reducing post-release defects by 40%
              </Typography>
              <Typography variant="body1" paragraph>
                • Collaborated with product owners, backend teams, and UI/UX designers following Agile methodologies
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Web Developer
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Buffini & Company • Carlsbad, CA (Hybrid) • August 2021 - January 2022
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Buffini Company Marketing Website:</Typography>
              <Typography variant="body1" paragraph>
                • Developed company-wide Component Library using JavaScript and Azure, ensuring brand consistency and reducing UI development time by 25%
              </Typography>
              <Typography variant="body1" paragraph>
                • Led technology migration from CSHTML to WordPress, improving development and release efficiency by 50%
              </Typography>
              <Typography variant="body1" paragraph>
                • Managed frontend development lifecycle including coding, debugging, and performance optimization
              </Typography>
              <Typography variant="body1" paragraph>
                • Designed user-facing features that enhanced engagement and usability
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Freelance Software Engineer
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                San Diego, CA (Remote) • May 2020 - July 2021
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Resolvve:</Typography>
              <Typography variant="body1" paragraph>
                • Refactored user commenting system using React and Firestore, eliminating memory leaks and reducing API calls by 30%
              </Typography>
              <Typography variant="body1" paragraph>
                • Significantly improved application performance through optimized data handling
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>Wespire:</Typography>
              <Typography variant="body1" paragraph>
                • Re-engineered marketing website using JavaScript, WordPress, and Elementor, increasing performance by 40% and unique visitors by 70%
              </Typography>
              <Typography variant="body1" paragraph>
                • Integrated HubSpot solutions, resulting in 150% increase in Marketing Qualified Leads
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Teacher & Digital Education Advisor
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                September 2008 - September 2018
              </Typography>
              <Typography variant="body1" paragraph>
                • Researched, tested, and implemented digital education solutions across 60+ school network
              </Typography>
              <Typography variant="body1" paragraph>
                • Developed and delivered educator training sessions, enhancing digital literacy in classrooms
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Education */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Education
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Masters of Information and Communication (Teaching)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Institut de Formation des Maîtres, Bordeaux, France
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Bachelor of Philosophy (Logic)
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Michel de Montaigne, Bordeaux, France
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Notable Projects
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Performant React Context Implementation
              </Typography>
              <Typography variant="body1" paragraph>
                Developed an advanced React Context provider using useSyncExternalStore for 
                optimal performance and selective re-rendering. 
                <MuiLink href="/context" sx={{ ml: 1 }}>
                  View Demo →
                </MuiLink>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['React', 'TypeScript', 'Performance Optimization'].map((tech) => (
                  <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                Personal Portfolio & Blog
              </Typography>
              <Typography variant="body1" paragraph>
                Built a modern, responsive portfolio website using Gatsby, React, and Material-UI 
                with custom theming and optimized performance.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Gatsby', 'React', 'Material-UI', 'SEO'].map((tech) => (
                  <Chip key={tech} label={tech} size="small" color="secondary" variant="outlined" />
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Personal Interests */}
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Personal Interests
            </Typography>
            <Typography variant="body1">
              <strong>Dedicated surfer (30 years)</strong> • <strong>Acoustic blues guitar specialist</strong> • <strong>French poetry enthusiast</strong>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  )
}

export default ResumePage