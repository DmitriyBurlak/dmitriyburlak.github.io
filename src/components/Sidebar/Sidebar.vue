<template>
    <!-- <div class="sidebar" :class="route.name == 'main' && 'hidden'"> -->
    <div class="sidebar">
        <div class="sidebar__item" v-for="(elem, idx) in dataSideBar.menu" :key="idx" :class="elem.active && 'active'"  >
            <div class="sidebar__item__label"><span class="icon" v-html="iconDownOne"></span>{{elem.label}}</div>
            <ul class="sidebar__item__list">
                <li v-for="(item, key) in elem.items" :key="key">
                    <div v-if="item.type == 'link'">
                        <span v-if="!!item.ico" v-html="item.ico">
                        
                        </span> 
                        <a :href="item.link" target="_blank">{{item.name}}</a>
                    </div>
                    <span v-else>
                        {{item.name}}
                    </span>
                </li>
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
            phone: Icon.phone,
            email: Icon.email,
            dataSideBar: {
                menu: [
                    {
                        label: "personal-info",
                        active: false,
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
                        label: "contacts",
                        active: false,
                        items: [
                            {
                                type: "link",
                                name: "dmshade25@gmail.com",
                                link: "mailto:dmshade25@gmail.com",
                                ico: "email"
                            },
                            {
                                type: "link",
                                name: "89197744489",
                                link: "tel:89197744489",
                                ico: "phone"
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
        // &:last-child {
        //     border-bottom: none;
        // }

        &__label {
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

    // .hidden {
    //     visibility: hidden;
    //     display: none;
    // }
</style>