<template>
    <footer class="footer">
        <div className="find-me">
            <span class="find-me__text">find me in:</span>
            <ul class="find-me__list">
                <li> 
                    <a class="icon-link" href="https://t.me/dmburlak" target="_blank" v-html="iconTelegram"></a>
                </li>
                <li>
                    <a class="icon-link" href="https://www.linkedin.com/in/dmitriy-burlak-4868a01a6/" target="_blank" v-html="iconLinkedin"></a>
                </li>
            </ul>
        </div>
        <div class="footer__rigth">
            <a class="icon-link" href="https://github.com/DmitriyBurlak" target="_blank">
                <span class="icon-link__text">@dmitriyburlak</span>
                <span class="icon" v-html="iconGit"></span>
            </a>
        </div>
    </footer>
</template>

<script> 
import { Icon } from '../assets/constants.js';

    export default {
        data() {
            return {
                count: new Date().toDateString(),
                iconTelegram: Icon.telegram,
                iconLinkedin: Icon.linkedin,
                iconGit: Icon.github,
            }
        },
    }
</script>


<style lang="scss">
@import 'src/assets/scss/colors.scss';
@import 'src/assets/scss/mixins/display.scss';

.icon-link {
    display: flex;
    align-items: center;
    text-decoration: none;

    &__text {
        color: $text-grey;
        padding-right: 10px;
    }

    .icon {
        display: flex;
        align-items: center;
    }

    &:hover {
        .icon-link__text {
            color: $text-hover;
        }
        svg {
            filter: invert(99%) sepia(70%) saturate(2873%) hue-rotate(172deg) brightness(306%) contrast(60%);
        }
    }
}

.footer {
    border-top: 1px solid $border;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    @include sm-screen { 
        display: none;
    }

    &__rigth {
        display: flex;
        align-items: center;
        border-left: 1px solid $border;
        padding: 10px 0 10px 10px;

        .text {
            padding-right: 10px;
        }
    }

    .find-me {
        display: flex;
        align-items: center;

        &__text {
            padding: 10px 10px 10px 0px;
        }

        &__list {
            display: flex;
            height: 100%;

            li {
                width: 42px;
                padding: 9px;
                border-right: 1px solid $border;
                display: flex;
                justify-content: center;

                &:first-child {
                    border-left: 1px solid $border;
                }
            }
        }
    }
}
</style>