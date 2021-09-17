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
    getOAuthAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const axios = require("axios"); // Importing the Axios module to make API requests
            let result;
            /**
             * public getOAuthAccessToken(
              clientId: string,
              clientSecret: string,
              req: any,
              res: any
            ): Promise<any> {
              let self = this;
              var tssd = "";
              tssd = req.body.tssd ? req.body.tssd : process.env.BASE_URL;
              console.log("authorizetssd:" + tssd);
              let headers = {
                "Content-Type": "application/json",
              };
              let postBody = {
                grant_type: "authorization_code",
                client_id: clientId,
                client_secret: clientSecret,
                code: req.body.authorization_code,
                redirect_uri: process.env.REDIRECT_URL,
              };
              return self.getOAuthTokenHelper(headers, postBody, res, tssd);
            }
             public getOAuthTokenHelper(
              headers: any,
              postBody: any,
              res: any,
              tssd: string
            ): Promise<any> {
              return new Promise<any>((resolve, reject) => {
                console.log("author" + JSON.stringify(tssd));
                let sfmcAuthServiceApiUrl =
                  "https://" + tssd + ".auth.marketingcloudapis.com/v2/token";
                // this.isAccessToken = true;
                console.log("sfmcAuthServiceApiUrl:" + sfmcAuthServiceApiUrl);
                axios
                  .post(sfmcAuthServiceApiUrl, postBody, { headers: headers })
                  .then((response: any) => {
                    let refreshToken = response.data.refresh_token;
                    this.getRefreshTokenHelper(refreshToken, tssd, true, res);
                  })
                  .catch((error: any) => {
                    // error
                    let errorMsg = "Error getting OAuth Access Token.";
                    errorMsg += "\nMessage: " + error.message;
                    errorMsg +=
                      "\nStatus: " + error.response ? error.response.status : "<None>";
                    errorMsg +=
                      "\nResponse data: " + error.response
                        ? Utils.prettyPrintJson(JSON.stringify(error.response.data))
                        : "<None>";
                    Utils.logError(errorMsg);
                    reject(errorMsg);
                  });
              });
            }
            //Helper method to get refresh token
            public getRefreshTokenHelper(
              refreshToken: string,
              tssd: string,
              returnResponse: boolean,
              res: any
            ): Promise<any> {
              return new Promise<any>((resolve, reject) => {
                console.log("tssdrefresh:" + tssd);
                console.log("returnResponse:" + returnResponse);
                let sfmcAuthServiceApiUrl =
                  "https://" + tssd + ".auth.marketingcloudapis.com/v2/token";
                let headers = {
                  "Content-Type": "application/json",
                };
                console.log("sfmcAuthServiceApiUrl:" + sfmcAuthServiceApiUrl);
                let postBody1 = {
                  grant_type: "refresh_token",
                  client_id: process.env.DF18DEMO_CLIENTID,
                  client_secret: process.env.DF18DEMO_CLIENTSECRET,
                  refresh_token: refreshToken,
                };
                axios
                  .post(sfmcAuthServiceApiUrl, postBody1, { headers: headers })
                  .then((response: any) => {
                    let bearer = response.data.token_type;
                    let tokenExpiry = response.data.expires_in;
                    // this._accessToken = response.data.refresh_token;
                    //this._oauthToken = response.data.access_token;
                    Utils.logInfo("Auth Token:" + response.data.access_token);
                    const customResponse = {
                      refreshToken: response.data.refresh_token,
                      oauthToken: response.data.access_token,
                    };
                    if (returnResponse) {
                      res.status(200).send(customResponse);
                    }
                    resolve(customResponse);
                  })
                  .catch((error: any) => {
                    let errorMsg = "Error getting refresh Access Token.";
                    errorMsg += "\nMessage: " + error.message;
                    errorMsg +=
                      "\nStatus: " + error.response ? error.response.status : "<None>";
                    errorMsg +=
                      "\nResponse data: " + error.response
                        ? Utils.prettyPrintJson(JSON.stringify(error.response.data))
                        : "<None>";
                    Utils.logError(errorMsg);
                    reject(errorMsg);
                  });
              });
            }
          };
             */
            let clientId = "di1y81v0ita8ja5qume0em4l";
            let clientSecret = "e9NdAPGQZUuVnt6qkCdNHQF3";
            let headers = {
                "Content-Type": "application/json",
            };
            let postBody = {
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            };
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
