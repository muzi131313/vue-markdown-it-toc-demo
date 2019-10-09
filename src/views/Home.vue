<template>
  <div class="home">
    <markdown-it-toc class="markdown-it-wrap"
      :content="content"
      :offset="21"
      :level="3">
    </markdown-it-toc>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      content: '[[toc]]\n# Heading\n## Sub heading 1\n - 1 Some nice text\n### Sub heading 2\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading3\n## [Sub](http://www.baidu.com) heading 4\n - 1 Some nice text\n### Sub heading 5\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 6\n## Sub heading 7\n - 1 Some nice text\n### Sub heading 8\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 9\n## Sub heading 10\n - 1 Some nice text\n### Sub heading 11\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 12\n## Sub heading 13\n - 1 Some nice text\n### Sub heading 14\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 15\n## Sub heading 16\n - 1 Some nice text\n### Sub heading 17\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 18\n## Sub heading 19\n - 1 Some nice text\n### Sub heading 20\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 21\n## Sub heading 22\n - 1 Some nice text\n### Sub heading 23\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 24\n## Sub heading 25\n - 1 Some nice text\n### Sub heading 26\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 27\n## Sub heading 28\n - 1 Some nice text\n### Sub heading 29\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 30\n## Sub heading 31\n - 1 Some nice text\n### Sub heading 32\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 33\n## Sub heading 34\n - 1 Some nice text\n### Sub heading 35\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 36\n## Sub heading 37\n - 1 Some nice text\n### Sub heading 38\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n# Heading 39\n## Sub heading 40\n - 1 Some nice text\n### Sub heading 41\n - 2 Some even nicer text\n```js\nconsole.log("hellow, world")\n```\n'
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown-it-wrap {
  width: 1140px;
  margin: 0 auto;
  padding-right: 165px;
  box-sizing: border-box;
}
</style>
