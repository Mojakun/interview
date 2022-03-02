<template>
    <v-row justify="center" align="center" class="pa-3">
        <v-col cols="12" md="3" v-for="i in 12" :key="i">
            <CardWithImg :onClickIconBtn="fetchUsers" />
        </v-col>
    </v-row>
</template>

<script>
import TextBtn from '@atoms/TextBtn.vue';
import CardWithImg from '@molecules/CardWithImg.vue';
import User from '@entities/User';
export default {
    components: {
        TextBtn,
        CardWithImg,
    },
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await this.$axios.get(
                    'https://jsonplaceholder.typicode.com/users'
                );
                this.users = response.data.map((user) => new User(user).data);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>