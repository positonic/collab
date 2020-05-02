import React from 'react'

import Layout from '../../components/Layout'

export default class KnowledgeIndexPage extends React.Component {
  render () {
    return (
      <Layout>
        <div
          className='full-width-image-container margin-top-0'
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className='has-text-weight-bold is-size-1'
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem'
            }}
          >
            Knowledge management &amp; learning
          </h1>
        </div>
        <section className='section'>
          <div className='container'>
            <div
              style={{
                lineHeight: 1.15,
                boxSizing: 'border-box',
                margin: '0 auto',
                maxWidth: '1440px',
                width: '100%',
                padding: '0 60px'
              }}
            >
              <div
                style={{
                  lineHeight: '1.15',
                  boxSizing: 'border-box',
                  padding: '60px 0'
                }}
              >
                <div
                  style={{
                    lineHeight: 1.15,
                    boxSizing: 'border-box',
                    display: 'block',
                    flexGrow: 1,
                    backgroundColor: '#f0f5f5',
                    borderRadius: '5px',
                    height: '80px'
                  }}
                >
                  <div
                    style={{
                      lineHeight: 1.15,
                      boxSizing: 'border-box',
                      display: 'flex',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <input
                      placeholder='Search'
                      style={{
                        boxSizing: 'border-box',
                        margin: 0,
                        overflow: 'visible',
                        font: '400 18px/28px Helvetica,Arial,sans-serif',
                        background: '0 0',
                        border: 0,
                        color: '#0053d6',
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        width: '100%',
                        padding: '0 60px 0 20px'
                      }}
                    />
                    <label
                      style={{
                        boxSizing: 'border-box',
                        font: '400 18px/28px Helvetica,Arial,sans-serif',
                        position: 'relative',
                        zIndex: 2,
                        color: '#123693',
                        alignSelf: 'center',
                        pointerEvents: 'none',
                        transformOrigin: 'left center',
                        margin: '0 0 0 20px',
                        transform: 'translateY(-20px) scale(0.8)'
                      }}
                    ></label>
                    <svg
                      style={{
                        lineHeight: 1.15,
                        boxSizing: 'border-box',
                        backgroundColor: '#ffdb13',
                        borderRadius: '50%',
                        fill: '#0053d6',
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        transition: 'background-color .15s,fill .15s',
                        height: '52px',
                        width: '52px',
                        cursor: 'pointer'
                      }}
                    ></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='content'></div>
          </div>
        </section>
      </Layout>
    )
  }
}
