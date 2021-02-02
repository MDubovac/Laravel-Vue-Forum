<template>
    <div>
        <appheader></appheader>
        <v-container>
            <router-view></router-view>
        </v-container>
        <appfooter></appfooter>
    </div>
</template>

<script>
    import appheader from "./AppHeader";
    import login from "./login/Login";
    import appfooter from "./AppFooter";

    export default {
        components: {
            appheader, login, appfooter
        }
    }
</script>
