<template>
  <Layout>
    <article class="post h-entry" style="margin-top:3rem">

      <header class="post-header">
        <h1 class="post__title liquid-h1">{{ $page.post.title }}</h1>
        <p class="post-meta text--center">
          <time class="dt-published">
            {{ $page.post.date }}
          </time>
        </p>
      </header>

      <div class="mt-5">
        bambambambambam
      </div>

      <div v-html="$page.post.content" class="post__content"></div>

      <a class="u-url" :href="$page.post.url" hidden></a>
    </article>
  </Layout>
</template>

<style lang="scss" scoped>
.post {
}
</style>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    date
    path
    content
  }
}
</page-query>
