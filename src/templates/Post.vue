<template>
  <Layout>
    <article class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting" style="margin-top:3rem">

      <header class="post-header">
        <h1 class="post__title" itemprop="name headline">{{ $page.post.title }}</h1>
        <p class="post-meta text--center">
          <time class="dt-published">
            {{ $page.post.date }}
          </time>
        </p>
      </header>

      <div v-html="$page.post.content" class="post__body e-content" itemprop="articleBody"></div>

      <a class="u-url" :href="$page.post.url" hidden></a>
    </article>
  </Layout>
</template>

<style lang="scss" scoped>
.foo {
  background-color: $rails-color;
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
