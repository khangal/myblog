<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

      <div style="margin:5.5rem 0">
        <h1 class="name">Hi, I'm Khangal</h1>

        <p class="intro">I'm web developer, and this is blog about <span
           class="rails">Rails</span>, <span class="elixir">Elixir</span>, <span class="vim">Vim</span> stuff</p>
      </div>


      <ul class="mini-posts">
        <li class="mini-post" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <h3 class="mini-post__title">
              <!-- <a href="{{ post.url | relative_url }}"> -->
              <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
            </h3>

            <p class="mini-post__teaser">{{ edge.node.excerpt  }}</p>

            <span class="post-meta">{{ edge.node.date }}</span>
          </li>
      </li>
    </ul>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        date
        excerpt
        path
      }
    }
  }
}
</page-query>
