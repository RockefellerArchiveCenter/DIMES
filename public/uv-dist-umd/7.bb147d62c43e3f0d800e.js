(window.webpackJsonpUV=window.webpackJsonpUV||[]).push([[7],{94:function(n,t,o){"use strict";o.r(t),o.d(t,"startFocusVisible",(function(){return s}));var e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],s=function(){var n=[],t=!0,o=document,s=function(t){n.forEach((function(n){return n.classList.remove("ion-focused")})),t.forEach((function(n){return n.classList.add("ion-focused")})),n=t},i=function(){t=!1,s([])};o.addEventListener("keydown",(function(n){(t=e.includes(n.key))||s([])})),o.addEventListener("focusin",(function(n){if(t&&n.composedPath){var o=n.composedPath().filter((function(n){return!!n.classList&&n.classList.contains("ion-focusable")}));s(o)}})),o.addEventListener("focusout",(function(){o.activeElement===o.body&&s([])})),o.addEventListener("touchstart",i),o.addEventListener("mousedown",i)}}}]);