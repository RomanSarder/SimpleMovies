export default function (items, text, key = "title") {
    const regexp = new RegExp("^" + text.toLowerCase());
    return items.filter(item => regexp.test(item[key].toLowerCase()))
}