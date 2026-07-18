<script>
import HeroSection from "../components/organisms/HeroHomeSection.vue";
import MainLayout from "../layouts/mainLayout.vue";

export default {
    components: {
        HeroSection,
        MainLayout,
    },

    data() {
        return {
            listOfData: ['Yousef', "ahmed", "ali", "mostafa"]
        }
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
        <div class="flex my-5 justify-center items-center gap-4">
            <h2 v-for="data in listOfData" :key="data">
                {{ data }}
            </h2>
        </div>
        <p v-if="loggedIn">Name is : {{ user.name }}</p>
    </div>
</template>
