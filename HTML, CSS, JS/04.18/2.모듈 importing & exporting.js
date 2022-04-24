/*
To export a module, use the export keyword.
There are two ways to export a module: the default export and the named exports.

The default export is able to be used only once for a file, but can change the name when exported.
The named exports can be used multiple times for a file,
but can only be used with the same name when exported and imported.

In the exchange directory, import a module to make the code in index.js work.

Expected output:
132987
244900
57759
3925.0000000000005
*/

import { yuanToWon, yenToWon } from './exchange/asia.js';
import { dollarToWon } from "./exchange/dollar.js";
import euroToWon from './exchange/euro.js'; // There is no {} because euroToWon is a default export

console.log(euroToWon(100));
console.log(dollarToWon(200));
console.log(yuanToWon(300));
console.log(yenToWon(400));