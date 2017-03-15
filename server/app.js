require('newrelic');
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("winston");
var controllers = require("./controllers/index");

class Server {

	/**
	 * Constructor.
	 *
	 * @class Server
	 * @constructor
	 */
	constructor() {
		// Create the express app.
		this.app = express();
		this.configure();
		this.configureRoutes();
		this.listen();
	}

	/**
	 * Configure application
	 *
	 * @class Server
	 * @method config
	 * @return void
	 */
	configure() {
		this.app.set("views", path.join(__dirname, "/views"));
		this.app.set("view engine", "jade");
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(express.static(path.join(__dirname, "/public")));

		// Catch 404 and forward to error handler
		this.app.use((err, req, res, next) => {
			err.status = 500;
			next(err);
		});
	}

	/**
	 * Configure routes
	 *
	 * @class Server
	 * @method configureRoutes
	 * @return void
	 */
	configureRoutes() {
		this.app.use("/", controllers.getIndex);
	}

	/**
	 * Start the app
	 */
	listen() {
		let port = process.env.PORT || 7777;
		this.app.listen(port, () => {
			logger.info("koryko.ch is up and running on port: " + port);
		});
	}
}

const server = new Server();
