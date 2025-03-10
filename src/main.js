"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_splide_1 = __importDefault(require("@splidejs/vue-splide"));
require("./style.scss");
var App_vue_1 = __importDefault(require("./App.vue"));
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(vue_splide_1.default);
app.mount('#app');
