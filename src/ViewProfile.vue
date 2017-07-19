<template>
    <h1>My Profile</h1>
</template>

<script>
    import { authService } from './main';

    export default {
        beforeRouteEnter(to, from, next) {
            if (!authService.isLoggedIn) {
                alert("You must be logged in!");
                return next(false);
            }

            next();
        }
    }
</script>