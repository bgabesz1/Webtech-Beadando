const express = require("express");
const app = express();
const userRoute = express.Router();

// Model
let Models = require("../Models");
let User = Models.user;

// Add
userRoute.route("/addU").post((req, res, next) => {
	User.create(req.body, (error, data) => {
		if (error) {
			console.log(error);
		} else {
			res.json(data);
		}
	});
});

// Get All
userRoute.route("/getallU").get((req, res) => {
	User.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// Get single
userRoute.route("/getU/:id").get((req, res) => {
	User.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

// Update
userRoute.route("/updateU/:id").put((req, res, next) => {
	User.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(error, data) => {
			if (error) {
				return next(error);
			} else {
				res.json(data);
				console.log("Data updated successfully");
			}
		}
	);
});

// Delete
userRoute.route("/deleteU/:id").delete((req, res, next) => {
	User.findOneAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data,
			});
		}
	});
});

module.exports = userRoute;
