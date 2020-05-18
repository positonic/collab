import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'

const SearchListItem = styled.li`
  list-style-type: none;
  white-space: nowrap;
  box-sizing: border-box;
  font: 400 14px/25px, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  color: #123693;
  z-index: 2;
  position: relative;
`
const SearchListItemButton = styled.button`
  list-style-type: none;
  white-space: nowrap;
  box-sizing: border-box;
  fontsize: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  -webkit-font-smoothing: antialiased;
  color: #123693;
  position: relative;
  z-index: 2;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  background: 0 0;
  border: 0;
  padding: 0;
`
const SearchListItemSpan = styled.span`
  list-style-type: none;
  white-space: nowrap;
  font-size: ;
  line-height: 1.15;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  display: block;
  padding: 25px !important;
  color: #0053d6;
  font-size: 21px;
`

const SearchListItemTab = props => (
  <SearchListItem>
    <SearchListItemButton>
      <SearchListItemSpan style={props.spanStyle}>
        {props.text}
      </SearchListItemSpan>
    </SearchListItemButton>
  </SearchListItem>
)

const SearchTabs = ({ testimonials }) => (
  <div>
    <section
      style={{
        lineHeight: '1.15',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 1px #d8d8d8'
      }}
    >
      <div
        style={{
          lineHeight: '1.15',
          boxSizing: 'border-box',
          boxShadow: 'inset 0 1px #d8d8d8',
          borderBottom: '1px solid rgb(216, 216, 216)',
          margin: '0 auto',
          maxWidth: '1440px',
          overflowX: 'visible',
          padding: '0 90px',
          alignItems: 'stretch',
          display: 'flex',
          flexFlow: 'column wrap',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            lineHeight: '1.15',
            boxSizing: 'border-box',
            maxWidth: '100%',
            boxShadow: 'none',
            overflowX: 'visible',
            padding: '0'
          }}
        >
          <div
            style={{
              lineHeight: 1.15,
              boxSizing: 'border-box',
              display: 'block'
            }}
          >
            <ul
              style={{
                lineHeight: 1.15,
                boxSizing: 'border-box',
                padding: 0,
                display: 'flex',
                listStyleType: 'none',
                margin: 0,
                whiteSpace: 'nowrap'
              }}
            >
              <SearchListItemTab
                spanStyle={{ borderBottom: '5px solid rgb(255, 219, 19)' }}
                text='All'
              />
              <SearchListItemTab text='Publications' />
              <SearchListItemTab text='Groups' />
              <SearchListItemTab text='Blog posts' />
            </ul>
          </div>
        </div>
        <div
          style={{
            lineHeight: '1.15',
            boxSizing: 'border-box',
            display: 'flex',
            position: 'relative',
            whiteSpace: 'nowrap'
          }}
        ></div>
      </div>
    </section>
    <br />
  </div>
)

SearchTabs.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string
    })
  )
}

export default SearchTabs
