import React from "react"
import WPArticle from "../components/WPArticle"

const WPPostTemplate = ({ pageContext }) => {
  const { postID } = pageContext

  return <WPArticle postID={postID} />
}

export default WPPostTemplate
