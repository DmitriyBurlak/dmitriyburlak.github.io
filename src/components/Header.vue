<template>
    <header class="header">
        <div class="header__menu">
            <div class="header__name">{{ AboutMeStore.name }}</div>
            <ul>
                <router-link to="/" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#">_hello</a></li></router-link>
                <router-link to="about_me" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#">_about me</a></li></router-link>
                <router-link to="project" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#" >_project</a></li></router-link>
            </ul>
        </div>    
        <ul>
            <router-link to="contact" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li class="contact" :class="{active: isActive}" @click="navigate"><a href="#" >_contact</a></li></router-link>    
        </ul>
    </header>
</template>

<script setup lang="ts">
// import { RouterLink, useLink } from 'vue-router'
// import { defineProps } from 'vue'
import { useAboutMeStrore } from '../stores/about_me.store'
const AboutMeStore = useAboutMeStrore();

// const props = defineProps({
//     ...RouterLink.props,
//     inactiveClass: String,
// }) 

// const { navigate, href, route, isActive, isExactActive } = useLink(props)
   
</script>


<style lang="scss">
@import 'src/assets/scss/colors.scss';

.header {
    display: flex;
    justify-content: space-between;
    background-color: $main-dark;
    border-bottom: 1px solid $border;

    &__menu {
        display: flex;
    }

    &__name {
        width: 300px;
        padding: 10px 20px;
        border-right: 1px solid $border;
    }

    ul {
        display: flex;

        li {
            padding: 10px 35px;
            border-right: 1px solid $border;
            margin-bottom: -1px;
            cursor: pointer;

            a {
                text-decoration: none;
                color: $text-grey;
            }

            &:hover {
                a {
                    color: $text-hover;
                }
            }

            &.active {
                border-bottom: 3px solid $red;
                padding-bottom: 7px;
                a {
                    color: $white;
                }
            }
        }

        .contact { 
            border-right: none;
            border-left: 1px solid $border;
        }
    }
}
</style>