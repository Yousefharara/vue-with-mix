<script>
export default {
    methods: {
        login() {
            this.$store.dispatch("auth/login", {
                user: {
                    id: 1,

                    name: "Yousef",

                    email: "yousef@test.com",
                },

                token: "ABC123456",
            });
        },

        logout() {
            this.$store.dispatch("auth/logout");
        },
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
    <div class="my-10">
        <h2
        style="width: fit-content;"
            class="text-2xl mx-auto border-b-2 border-indigo-500"
        >
            Login Page
        </h2>

        <article class="flex gap-4 items-center justify-center mt-10">
            <button @click="login" class="px-3 py-1 rounded-md bg-indigo-500 text-white border border-gray-400">Login</button>
            <button @click="logout" class="px-3 py-1 rounded-md border-indigo-500 border">Logout</button>
        </article>

        <p v-if="loggedIn">Name is : {{user.name}}</p>

    </div>
</template>
