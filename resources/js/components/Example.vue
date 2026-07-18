

<template>
    <div>
        <h1 style="width:fit-content" class="bg-pink-600 text-white text-xl p-8  mx-auto rounded-xl my-5">
            Hello Vue + Laravel Mix 🚀 with name : {{ fullName }} and age : {{ age }} with address : {{ address }}
        </h1>
        <h2>
            Helo this: {{ this.count }}
        </h2>
        <button @click="increase" class="bg-green-400 rounded-lg px-2 py-1 m-5 text-white">+</button>
        <button @click="login" class="bg-green-400 rounded-lg px-2 py-1 m-5 text-white">Login</button>
    </div>
</template>

<script>

export default {

    mounted() {
        console.log("Mounting ........")
    },

    data() {
        return{
            count: 0,
            username: "Yousef",
            isAdmin: true
        }
    },
    methods: {
        increase() {
            this.count++;
        },
        login() {
            console.log("Login Auth ....")
        }
    },
    computed: {
        fullName() {
            return this.name.toUpperCase() + " Harara"
        }
    },
    watch: {
        count(newValue) {
            console.log('new value', newValue)
        }
    },
    created() {
        console.log("Createing Component")
    },
    props: {
        name: String,
        age: Number,
        address: String,
    }
}
</script>