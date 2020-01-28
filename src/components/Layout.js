import React from "react"
import styled from "styled-components"
import colors from "assets/colors"

import logo from "assets/logo.svg"

const Root = styled.div`
  font-family: "Avenir Next", sans-serif;
  background-color: ${colors.lowlight};

  @media (min-width: 576px) {
    padding: 40px 60px;
  }
`

const MyHeader = styled.header`
  font-size: 40px;
  font-weight: 600;
  color: ${colors.texts.light};
  display: flex;
  align-items: center;
`

const Logo = styled.img.attrs(() => ({
  src: logo
}))`
  width: 80px;
  height: 80px;
`

const MyContainer = styled.main`
  color: ${colors.texts.light};
  min-height: 800px;
  padding: 40px;
`

const MyFooter = styled.footer`
  color: ${colors.texts.dim};
`

function App({ children }) {
  return (
    <Root>
      <MyHeader>
        <Logo />
        React-Todo
      </MyHeader>
      <MyContainer>{children}</MyContainer>
      <MyFooter>Footer</MyFooter>
    </Root>
  )
}

export default App
