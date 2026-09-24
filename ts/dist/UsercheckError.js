"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsercheckError = void 0;
class UsercheckError extends Error {
    isUsercheckError = true;
    sdk = 'Usercheck';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.UsercheckError = UsercheckError;
//# sourceMappingURL=UsercheckError.js.map