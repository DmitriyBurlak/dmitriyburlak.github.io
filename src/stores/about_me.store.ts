import { defineStore } from 'pinia'

// interface CounterState {
//     count: number,
// }

export const useAboutMeStrore = defineStore('about_me', {
    state: () => (
        { 
            name: 'Dmitriy Burlak',
            dateOfBirth: 584481600000,
            post: '> Front-end developer',
            contacts: {
                email: 'dmshade25@gmail.com',
                phone: '89197744489',
            },
            links: {
                telegram: {
                    icon: 'icon_telegram',
                    link: 'https://t.me/dmburlak',
                },
                vk: {
                    icon: 'icon_vk',
                    link: 'https://vk.com/dm_shade',
                },
                linkedin: {
                    icon: 'icon_linkedin',
                    link: 'https://www.linkedin.com/in/dmitriy-burlak-4868a01a6/',
                },
                gitHub: {
                    icon: 'icon_git',
                    link: 'https://github.com/DmitriyBurlak',
                    label: '@dmitriyburlak',
                },
            }
        }
    ),
    actions: {
    //   increment() {
    //     this.count++
    //   },
    },
    // persist: {
    //     enabled: true
    // }
})
