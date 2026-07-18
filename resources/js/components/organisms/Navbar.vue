<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>

        <ul class="flex items-center gap-3 justify-center bg-green-700">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/login">login</RouterLink>
            </li>
        </ul>

    </nav>
</template>