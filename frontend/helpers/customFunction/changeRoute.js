export function changeRoute(url, router) {
    if (typeof window !== "undefined") {
        window.location.href = '/' + router.locale + url;
    }
}