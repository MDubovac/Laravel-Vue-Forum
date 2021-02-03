<template>
  <v-toolbar>
        <v-toolbar-title>
          Forum App
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>Forum</v-btn>
            <v-btn text>Ask question</v-btn>
            <v-btn text>Category</v-btn>
            <v-btn text>
                  <router-link style="text-decoration:none; color:inherit" to="/login">Login</router-link>
            </v-btn>
        </v-toolbar-items>
  </v-toolbar>
</template>


<script>

</script>

<style>

</style>