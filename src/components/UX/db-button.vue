<template>
    <a :href="href" :target="target" :disabled="disabled" class="db__button db__link" :class="[type, size, {'disabled': disabled}]" v-if="href"><slot></slot></a>
    <button v-else type="button" class="db__button" :disabled="disabled" :class="[type, size, {'disabled': disabled}]"><slot></slot></button>
</template>
  
<script>
export default {
    name: 'Button',
    props: {
        href: {type: String, default: null},
        target: {type: String, default: null},
        type: {type: String, default: 'primary'},
        size: {type: String, default: 'medium'},
        disabled: {type: Boolean, default: false},
    }
}
</script>

<style scope lang="scss">
@import 'src/assets/scss/colors.scss';

    .db__button {
        border-radius: 10px;
        color: $white;
        color: $light-grey;
        font-weight: 400;

        &.big {
            padding: 20px 40px;
            font-size: 16px;
        }
        &.medium {
            padding: 13px 24px;
            font-size: 14px;
        }
        &.small {
            padding: 8px 12px;
            font-size: 14px;
            line-height: 16px;
        }
        &.primary {
            // background-color: #0d263a;
            background-color: #19223c;
            border: 1px solid #19223c;
            transition: all 0.2s linear;
            cursor: pointer;
            &:hover {
                // background-color: #243055;
                background-color: #1e2948;
                border: 1px solid #1e2948;

            }
            &.disabled {
                background-color: #081f32;
                border: 1px solid #081f32;
                cursor: auto;
                color: #2e445c;
            }
        }
        &.negative {
            background-color: transparent;
            border: 1px solid #E5405E;
            color: #E5405E;
            transition: all 0.2s linear;
            cursor: pointer;
            &:hover {
                background-color: #FFEEF1;
                border: 1px solid #E5405E;
                color: #E5405E;
            }
            &.disabled {
                background-color: transparent;
                border: 1px solid #DADEEB;
                color: #B5BCCD;
                cursor: auto;
            }
        }
        &.outlined {
            background-color: transparent;
            border: 1px solid #6AA6FF;
            color: #6AA6FF;
            transition: all 0.2s linear;
            cursor: pointer;
            &:hover {
                border: 1px solid #3080F9;
                color: #3080F9;
            }
            &.disabled {
                background-color: transparent;
                border: 1px solid #DADEEB;
                color: #B5BCCD;
                cursor: auto;
            }
        }
        &.additional {
            background-color: transparent;
            border: 1px solid #B5BCCD;
            color: #253242;
            transition: all 0.2s linear;
            cursor: pointer;
            &:hover {
                background-color: #ECF2FF;
                border: 1px solid #7A8693;
                // color: #253242;
            }
            &.disabled {
                background-color: transparent;
                border: 1px solid #DADEEB;
                color: #B5BCCD;
                cursor: auto;
            }
        }
    }
    .db__link {
        text-decoration: none;
        display: inline-block;
        &.disabled {
            pointer-events: none;
        }
    }
</style>