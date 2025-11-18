// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    srcDir: 'src/',
    modules: ['vuetify-nuxt-module', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
    vuetify: {
        moduleOptions: {
        },
        vuetifyOptions: {
            icons: {
                defaultSet: 'mdi'
            },
            locale: {
                locale: 'ru',
                messages: {
                    ru: {
                        dataIterator: {
                            rowsPerPageText: 'Элементов на странице:',
                            pageText: '{0}-{1} из {2}'
                        },
                        dataTable: {
                            itemsPerPageText: 'Элементов на странице:',
                            ariaLabel: {
                                sortDescending: 'Сортировка по убыванию.',
                                sortAscending: 'Сортировка по возрастанию.',
                                sortNone: 'Без сортировки.',
                                activateNone: 'Активируйте для удаления сортировки.',
                                activateDescending: 'Активируйте для сортировки по убыванию.',
                                activateAscending: 'Активируйте для сортировки по возрастанию.'
                            },
                            sortBy: 'Сортировать по'
                        },
                        dataFooter: {
                            itemsPerPageText: 'Элементов на странице:',
                            itemsPerPageAll: 'Все',
                            nextPage: 'Следующая страница',
                            prevPage: 'Предыдущая страница',
                            firstPage: 'Первая страница',
                            lastPage: 'Последняя страница',
                            pageText: '{0}-{1} из {2}'
                        }
                    }
                }
            }
        }
    },
    css: ['@mdi/font/css/materialdesignicons.css'],
    typescript: {
        strict: true,
        typeCheck: false
    }
})