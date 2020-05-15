import React from 'react'

import Layout from '../../components/Layout'
import GroupRoll from '../../components/GroupRoll'

export default class ExchangeIndexPage extends React.Component {
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
            Exchange (groups)
          </h1>
        </div>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <p>
                In this area you will find all working groups, my own group and
                there may be an option to discover new groups, e.g. highlighted
                groups. All working groups also have a detail page on which the
                problem, members, documents, link to Slack-Channel or
                Rocket-Chat (open source) and further details can be viewed.
              </p>
              <GroupRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
