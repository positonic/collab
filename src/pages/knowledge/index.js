import React from 'react'

import { FiSearch } from 'react-icons/fa'
import {
  SearchBox,
  Hits,
  InstantSearch,
  Highlight,
  Pagination
} from 'react-instantsearch-dom'
import Layout from '../../components/Layout'
//import SearchTabs from '../../components/SearchTabs'
import KnowledgeRoll from '../../components/KnowledgeRoll'
import Search from '../../components/SearchContainer'

//import Search from '../../components/search'

// import Search from '../../components/search'

const searchIndices = [
  { name: `anticipation`, title: `Blog posts`, hitComp: `PageHit` },
  {
    name: `knowledge`,
    title: `Knowledge management & learning:`,
    hitComp: `PostHit`
  }
]
// const searchClient = algoliasearch(
//   'B1G2GM9NG0',
//   'aadef574be1f9252bb48d4ea09b5cfe5'
// )

function Hit (props) {
  return (
    <article>
      <h1>
        <Highlight attribute='name' hit={props.hit} />
      </h1>
    </article>
  )
}

export default class KnowledgeIndexPage extends React.Component {
  // Hit.propTypes = {
  //   hit: PropTypes.object.isRequired,
  // };

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
            {/* js search - uncomment working <Search /> */}
            {/* algolia - fuck them <Search collapse indices={searchIndices} />
            <hr />
            <InstantSearch searchClient={searchClient} indexName='anticipation'>
              <div className='search-panel'>
                <div className='search-panel__results'>
                  <SearchBox
                    className='searchbox'
                    translations={{
                      placeholder: ''
                    }}
                  />
                  <Hits hitComponent={Hit} />

                  <div className='pagination'>
                    <Pagination />
                  </div>
                </div>
              </div>
            </InstantSearch> */}
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

                    <span
                      onClick={() => {
                        alert(
                          'Search is not configured yet, but thank you for trying out this prototype, it make James very happy :)'
                        )
                      }}
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
                        cursor: 'pointer',
                        padding: '17px'
                      }}
                    >
                      go
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <SearchTabs /> */}
            <div className='content'>
              <KnowledgeRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
