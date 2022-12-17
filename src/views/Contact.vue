<template>
	<div class="Contact">
		<div class="wrapper">
			<div class="Contact__form">
				<db-input class="Contact__form__item" v-model="dataMessage.name.value" :error="dataMessage.name.error" label="_name:" length="50" type="string" />
				<db-input class="Contact__form__item" v-model="dataMessage.phone.value" :error="dataMessage.phone.error" type="phone" label="_phone:" />
				<db-input class="Contact__form__item" v-model="dataMessage.message.value" :error="dataMessage.message.error" textarea label="_message:" length="100" type="text" />
				<db-button size="small" @click="sendMess">submit-message</db-button>
			</div>
		</div>
	</div>
</template> 

<script setup lang="ts">
import {ref, computed} from 'vue'
import dbInput from '@/components/UX/db-input.vue';
import dbButton from '@/components/UX/db-button.vue';
import { inputValidate } from '@/utils/inputUtil';
import { useContactStore, messageForm }  from '@/stores/contact.store';

const ContactStore = useContactStore();
const dataMessage = ref(JSON.parse(JSON.stringify(messageForm)));

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
.Contact {
	height: 100%;
	.wrapper {
		padding: 15px 20px;
		height: 100%;
	}
	&__form {
		width: 320px;

		&__item {
			padding-bottom: 15px;
		}
	}
}
</style>