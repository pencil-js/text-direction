/**
 * Return either "rtl" or "ltr" for the text direction from a node.
 * If the node is not attached to any DOM, it return an empty string ("").
 * @param {Element} [elementNode=document.body] - Any element node from a DOM or document.body if none specified
 * @throws {TypeError} When elementNode is truthy and not an {Element}
 * @return {String}
 */
export default function (elementNode) {
    return document.defaultView.getComputedStyle(elementNode || document.body).direction;
}
