export function changeLanguage(url, lang, router) {
    console.log(router);
    router.push(url, url, { locale: lang })
}