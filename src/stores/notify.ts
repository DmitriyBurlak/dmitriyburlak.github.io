import { defineStore } from 'pinia';

interface Notification {
    id: number | null
    text: string
    type: string
    icon: string | null
    timer: number
}

export enum NotificationType {
    Success = 'success',
    Error = 'error',
    Attention = 'attention',
}

interface NotificationParams {
    type: NotificationType
    text: string
    timer?: number 
}

interface NotifyState {
    notifications: Notification[]
}

const clearNotification: Notification = {
    id: null,
    text: '',
	type: '',
	icon: null,
    timer: 5000,
}

export const NotifyCreate = (params: NotificationParams) => {
    let store = useNotify();
    let notify = JSON.parse(JSON.stringify(clearNotification));

    notify.id = Math.floor(Math.random() * 100);
    notify.type = params.type;
    notify.text = params.text;

    if (params.timer) {
        notify.timer = params.timer;
    }
    
    if (params.type == NotificationType.Success) {
        notify.icon = 'success';
    } else if (params.type == NotificationType.Error) {
        notify.icon = 'error';
    }

    store.notifications.push(notify);
    deleteNotification(notify)
}

const deleteNotification = (params: Notification) => {
    let store = useNotify();
    setTimeout(() => {
        let item = store.notifications.findIndex(i => i.id == params.id)
        store.notifications.splice(item, 1)
    }, params.timer)
}

export const useNotify = defineStore('notify', {
    state: (): NotifyState => ({
        notifications: [],
    }),
})