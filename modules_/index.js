import {PI, getCircumference, getArea, getVolume} from './mathUtil.js'; ;

console.log(PI);

const circumference = getCircumference(5);

const area = getArea(5);

const volume = getVolume(5);

console.log(`${circumference.toFixed(2)} cm`);

console.log(`${area.toFixed(2)} cm2`);

console.log(`${volume.toFixed(2)} cm3`);