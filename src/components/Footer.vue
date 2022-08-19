<template>
    <div class="footer">
        <div className="links">
            <span class="find">find me in:</span>
            <ul>
                <li> 
                    <a src="" v-html="iconTelegram"></a>
                </li>
                <li>
                    <a src="" v-html="iconGit"></a>
                </li>
                <router-link to="https://gitlab.shercargo.ru/burlak.da">tes</router-link>
            </ul>
        </div>

        
    </div>
</template>

<script> 
import { Icon } from '../assets/constants.js'
    export default {
        data() {
            return {
                count: new Date().toDateString(),
                iconTelegram: Icon.telegram,
                iconGit: Icon.linkedin,
            }
        },

    }
</script>


<style lang="scss">
.footer {
    border-top: 1px solid #1E2D3D;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .links {
        display: flex;
        align-items: center;

        .find {
            // margin-right: 10px;
            padding: 10px 10px 10px 0px;
        }
    }

    ul {
        display: flex;
        height: 100%;

        li {
            width: 40px;
            border-right: 1px solid #1E2D3D;
            display: flex;
            justify-content: center;
            
            a {
                cursor: pointer;
                display: flex;
                align-items: center;
            }

            &:first-child {
                border-left: 1px solid #1E2D3D;
            }

            &:hover {
                svg {
                    filter: invert(99%) sepia(70%) saturate(2873%) hue-rotate(172deg) brightness(306%) contrast(60%);
                    // fill: #fff;
                }
            }
        }
    }
}
</style>