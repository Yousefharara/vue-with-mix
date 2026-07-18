<template>
    <div class="min-h-screen flex flex-col items-center justify-center">

        <h1 class="text-7xl font-bold text-red-500">
            404
        </h1>

        <p class="text-2xl mt-4">
            Page Not Found
        </p>

        <router-link
            to="/"
            class="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
            Go Home
        </router-link>

    </div>
</template>

<script>
export default {
    name: "NotFoundPage"
}
</script>