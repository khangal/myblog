<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

      <div class="text--center" style="margin:5.5rem 0">
        <g-image alt="Example image" src="@/assets/images/5Khangalx300.jpg" style="border-radius:10px; width:125px" />
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

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
.mini-posts {
  list-style: none;
  margin-left: 0;
}

.mini-post {
  border-bottom: 1px solid #f0f0f2;
  padding-bottom: 2.75rem;
  margin-bottom: 2.75rem;
}

.mini-post__title {
  font-size: 1.75rem;

  a {
    font-weight: bold;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: $accent-color;
    }
  }
}

.post__title {
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  color: $dark-text-color;
}

.post__body {
  margin-bottom: 5rem;

  h2 {
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: 1.7rem;
  }

  p {
    margin-bottom: 1.7rem;
  }
}

.text--center {
  text-align: center;
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
