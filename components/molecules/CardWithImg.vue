<template>
    <Card>
        <Img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"> </Img>
        <CardTitle title="title" class="pt-1 pb-1">test</CardTitle>
        <CardSubtitle subtitle="subtitle" class="pt-1" />
        <CardActions>
            <AccountIconBtn :onClick="onClickIconBtn" />
        </CardActions>
    </Card>
</template>

<script>
import Img from '@atoms/Img.vue';
import Card from '@atoms/Card.vue';
import CardTitle from '@atoms/CardTitle.vue';
import CardSubtitle from '@atoms/CardSubtitle.vue';
import CardActions from '@atoms/CardActions.vue';
import Btn from '@atoms/Btn.vue';
import IconBtn from '@atoms/IconBtn.vue';
import AccountIconBtn from '@molecules/AccountIconBtn.vue';

export default {
    props: {
        onClickIconBtn: {
            type: Function,
        },
    },
    components: {
        Img,
        Card,
        CardTitle,
        CardSubtitle,
        CardActions,
        Btn,
        IconBtn,
        AccountIconBtn,
    },
    setup() {},
};
</script>