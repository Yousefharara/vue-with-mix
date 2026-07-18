<script>
import HeroSection from "../components/organisms/HeroHomeSection.vue";
import MainLayout from "../layouts/mainLayout.vue";

export default {
    components: {
        HeroSection,
        MainLayout,
    },

    computed: {
        user() {
            return this.$store.getters["auth/currentUser"];
        },

        loggedIn() {
            return this.$store.getters["auth/isAuthenticated"];
        },
    },
};
</script>

<template>
    <div>
        <HeroSection />
        <h2>Hello Home Page</h2>
        <p v-if="loggedIn">Name is : {{ user.name }}</p>
    </div>
</template>
