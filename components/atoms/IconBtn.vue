<template>
    <v-btn @click="onClick" :color="color" :class="className" icon>
        <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
        },
        text: {
            type: String,
        },
        color: {
            type: String,
        },
        className: {
            type: String,
        },
    },
};
</script>