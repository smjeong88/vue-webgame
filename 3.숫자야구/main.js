/**
 * 1) main.js 파일이 웹팩 파일을 만드는데 기준이 됨
 * 2) vue 환경에서는 import , node 환경에서는 require
 * 
 */
import Vue from 'vue';
import NumberBaseball from './NumberBaseball';

new Vue(NumberBaseball).$mount('#root');
