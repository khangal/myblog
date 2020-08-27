<template>
  <Layout>
    <div class="foo">
      single post
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.foo {
  background-color: $red;
}

</style>

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
