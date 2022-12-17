import { defineStore } from 'pinia'
import { Icon } from '@/assets/constants.js'

interface Menu {
    menu: MenuItem[]
}

interface Items {
    type: string
    label: string
    link: string
    icon?: string
}

interface MenuItem {
    label: string
    show: string[]
    active: boolean
    items: Items[]
}

export const useSidebarStore = defineStore('sidebar', {
    state: (): Menu => (
        { 
                menu: [
                    {
                        label: "personal-info",
                        show: [],
                        active: false,
                        items: [
                            {
                                type: "link",
                                label: "bio",
                                link: "/to",
                            },
                            {
                                type: "link",
                                label: "interesting",
                                link: "/interesting"
                            },
                            {
                                type: "link",
                                label: "university",
                                link: "/university"
                            },
                        ]
                    },
                    {
                        label: "contacts",
                        show: ['contact', 'about'],
                        active: true,
                        items: [
                            {
                                type: "link",
                                label: "dmshade25@gmail.com",
                                link: "mailto:dmshade25@gmail.com",
                                icon: Icon.email
                            },
                            {
                                type: "link",
                                label: "8(919)77-444-89",
                                link: "tel:89197744489",
                                icon: Icon.phone
                            },
                        ]
                    },
                    {
                        label: "find-me-also-in",
                        show: ['contact'],
                        active: true,
                        items: [
                            {
                                type: "link",
                                label: "Instagram accaunt",
                                link: "http://www.instagram.com/dm_shade",
                                icon: Icon.link
                            },
                        ]
                    }



                    
                ]
        }
    ),
})
