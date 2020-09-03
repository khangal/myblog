<template>
  <Layout>
    tag type
    {{ $page.tag }}
  </Layout>
</template>


<page-query>
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>
