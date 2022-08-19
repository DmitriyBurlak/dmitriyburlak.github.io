<template>
    <div class="sidebar" :class="route.name == 'main' && 'hidden'" >
        <div class="sidebar__item" v-for="(elem, idx) in dataSideBar.menu" :key="idx">
            <div class="sidebar__item__title">{{elem.title}}</div>
            <ul class="sidebar__item__list">
                <li v-for="(item, key) in elem.items" :key="key">{{item.name}}</li>
            </ul>
        </div>


        <!-- <div class="sidebar__item">
            <div class="sidebar__item__title">contacts</div>
            <ul class="sidebar__item__list">
                <li>user name</li>
                <li>89788106758</li>
                <li>main88@mail.com</li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            route : useRoute(),
            dataSideBar: {
                menu: [
                    {
                        title: "personal-info",
                        items: [
                            {
                                name: "bio",
                                link: "/to"
                            },
                            {
                                name: "interesting",
                                link: "/interesting"
                            },
                            {
                                name: "university",
                                link: "/university"
                            },
                        ]
                    },
                    {
                        title: "contacts",
                        items: [
                            {
                                name: "Email@mail.ru",
                                link: "/to"
                            },
                            {
                                name: "89788107869",
                                link: "/interesting"
                            },
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss">
    .sidebar {
        width: 300px;
        border-right: 1px solid #1E2D3D;

        &__item {
            border-bottom: 1px solid #1E2D3D;

            &:last-child {
                border-bottom: none;
            }

            &__title {
                padding: 10px 35px;
                color: #fff;
                border-bottom: 1px solid #1E2D3D;
            }

            &__list {
                padding: 10px 35px;
                li {
                    padding-bottom: 5px;

                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }
    }

    .hidden {
        visibility: hidden;
        display: none;
    }
</style>