import { BufferGeometryLoader } from "three";

export default () => {
    let body = document.getElementsByTagName('body')[0]
    let ready = () => {
        body.classList.add('content-loaded')
    }
    document.addEventListener("DOMContentLoaded", ready);
}