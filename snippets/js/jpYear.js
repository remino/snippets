#!/usr/bin/env node

const options = { year: 'numeric', era: 'long', calendar: 'japanese' };
const today = new Date();
const japaneseDate = today.toLocaleDateString('ja-JP-u-ca-japanese', options);

console.log(japaneseDate);

