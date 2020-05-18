import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GroupPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className='section'>
      {helmet || ''}
      <div className='container content'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
              {title}
            </h1>
            <p>{description}</p>
            <div id='chatContainer'>
              <div
                style={{
                  background: '#eee',
                  padding: '5px'
                }}
              >
                <div
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: 'white',
                    padding: '10px',
                    display: 'inline-block',
                    marginRight: '20px'
                  }}
                >
                  <img
                    style={{ width: '50px', marginRight: '20px' }}
                    src='/img/avatars/alex.png'
                  />
                </div>
                How will we handle this?
              </div>
              <div
                style={{
                  background: '#ddd',
                  padding: '5px'
                }}
              >
                <div
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: 'white',
                    padding: '10px',
                    display: 'inline-block',
                    marginRight: '20px'
                  }}
                >
                  <img
                    style={{ width: '50px', marginRight: '20px' }}
                    src='/img/avatars/james.png'
                  />
                </div>
                We should first set up a protocol
              </div>
              <div
                style={{
                  background: '#eee',
                  padding: '5px'
                }}
              >
                <div
                  style={{
                    height: '70px',
                    width: '70px',
                    backgroundColor: 'white',
                    padding: '10px',
                    display: 'inline-block',
                    marginRight: '20px'
                  }}
                >
                  <img
                    style={{ width: '50px', marginRight: '20px' }}
                    src='/img/avatars/nic.png'
                  />
                </div>
                Ok, sounds good
              </div>
            </div>
            <br />
            <h3>Continue this chat with:</h3>
            <img
              style={{ width: '50px', marginRight: '20px' }}
              src='/img/chat-logos/telegram.jpg'
            />
            <img
              style={{ width: '30px', marginRight: '20px' }}
              src='/img/chat-logos/whatsapp-logo.png'
            />
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className='taglist'>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

GroupPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
}

const GroupPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GroupPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s | Group'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

GroupPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default GroupPost

export const pageQuery = graphql`
  query GroupPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
