import { createI18n } from 'vue-i18n'
import zh from '../languages/zh-TW.json'
import en from '../languages/en-US.json'


const i18n = createI18n({
    locale: 'zh-TW',
    messages: {
        'zh-TW': zh,
        'en-US': en
    }
})

export default i18n
