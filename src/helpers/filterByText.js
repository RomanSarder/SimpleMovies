export default function (items, text) {
    const regexp = new RegExp("^" + text);
    return items.filter(item => regexp.test(item.title))
}