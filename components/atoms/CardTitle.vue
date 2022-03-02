<template>
    <v-card-title class="className">
        <slot></slot>
    </v-card-title>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
    },
};
</script>