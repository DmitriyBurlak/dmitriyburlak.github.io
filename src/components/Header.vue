<template>
    <div class="header">
        <div class="header__menu">
            <div class="header__name">dmitriy burlak</div>
            <ul>
                <router-link to="/" custom v-slot="{ navigate, isActive }"><li :class="{active: isActive}" @click="navigate"><a href="#">_hello</a></li></router-link>
                <router-link to="about_me" custom v-slot="{ navigate, isActive }"><li :class="{active: isActive}" @click="navigate"><a href="#">_about me</a></li></router-link>
                <router-link to="project" custom v-slot="{ navigate, isActive }"><li :class="{active: isActive}" @click="navigate"><a href="#" >_project</a></li></router-link>
            </ul>
        </div>    
        <ul>
            <router-link to="contact" custom v-slot="{ navigate, isActive }"><li class="contact" :class="{active: isActive}" @click="navigate"><a href="#" >_contact</a></li></router-link>    
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>


<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    background-color: #02101c;
    border-bottom: 1px solid #1E2D3D;

    &__menu {
        display: flex;
    }

    &__name {
        width: 300px;
        padding: 10px 35px;
        border-right: 1px solid #1E2D3D;
    }

    ul {
        display: flex;

        li {
            padding: 10px 35px;
            border-right: 1px solid #1E2D3D;
            margin-bottom: -1px;
            cursor: pointer;
            transition: color .3s linear;

            a {
                text-decoration: none;
                color: #607B96;
                transition: color 0.3s linear;
            }

            &:hover {
                a {
                    color: #7c91a7;
                }
            }

            &.active {
                border-bottom: 3px solid #a13434;
                padding-bottom: 7px;
                a {
                    color: #fff;
                }
            }
        }

        .contact { 
            border-right: none;
            border-left: 1px solid #1E2D3D;
        }
    }
}
</style>