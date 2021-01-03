<template>
    <div>
        <nav-menu/>
        <new-announce-form-step2/>
    </div>
</template>

<script>
    import NavMenu from "../components/layouts/NavMenu";
    import NewAnnounceFormStep2 from "../components/annouce/NewAnnounceFormStep2";

    export default {
        components: {NavMenu, NewAnnounceFormStep2}
    }

</script>