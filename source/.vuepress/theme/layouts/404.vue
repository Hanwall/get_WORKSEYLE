<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404 - Not found 这是一个不存在的页面</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        回到首页
      </RouterLink>
      
      <br/>
      <img src="/logo/404_2.jpeg"></img>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
