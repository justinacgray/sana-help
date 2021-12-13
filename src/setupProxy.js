// const proxy = require("http-proxy-middleware");

// module.exports = function (app) {
//     app.use(
//         "&first_name=",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
//     app.use(
//         "&last_name=",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
//     app.use(
//         "&city=",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
//     app.use(
//         "&state=",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
//     app.use(
//         "&organization_name",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
//     app.use(
//         "&taxonomy_description=",
//         proxy({
//             target: "http://npi-registry-proxy.herokuapp.com/",
//             changeOrigin: true,
//         })
//     );
// };
