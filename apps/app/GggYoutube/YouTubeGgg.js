// https://developers.google.com/youtube/v3/getting-started
//=============================================================================
// https://www.npmjs.com/package/request
// https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
var request = require("request");
// Fiddler
// process.env.HTTP_PROXY = "http://127.0.0.1:8888";
//=============================================================================
class YouTubeGgg {
  constructor() {
    this.apiRoot = "https://www.googleapis.com/youtube/v3";
    this.videoId = "7lCDEYXw3mM";
    this.YOUR_API_KEY = "AIzaSyAtTkqL7AcnUHAm8-6cL_cl7o0R1MECxVE";
  }
  printResponse(error, response, body) {
    // Print the error if one occurred
    if (error) {
      console.log(
        "error:",
        "error.code:",
        error.code,
        "error.message:",
        error.message,
        "error.stack:",
        error.stack
      );
    }
    // Print the response status code if a response was received
    console.log("statusCode:", response && response.statusCode);
    // Print the HTML for the Google homepage.
    console.log("body:", body);
  }
  // https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
  makeRequest(url) {
    var _self = this;
    request(
      {
        rejectUnauthorized: false,
        url: url,
        headers: {
          // "Accept-Encoding": "gzip",
        }
      },
      function(error, response, body) {
        _self.printResponse(error, response, body);
      }
    );
  }
  /*This example retrieves a video resource and identifies several
    resource parts that should be included in the API response.*/
  getVideoResource() {
    var url = `${this.apiRoot}/videos?id=${this.videoId}&key=${
      this.YOUR_API_KEY
    }&part=snippet,contentDetails,statistics,status`;
    this.makeRequest(url);
  }
  /*This example modifies the part parameter value so that the
    contentDetails and status properties are not included in the response.*/
  getVideoStatistics() {
    var url = `${this.apiRoot}/videos?id=${this.videoId}&key=${
      this.YOUR_API_KEY
    }&part=snippet,statistics`;
    this.makeRequest(url);
  }
  /*This example adds the fields parameter to remove all
        kind and etag properties from the API response.*/
  getVideoFields() {
    var url = `${this.apiRoot}/videos?id=${this.videoId}&key=${
      this.YOUR_API_KEY
    }&part=snippet,statistics&fields=items(id,snippet,statistics)`;
    this.makeRequest(url);
  }
  /*This example modifies the fields parameter from example 3
    so that in the API response, each video resource's snippet
    object only includes the channelId, title,
    and categoryId properties.*/
  getVideoSnippet() {
    var url = `${this.apiRoot}/videos?id=${this.videoId}&key=${
      this.YOUR_API_KEY
    }&part=snippet,statistics&fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`;
    this.makeRequest(url);
  }
}
var youTubeGgg = new YouTubeGgg();
/* 
youTubeGgg.getVideoResource();
youTubeGgg.getVideoStatistics();
youTubeGgg.getVideoFields();
*/
youTubeGgg.getVideoSnippet();
