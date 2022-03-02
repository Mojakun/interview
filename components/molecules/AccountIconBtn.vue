<template>
    <IconBtn :onClick="onClick">
        <AccountIcon />
    </IconBtn>
</template>

<script>
import IconBtn from '@atoms/IconBtn.vue';
import AccountIcon from '@atoms/AccountIcon.vue';
export default {
    components: {
        IconBtn,
        AccountIcon,
    },
    props: {
        onClick: {
            type: Function,
        },
    },
};
</script>