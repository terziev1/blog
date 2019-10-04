/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Header } from '../components'

import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  font-size:1.25em;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
  h5{
    margin-bottom:0;
  }
`

const About = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Header>
        <Link to="/">&larr; Back to home</Link>
      </Header>
      <Content>
        <h1>About me:</h1>
        <p>I'm a 22 years old self taught <b>Web Developer</b> based in Sofia. Currently I'm working remotely at a company called <a href="https://www.voxgig.com/"><b>Voxgig</b></a>. </p>
        <p>Outside of work I love gaming, anime and everything around Japanese culture.</p>
        <h4>Some of the things I use and love</h4>
        <ul>
            <li>HTML, CSS, SASS</li>
            <li>JavaScript ( VueJs, Vuetify, React, React Native, Node.js, Hapi.js, Lab)</li>
            <li>Photoshop, Sketch</li>
        </ul>
        {/* <h4>My experience so far:</h4>
        <ul>
          <li>
            <h5><a>Prodesign</a></h5>
            <p>Translated design team’s UX wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript.</p>
            <p>Created and implemented a custom CSS grid system, with CSS media queries for mobile responsiveness.</p>
            <p>Participated in projects in all stages of the product life cycle.</p>
            <p>Leveraged web frameworks to consistently complete product deliverables ahead of schedule. Automated image optimization, using Gulp and minified JS and CSS.</p>
          </li>
          <li>
            <h5><a>Popertee</a></h5>
            <p>Reworked the whole website improving the user experience and speed of the website.</p>
            <p>Made the product mobile friendly.</p>
            <p>Participated in the creation of a custom CMS for the company.</p>
            <p>Worked closely with the management with ideas on improving the products features.</p>
            <p>Maintained and wrote python web-scrapers.</p>
          </li>
        </ul> */}
      </Content>
    </Wrapper>
  </Layout>
)

export default About
