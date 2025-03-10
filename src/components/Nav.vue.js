"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var logo_svg_1 = __importDefault(require("@/images/logo.svg"));
var icon_hamburger_svg_1 = __importDefault(require("@/images/icon-hamburger.svg"));
var icon_close_svg_1 = __importDefault(require("@/images/icon-close.svg"));
var core_1 = require("@vueuse/core");
var width = (0, core_1.useWindowSize)().width;
var isOpen = (0, vue_1.ref)(false);
var isLargeScreen = (0, vue_1.computed)(function () { return width.value >= 1024; });
var links = (0, vue_1.ref)(['product', 'features', 'pricing', 'login']);
(0, vue_1.watchEffect)(function () {
    if (isLargeScreen.value) {
        isOpen.value = false;
    }
});
var isMenuVisible = (0, vue_1.computed)(function () {
    if (width.value > 1024)
        return true;
    return isOpen.value;
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['shad',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("container py-[5rem] px-[3.5rem] flex justify-between items-center") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.logo)), alt: ("square with breaks") }, { class: ("block w-[3rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isOpen = !__VLS_ctx.isOpen;
        } }, { type: ("button"), 'aria-label': ("open close menu") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.isOpen ? __VLS_ctx.close : __VLS_ctx.burger)), alt: ((__VLS_ctx.isOpen ? 'close menu' : 'open menu')) }, { class: ("w-[3rem] lg:hidden") }));
    var __VLS_0 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        mode: ("out-in"),
        persisted: (true),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            mode: ("out-in"),
            persisted: (true),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("absolute left-[3.5rem] top-[17%] bg-white shad w-[calc(100%-7rem)] p-[2rem] flex flex-col text-center rounded-md transition-opacity z-[100] lg:bg-transparent lg:static lg:flex-row lg:p-0 lg:justify-end lg:gap-x-[7rem]") }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isMenuVisible) }), null, null);
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.links)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign(__assign({ href: ("#"), key: ((index)) }, { class: ("font-barloC font-w700 uppercase text-[2rem] tracking-[1px] pb-[2rem] last:text-neutral-blue-300 last:pt-[2rem] last:border-t-[1px] w-full lg:last:p-0 lg:last:border-t-0 lg:p-0 lg:w-auto lg:last:ml-[3.5rem] lg:text-[1.5rem] xl:hover:underline") }), { class: ((index == 3 && 'testDot')) }));
        (item);
    }
    __VLS_5.slots.default;
    var __VLS_5;
    ['container', 'py-[5rem]', 'px-[3.5rem]', 'flex', 'justify-between', 'items-center', 'block', 'w-[3rem]', 'w-[3rem]', 'lg:hidden', 'absolute', 'left-[3.5rem]', 'top-[17%]', 'bg-white', 'shad', 'w-[calc(100%-7rem)]', 'p-[2rem]', 'flex', 'flex-col', 'text-center', 'rounded-md', 'transition-opacity', 'z-[100]', 'lg:bg-transparent', 'lg:static', 'lg:flex-row', 'lg:p-0', 'lg:justify-end', 'lg:gap-x-[7rem]', 'font-barloC', 'font-w700', 'uppercase', 'text-[2rem]', 'tracking-[1px]', 'pb-[2rem]', 'last:text-neutral-blue-300', 'last:pt-[2rem]', 'last:border-t-[1px]', 'w-full', 'lg:last:p-0', 'lg:last:border-t-0', 'lg:p-0', 'lg:w-auto', 'lg:last:ml-[3.5rem]', 'lg:text-[1.5rem]', 'xl:hover:underline',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            logo: logo_svg_1.default,
            burger: icon_hamburger_svg_1.default,
            close: icon_close_svg_1.default,
            isOpen: isOpen,
            links: links,
            isMenuVisible: isMenuVisible,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
