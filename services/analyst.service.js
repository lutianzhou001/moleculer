const utils = require("../utils/utils");

module.exports = {
	name: "analyst",
	/**
	 * Service settings
	 */
	settings: {
	},
	/**
	 * Service dependencies
	 */
	dependencies: [],
	/**
	 * Actions
	 */
	actions: {
		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		analyze: {
			params: {
				symbol: "string",
				signal: "string"
			},
			handler(ctx) {
				console.log(ctx.params.symbol);
				let amount = utils.getAmount(ctx.params.symbol);
				let leverageAmount = utils.getLeverageAmount(ctx.params.symbol);
				let depthBid = utils.getDepthBid();
				let depthAsk = utils.getDepthAsk();
				if (amount > 0 && ctx.symbol == "buy") {
					ctx.call("buy", { amount: amount, depth: depthBid, symbol: ctx.params.symbol });
				}
				else if (leverageAmount > 0 && ctx.symbol == "sell") {
					ctx.call("sell", { amount: leverageAmount, depth: depthAsk, symbol: ctx.params.symbol });
				}
			},
		},
		//get signal from Fcoin
		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
	
};
