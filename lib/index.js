"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// module.exports exports the function getContests as a promise and exposes it as a module.
// we can import an exported module by using require().
class mcGenericMethods {
    getOAuthAccessToken(clientId, clientSecret, grantType, code, redirect_uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const axios = require("axios"); // Importing the Axios module to make API requests
            let result;
            let postBody;
            let headers = {
                "Content-Type": "application/json",
            };
            if (grantType === "client_credentials") {
                postBody = {
                    grant_type: "client_credentials",
                    client_id: clientId,
                    client_secret: clientSecret,
                };
            }
            else if (grantType === "authorization_code") {
                postBody = {
                    grant_type: "authorization_code",
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code,
                    redirect_uri: redirect_uri,
                };
            }
            let sfmcAuthServiceApiUrl = "https://mcj6cy1x9m-t5h5tz0bfsyqj38ky.auth.marketingcloudapis.com/v2/token";
            yield axios // Making a GET request using axios and requesting information from the API
                .post(sfmcAuthServiceApiUrl, postBody, { headers: headers })
                .then((response) => {
                // If the GET request is successful, this block is executed
                result = response; // The response of the API call is passed on to the next block
            })
                .catch((err) => {
                console.log(err); // Error handler
            });
            return result; // The contest data is returned
        });
    }
}
exports.default = mcGenericMethods;
