<template>
  <div>
      <router-link to="/addpost"><button>add Post</button></router-link>
      <div v-for="post in posts" :key="post">
        <PosteAdmin :image="post.img" :description="post.metaDesc"></PosteAdmin>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PosteAdmin from '@/components/poste-admin.vue'
export default {
  computed: {
      posts(){
          return this.$store.state.post
      }
  },

    components: {
        PosteAdmin
    },
}
</script>