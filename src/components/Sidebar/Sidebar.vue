<template>
    <div class="sidebar" :class="route.name == 'main' && 'hidden'">
        <div class="sidebar__item" v-for="(elem, idx) in dataSideBar.menu" :key="idx" :class="elem.active && 'active'" @click="elem.active = !elem.active" >
            <div class="sidebar__item__title"><span class="icon" v-html="iconDownOne"></span>{{elem.title}}</div>
            <ul class="sidebar__item__list">
                <li v-for="(item, key) in elem.items" :key="key">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Icon } from '../../assets/constants.js'
export default {
    data() {
        return {
            iconDownOne: Icon.downOne,
            dataSideBar: {
                menu: [
                    {
                        title: "personal-info",
                        active: true,
                        items: [
                            {
                                type: "link",
                                name: "bio",
                                link: "/to",
                            },
                            {
                                type: "link",
                                name: "interesting",
                                link: "/interesting"
                            },
                            {
                                type: "link",
                                name: "university",
                                link: "/university"
                            },
                        ]
                    },
                    {
                        title: "contacts",
                        active: true,
                        items: [
                            {
                                type: "link",
                                name: "Email@mail.ru",
                                link: "/to"
                            },
                            {
                                type: "link",
                                name: "89788107869",
                                link: "/interesting"
                            },
                            {
                                type: "folder",
                                name: "89788107869",
                                link: "/interesting"
                            },
                        ]
                    }
                ]
            }
        }
    },
    props: ['route']
}
</script>

<style lang="scss">
    .sidebar {
        width: 300px;
        border-right: 1px solid #1E2D3D;

        &__item {
            &:last-child {
                border-bottom: none;
            }

            &__title {
                padding: 10px 20px;
                color: #fff;
                border-bottom: 1px solid #1E2D3D;
                cursor: pointer;

                .icon {
                    padding-right: 5px;
                }
            }

            &__list {
                padding: 0px 35px;
                overflow: hidden;
                max-height: 0;
                border-bottom: 1px solid #1E2D3D;

                transition: all 0.4s ease-out;

                li {
                    padding-bottom: 5px;
                }
            }

            &.active {
                .sidebar__item__list {
                    padding: 10px 35px;
                    max-height: 200px;
                }
                .sidebar__item__title {
                    .icon {
                        svg {
                            transform: scale(1, -1);
                        }
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