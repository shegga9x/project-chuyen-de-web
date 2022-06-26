export function changeLanguage(url, lang, router) {
    router.push(url, url, { locale: lang })
}