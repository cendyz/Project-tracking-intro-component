"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var routes = [
// { path: '/', component: Home },
// { path: '/:noFound(.*)', component: NotFound },
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: routes,
    linkActiveClass: 'btn-active',
});
exports.default = router;
