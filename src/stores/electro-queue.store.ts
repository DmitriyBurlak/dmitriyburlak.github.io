import { defineStore } from 'pinia'
// import { api } from 'boot/axios'

export interface ElectroQueueState {
    suppliers: any
    loading: boolean
}



export const useElectroQueueStore = defineStore('queue', {
    state: (): ElectroQueueState => ({
        suppliers: [
            {
                id: 1,
                name: 'ООО "Золотой Колос-АН"',
                inn: '612000605820',
                coordinator: 'Константин Константинов',
                adress: '347134, Ростовская обл., Маньково-Березовская, ул. Молодежная, д. 9, кв. 34'
            },
            {
                id: 2,
                name: 'ООО "Золотой Колос-АН"',
                inn: '612000605820',
                coordinator: 'Константин Константинов',
                adress: '347134, Ростовская обл., Маньково-Березовская, ул. Молодежная, д. 9, кв. 34'
            },
            {
                id: 3,
                name: 'ООО "Золотой Колос-АН"',
                inn: '612000605820',
                coordinator: 'Константин Константинов',
                adress: '347134, Ростовская обл., Маньково-Березовская, ул. Молодежная, д. 9, кв. 34'
            },
            {
                id: 4,
                name: 'ООО "Золотой Колос-АН"',
                inn: '612000605820',
                coordinator: 'Константин Константинов',
                adress: '347134, Ростовская обл., Маньково-Березовская, ул. Молодежная, д. 9, кв. 34'
            },
        ],
        loading: false,
    }),
    getters: {
        // bookingEditFormatList: (state) => (bookedId: number) => {
        //     console.log('bookingEditFormatList', bookedId);
        //     let currentList: any = null;
        //     let newObj = JSON.parse(JSON.stringify(bookingClearList));
            
        //     if (state.bookingList.length) {
        //         currentList = state.bookingList.find((i: any) => i.timeslot == bookedId)

        //         newObj.date.value = date.formatDate(currentList.dateTimeSlot, 'YYYY/MM/DD');
        //         newObj.timeslot.value = currentList.period;
        //         newObj.driverName.value = `${currentList.name} ${currentList.firstName} ${currentList.secondName}`
        //         newObj.carNum.value = `${currentList.numberTransport}/${currentList.regionTransport}`;
        //         newObj.trailerNum.value = `${currentList.trailerNumber}/${currentList.trailerRegion}`;
        //         newObj.companyName.value = currentList.basisName;
        //         newObj.license.value = currentList.driverLicense;
        //         newObj.phone.value = currentList.phone;
        //         newObj.timeslotId = currentList.timeslot;
        //         newObj.carNum.required = false;
        //         newObj.phone.required = false;
        //         newObj.companyName.required = false;
        //         newObj.timeslot.required = false;
        //         newObj.date.required = false;
        //     }

        //     console.log(newObj, 'newObj final');
        //     return newObj;
        // },
    },
    actions: {
        // async getListSpecification() {
        //     const userStore = useUserStore();
        //     const userId = userStore.profile?.data?.id;
            
        //     this.loading = true
        //     this.specification = [];
        //     try {
        //         const { data } = await api.get(`/api/electronic-queue/get-all-time-slots?userId=${userId}`)
                
        //         if (!data.error) {
        //             this.specification = data.items;
        //             return; 
        //         }
        //         throw new Error(data.error?.message || 'Неизвестная ошибка')
        //     } catch (err: any) {
        //         Notify.create(ErrorMessageConfig(err?.message || 'Неизвестная ошибка'))
        //         throw err
        //     } finally {
        //         this.loading = false
        //     }
        // },
    },
})