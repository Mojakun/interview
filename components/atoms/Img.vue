<template>
    <v-img :src="src" :height="height" :class="className">
        <slot></slot>
    </v-img>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
        },
        className: {
            type: String,
        },
        height: {
            type: String,
        },
    },
};
</script>