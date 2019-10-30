"use strict";

const utils = require("../utils/utils");

module.exports = {
	name: "trader",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: ["signal"],	

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return "Hello Moleculer";
		},

		buy: {
			params: {
				amount: "number",
				depth: "number",
				symbol: "string",
				account_type: "string"
			},
			handler(ctx){
				return utils.buy(ctx.symbol, ctx.depth, ctx.amount, ctx.account_type);
			}
		},

		sell: {
			params:{
				amount:"number",
				depth:"number",
				symbol:"string",
				account_type: "string"
			},
			handler(ctx){
				return utils.sell(ctx.symbol, ctx.depth, ctx.amount, ctx.account_type);
			}
		},

		/**
		 * Welcome a username

		/**
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
		}
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