import React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import Todo from "components/organisms/Todo"
import AppDesc from "components/molecules/AppDescription"

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`
const FlexTodo = styled(Todo)`
  background-color: black;
`

function App() {
  return (
    <div className="root">
      <Layout>
        <FlexLayout>
          <FlexTodo />
          <AppDesc />
        </FlexLayout>
      </Layout>
    </div>
  )
}

export default App
