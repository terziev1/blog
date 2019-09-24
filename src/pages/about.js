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
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p,li{
      font-size:1.25em
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
        <p>I'm a 22 years old self taught <b>JavaScript Enthusiast</b> based in Sofia. Currently I'm working at a company called <b>Voxgig</b>, as a <b>Web Developer</b>. </p>
        <p>Outside of work I love gaming, anime and everything around Japanese culture and I'm slowly learning to speak the language.</p>
        <p>Some of the things I use and love</p>
        <ul>
            <li>HTML,CSS,SASS</li>
            <li>JavaScript ( VueJs, Vuetify, React, React Native, Node.js, Hapi.js, Lab)</li>
            <li>Photoshop, Sketch</li>
        </ul>
      </Content>
    </Wrapper>
  </Layout>
)

export default About