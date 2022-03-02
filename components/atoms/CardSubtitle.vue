<template>
    <v-card-subtitle class="className">
        {{ subtitle }}
    </v-card-subtitle>
</template>

<script>
export default {
    props: {
        subtitle: {
            type: String,
        },
    },
};
</script>