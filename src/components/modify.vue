<template>
    <section>
        <article>
            <div id="inputText">
                <label for="title">Titre de la page</label>
                <input type="text" name="title" v-model="titre">
                <label for="metaTitle">Meta Title</label>
                <input type="text" name="metaTitle" v-model="metaTitle">
                <label for="metaDesc">Meta Description </label>
                <input type="text" name="metaDesc" v-model="metaDescription">
            </div>
            <div id="image">
                <img v-if="img == ''" src="http://www.ipsgroup.fr/wp-content/uploads/2013/12/default_image_01.png" alt="">
                <img v-else v-bind:src="img" alt="">
                <input type="text" placeholder="url de l'image" v-model.trim="img">
            </div>
        </article>
        <div id="textarea">
            <label for="content">Corps du post</label>
            <textarea name="content" id="" cols="30" rows="10" v-model="content"></textarea>
        </div>
        <button @click='addPost'>Valider le post</button>
    </section>
    <div v-for="post in posts" :key="post.title">
        <h1>{{post.title}}</h1>
        <h2>{{post.metaTitle}}</h2>
        <h2>{{post.metaDesc}}</h2>
        <img :src="post.img" alt="">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>