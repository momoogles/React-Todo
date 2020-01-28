import React from "react"
import styled from "styled-components"
import Layout from "components/Layout"
import TodoList from "components/organisms/TodoList"
import AppDesc from "components/molecules/AppDescription"

const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`
const FlexTodoList = styled(TodoList)`
  background-color: black;
`

function App() {
  return (
    <div className="root">
      <Layout>
        <FlexLayout>
          <FlexTodoList />
          <AppDesc />
        </FlexLayout>
      </Layout>
    </div>
  )
}

export default App
