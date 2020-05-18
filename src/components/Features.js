import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.text} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <a
              href={
                item.heading.toLowerCase() === 'exchange'
                  ? 'exchange'
                  : 'knowledge'
              }
            >
              <div
                style={{
                  width: '400px',
                  display: 'inline-block'
                }}
              >
                <h3>{item.heading}</h3>
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </a>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
}

export default FeatureGrid
