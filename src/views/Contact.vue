<template>
	<div class="Contact">
		<div class="Contact__form">
			<div class="wrapper">
				<div class="block-form">
					<db-input class="block-form__item" v-model="dataMessage.name.value" :error="dataMessage.name.error" label="_name:" length="50" type="string" />
					<db-input class="block-form__item" v-model="dataMessage.phone.value" :error="dataMessage.phone.error" type="phone" label="_phone:" />
					<db-input class="block-form__item" v-model="dataMessage.message.value" :error="dataMessage.message.error" textarea label="_message:" length="100" type="text" />
					<db-button size="small" @click="sendMess">submit-message</db-button>
				</div>
			</div>
		</div>
		<div class="Contact__code">
			<div class="wrapper">
				<LightCode :code="code" />
			</div>
		</div>
	</div>
</template> 

<script setup lang="ts">
import {ref, computed} from 'vue'
import dbInput from '@/components/UX/db-input.vue';
import dbButton from '@/components/UX/db-button.vue';
import LightCode from '@/components/LightCode/LightCode.vue';
import { inputValidate } from '@/utils/inputUtil';
import { useContactStore, messageForm }  from '@/stores/contact.store';

const ContactStore = useContactStore();
const dataMessage = ref(JSON.parse(JSON.stringify(messageForm)));

let code = computed(() => `const button = document.querySelector('#sendBtn');

const message = {
  name: '${dataMessage.value.name.value}',
  phone: '${dataMessage.value.phone.value}',
  message: '${dataMessage.value.message.value}',
}

button.addEventListener('click', () => {
  form.send(message);
})`)

const clearForm = () => {
	dataMessage.value.name.value = ''
	dataMessage.value.phone.value = ''
	dataMessage.value.message.value = ''
}

const sendMess = async () => {
	let isValid = checkValidation();

	if (isValid) {
		let {name, phone, message} = dataMessage.value;

let params = {
	chat_id: null,
	text: `dmitriyburlak.github.io
Имя: ${name.value}
Телефон: ${phone.value}
${message.value}`
}
		await ContactStore.sendMessage(params)
			.then(() => clearForm())
	}
}

const checkValidation = () => {
	for (let item in dataMessage.value) {
		inputValidate(dataMessage.value, item);
	}
	let isValid = false;

	for (let item in dataMessage.value) {
		if (!!dataMessage.value[item].error) {
			isValid = false;
			break;
		}
		isValid = true;
	}
	return isValid;
}
</script>

<style lang="scss">
@import 'src/assets/scss/mixins/display.scss';
@import 'src/assets/scss/colors.scss';

.Contact {
	height: calc(100% - 40px);
	width: 100%;
	display: flex;

	.wrapper {
		padding: 15px 20px;
		height: 100%;
	}

	&__form {
		width: 50%;
		height: 100%;
		border-right: 1px solid $border;

		.wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		@include md-screen { 
			border: none;
			width: 100%;
		}
	}

	&__code {
		width: 50%;
		height: 100%;

		.wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.code {
			width: 500px;
		}

		@include md-screen { 
			display: none;
		}
	}

	
	.block-form {
		width: 320px;

		&__item {
			padding-bottom: 15px;
		}
	}
}
</style>