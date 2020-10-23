import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  const includes = [
    "SEO component",
    "Layout component",
    "Sass",
    "TailwindCSS",
    "Inter typeface",
    "Framer Motion"
  ]

  return (
    <Layout>
      <SEO title="Home" description="This starter uses an SEO component" />
      <h1>Hello world!</h1>
      <br />

      <p>This starter includes:</p>
      {includes.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Layout>
  )
}
