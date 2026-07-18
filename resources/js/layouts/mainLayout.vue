<template>
    <div>
        <Navbar />

        <main>
            <slot></slot>
        </main>

        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/organisms/Navbar.vue";
import Footer from "../components/organisms/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
    },
};
</script>
