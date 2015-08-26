// Can be place in root lib too, or any other named folder in lib.
exports.getAsJSON = function(url) {
    var bean = __.newBean("com.enonic.academy.UrlHelper"); // Get mah shit! =)
    //var result = '{"a":1}';
    var result = bean.getUrlAsJSON(url);
    return JSON.parse(result); // Can be put on the Java-side, but works the same way in JS
};