<template>
  <Layout>
    single post
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    date
    path
  }
}
</page-query>
