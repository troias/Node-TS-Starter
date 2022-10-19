"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const error = (req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found" });
};
exports.error = error;
