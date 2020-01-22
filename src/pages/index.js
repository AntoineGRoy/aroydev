import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"
import Icon from "../assets/logo.svg"

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      file(name: {eq: "ripper"}) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
          }
        }
      }
      allWordpressPost(sort: { fields: [date] }) {
        group(field: id) {
          edges {
            node {
              date(formatString: "YYYYMMDD")
              title
              content
              slug
              excerpt
              featured_media {
                localFile {
                  childImageSharp {
                      fluid(maxWidth: 700) {
                            ...GatsbyImageSharpFluid_tracedSVG
                                  }
                  }
                }
              }  
              categories {
                slug
                name
              }
            }
          }
        }
      }
    }
    `)
  const data=queryData.allWordpressPost;
  
  const distributePosts= (data)=>{
    const categories= queryData.allWordpressCategory.edges.map(
      obj=>obj.node.slug
    ).filter(
      x=>x!="uncategorized");

    let cat=[];
    for (let x= 0;x<categories.length;x++){
      cat.push([]);
    }
    console.log(categories);

    for(let j=0; j<categories.length; j++){
      console.log('cat:   '+ categories[j])
      for(let i = 0; i< data.group.length; i++){
        console.log(data.group[i].edges[0].node.categories[0].slug)
        if(data.group[i].edges[0].node.categories[0].slug==categories[j]){
          cat[j].push(data.group[i].edges[0].node)
        }
      };};
      console.log(cat);
    return cat;
  };
  const articlesByCat=distributePosts(data);
  //sorting articles by DESCENDING dates
  articlesByCat.map(articles=>{
    articles.sort((a, b) => {
      console.log(a)
      return parseInt(b.date) - parseInt(a.date)});});
  console.log(articlesByCat)
  return(
  <Layout>
    <Head pageTitle="Home"/>
    <SEO title="Home of Improper design" />
    <div className="intro-container"><h1 className="intro-header">Hi, I'm Antoine</h1><Icon/></div>
    
    {articlesByCat.map(cat=><PostList categorySlug={cat[0].categories[0].slug} categoryName={cat[0].categories[0].name} data={cat}/>)}
    
  </Layout>
)}

export default IndexPage
