<template>
    <div class="db-input" :class="{active: isActive, error: error, no_label: !label, dropdown: type == 'dropdown', search: search}">
        <div style="display: none">{{checkModelValue}}</div>
        <div class="db-input__block">
            <!-- <q-icon v-if="search" name="img:/icons/ico-search-outline.svg" class="icon__search" size="24px" /> -->
            <div class="label">{{label}}</div>
            <textarea class="input textarea" maxlength="301" v-if="textarea" v-model="inputValue" :placeholder="placeholder" @input="inputValidation(inputValue)" @focus="addFocus" @blur="removePicker" :readonly="readonly || type == 'dropdown'" :disabled="disable"></textarea>
            <input v-else type="text" class="input" :placeholder="placeholder" v-model="inputValue" @focus="addFocus" @blur="removePicker" @input="inputValidation(inputValue)" :readonly="readonly || type == 'dropdown'" :disabled="disable">
            <!-- <q-icon v-if="icon" :name="icon" class="icon" /> -->
         </div>
        <span class="error__message">{{error}}</span>
    </div>
</template>
  
<script>
import { fomatAutoNum, formatPhone, fomatText, fomatNumber, fomatCyrillic, fomatString } from '@/utils/inputUtil'

export default {
    data() {
        return {
            inputValue: '',
            isFocus: false, 
        }
    },
    props: {
        modelValue: String,
        type: String,
        label: String,
        placeholder: String,
        error: String,
        readonly: Boolean,
        icon: String,
        disable: Boolean,
        search: Boolean,
        length: String,
        textarea: Boolean
    },
    methods: {
        addFocus() {
            this.isFocus = true; 
        },
        removePicker() {
            this.isFocus = false; 
        },
        inputValidation(val) {
            let res = ''
            switch(this.type) {
                case 'phone': 
                    res = formatPhone(val)
                    break;
                case 'text':  
                    res = fomatText(val, this.length)
                    break;
                case 'string':  
                    res = fomatString(val, this.length)
                    break;
                case 'number':  
                    res = fomatNumber(val, this.length)
                    break;
                case 'cyrillic':  
                    res = fomatCyrillic(val)
                    break;
                case 'auto-num':  
                    res = fomatAutoNum(val, 'auto')
                    break;
                case 'trailer-num':  
                    res = fomatAutoNum(val, 'auto')
                    break;
                case 'dropdown':  
                    res = val;
                    break;
                default:
                    console.log('default');
                    res = val;
                    break;
            }
            this.$emit('update:modelValue', res);
            this.$emit('input');
            this.inputValue = res;
        },
    },
    computed: {
        isActive() {
            let res = this.isFocus || !!this.modelValue
            return res;
        },
        checkModelValue() {
            this.inputValidation(this.modelValue);
            return this.modelValue
        },
    },
}

</script>
  
<style scoped lang="scss">
@import 'src/assets/scss/colors.scss';

    .db-input {
        width: 100%;
        position: relative;

        &__block {
            position: relative;
        }

        .input {
            font-family: 'FiraCode';
            width: 100%;
            padding: 10px 15px;
            font-size: 14px;
            color: $text-grey;
            border: 2px solid $border;
            border-radius: 10px;
            background-color: $main-dark;

            &.textarea {
                height: 100px;
                resize: none;
            }

            &:disabled {
                outline: initial!important;
                opacity: 1 !important; 
                background-color: #081f32;
                color: #2e445c;
                // 19223c
            }

            &:focus {
                border: 2px solid $input-focus;
            }

            &::placeholder {
                color: transparent;
            }
        }
        .label {
            padding-bottom: 10px;
            pointer-events: none;
        }

        .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 16px;

            &__search {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 19px;
            }
        }

        &.search {
            .input {
                padding-left: 56px;
            }
        }

        &.active {
            .input {
                border: 2px solid $input-focus;
                outline: none;

                &:disabled {
                    border: 2px solid $border;
                }

                &::placeholder {
                    color: #7A8693;
                }
            }

            // .label {
            //     left: 13px;
            //     top: 0px;
            //     color: #3080F9;
            //     // background: #fff;
            //     padding: 0 4px;
            // }

            &.dropdown {
                .input {
                    outline: none;
                    cursor: pointer;
                }
            }
        }

        &.no_label {
            .input {
                &::placeholder {
                    color: #7A8693;
                }
            }
        }

        .error__message {
            padding-top: 4px;
            color: $red;
            display: none;
        }

        &.error {
            .input {
                outline: none;
                border: 2px solid $red;
            }

            .error__message {
                display: block;
            }
        }
    }
</style>