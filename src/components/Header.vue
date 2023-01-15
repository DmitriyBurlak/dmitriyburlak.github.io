<template>
    <header class="header">
        <div class="header__menu">
            <div class="header__name">{{ AboutMeStore.name }}</div>
            <div class="header__menu__block">
                <ul class="header__menu__items">
                    <router-link to="/" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#">_hello</a></li></router-link>
                    <router-link to="about_me" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#">_about me</a></li></router-link>
                    <router-link to="project" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="navigate"><a href="#" >_project</a></li></router-link>
                </ul>
            </div>  
        </div>    
        <div class="header__menu__block">
            <ul class="header__menu__items">
                <router-link to="contact" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li class="contact" :class="{active: isActive}" @click="navigate"><a href="#" >_contact</a></li></router-link>    
            </ul>
        </div>
        <div class="burger-menu" :class="{active: isActiveMenu}" @click="isActiveMenu = !isActiveMenu">
            <div></div>
        </div>
        <div class="mobile-menu" :class="{active: isActiveMenu}">
            <ul class="header__menu__items">
                <router-link to="/" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="closeMenu(), navigate()">_hello</li></router-link>
                <router-link to="about_me" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="closeMenu(), navigate()">_about me</li></router-link>
                <router-link to="project" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li :class="{active: isActive}" @click="closeMenu(), navigate()">_project</li></router-link>
                <router-link to="contact" custom v-slot="{ navigate, isActive }: {navigate: any, isActive:any}"><li class="contact" :class="{active: isActive}" @click="closeMenu(), navigate()">_contact</li></router-link>    
            </ul>
            <div class="find-me">
                <span class="find-me__text">find me in:</span>
                <ul class="find-me__list">
                    <li> 
                        <a class="icon-link" href="https://t.me/dmburlak" target="_blank" v-html="iconTelegram"></a>
                    </li>
                    <li>
                        <a class="icon-link" href="https://www.linkedin.com/in/dmitriy-burlak-4868a01a6/" target="_blank" v-html="iconLinkedin"></a>
                    </li>
                    <li>
                        <a class="icon-link" href="https://github.com/DmitriyBurlak" target="_blank">
                            <span class="icon" v-html="iconGit"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
// import { RouterLink, useLink } from 'vue-router'
import { ref } from 'vue'
import { useAboutMeStrore } from '../stores/about_me.store'
import { Icon } from '../assets/constants.js'

const AboutMeStore = useAboutMeStrore();
const isActiveMenu = ref(false)
const iconTelegram = ref(Icon.telegram)
const iconLinkedin = ref(Icon.linkedin)
const iconGit = ref(Icon.github)

const closeMenu = () => {
    isActiveMenu.value = false
}
</script>


<style lang="scss">
@import 'src/assets/scss/colors.scss';
@import 'src/assets/scss/mixins/display.scss';

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $main-dark;
    border-bottom: 1px solid $border;

    &__menu {
        display: flex;
        width: 100%;

        &__block {
            display: flex;

            .contact { 
                border-right: none;
                border-left: 1px solid $border;
            }

            @include md-screen { 
                display: none;
            }
        }

        &__items {
            display: flex;

            @include md-screen { 
                flex-direction: column;
            }

            li {
                padding: 10px 35px;
                border-right: 1px solid $border;
                margin-bottom: -1px;
                cursor: pointer;

                @include md-screen { 
                    padding: 10px 15px;
                    border-bottom: 1px solid $border;
                }

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
        }
    }

    &__name {
        width: 300px;
        padding: 10px 20px;
        border-right: 1px solid $border;

        @include md-screen { 
            border: none;
            width: max-content;
        }
    }
}

.burger-menu {
    display: none;
    position: relative;
    width: 25px;
    height: 20px;
    margin-right: 20px;

    &:after, &:before, div {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: $text-grey;
        transition: all 0.2s linear;
    }

    div {
        top: 50%;
        transform: translateY(-50%);
    }

    &:before {
        top: 0;
    }

    &:after {
        bottom: 0;
    }

    &.active {
        div {
            display: none;
        }

        &:before {
            transform: rotate(45deg);
            top: 50%;
        }

        &:after {
            transform: rotate(-45deg);
            top: 50%;
        }
    }

    @include md-screen { 
        display: block;
    }
}

.mobile-menu {
    display: none;
    position: absolute;
    background-color: $main;
    border-left: 1px solid $border;
    border-top: 1px solid $border;
    right: 0;
    top: 40px;
    width: 100%;
    max-width: 400px;
    height: 100%;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.2s linear;

    &.active {
        transform: translateX(0);
    }

    // &__items {
    //     padding: 0 15px;

    //     &.rigth {
    //         display: flex;
    //         justify-content: flex-end;
    //     }
    // }

    .find-me {
        padding: 0 10px 0 15px;
        margin-bottom: 40px;
        border: 1px solid $border;
        display: none;
        
        @include sm-screen { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__list {
            display: flex;
            padding-left: 10px;

            li {
                padding: 10px;
                border-left: 1px solid $border;
                // padding-right: 20px;

                &:last-child {
                    padding-right: 0;
                }
            }
        }
    }

    @include md-screen { 
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}
</style>