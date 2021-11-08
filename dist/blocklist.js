(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.minterBlockList = factory());
})(this, (function () { 'use strict';

	var blockList = [
		"BIPXBSC",
		"BITCOIN",
		"CARDANO",
		"CELSIUS",
		"CHAINLINK",
		"COMPOUND",
		"DECIMAL",
		"ETHEREUM",
		"EVERSTAKE",
		"FINIKO",
		"GROMAPP",
		"HARMONY",
		"HONEEBEE",
		"HONEESWAP",
		"HUBXBIP",
		"NEWMINTER",
		"NEWTON",
		"PANCAKE",
		"POLKADOT",
		"STELLAR",
		"SUSHISWAP",
		"SYNTHETIX",
		"TONCOIN",
		"TONXBIP",
		"UNISWAP",
		"VKCOIN",
		"VKCOINS"
	];

	return blockList;

}));
