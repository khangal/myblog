<template>
  <Layout>
    <ClientOnly>
      <read-progress color="#019833" height="3px"></read-progress>
    </ClientOnly>

    <!-- <nav class="post-top-nav"> -->
    <!--   <div style="padding:1em 0"> -->
    <!--     <a href="">Back to posts</a> -->
    <!--   </div> -->
    <!-- </nav> -->

    <article class="post h-entry" style="margin-top:3rem">
      <!-- <nav class="tags"> -->
      <!--   <g-link :to="tag.path" class="tag-link" v-for="tag in $page.post.tags" :key="tag.id"> -->
      <!--     {{ tag.title }} -->
      <!--   </g-link> -->
      <!-- </nav> -->

      <header class="post-header">
        <h1 class="post__title liquid-h1" style="margin-bottom:0.5rem">{{ $page.post.title }}</h1>
        <p class="post-meta text--center">
          <time class="dt-published text--subdued">
            {{ $page.post.date | dateFormat }}
          </time>
        </p>
      </header>

      <div v-html="$page.post.content" class="post__content"></div>

      <a class="u-url" :href="$page.post.url" hidden></a>
    </article>
  </Layout>
</template>

<style lang="scss" scoped>
.post {
  max-width: 700px;
  margin: 0 auto;
}

.post-top-nav {
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  border-top: 1px solid #d2d2d2;
}

.tags {
  line-height: 1.5;
}

.tag-link {
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid $text-color;

  &:hover {
    color: $accent-color;
    border-bottom-color: $accent-color;
  }

  &:not(:last-child) {
    margin-right: calc(1em + 8px);
  }
}
</style>

<script>
export default {
  components: {
    ReadProgress: () =>
    import ('vue-read-progress')
    .then(m => m.default)
    .catch()
  }
}
</script>

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
