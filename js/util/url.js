/*
 * Copyright 2012-present, Polis Technology Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights for non-commercial use can be found in the PATENTS file
 * in the same directory.
 */

// build may prepend 'devWithPreprod'

var prod = "https://pol.is/";
var preprod = "https://preprod.pol.is/";
var embed = "https://embed.pol.is/";
var survey = "https://survey.pol.is/";
var localhost = "http://localhost:5000/";
var localhost8000 = "http://localhost:8000/";
var urlPrefix = prod;
if (document.domain.indexOf("preprod") >= 0) {
  urlPrefix = preprod;
}
if (document.domain.indexOf("embed") >= 0) {
  urlPrefix = embed;
}
if (document.domain.indexOf("survey") >= 0) {
  urlPrefix = survey;
}
if ((-1 === document.domain.indexOf("pol.is")) && (-1 === document.domain.indexOf("polis.io"))) {
  urlPrefix = localhost;
}

if (document.domain === "localhost" && document.location.port === "8000") {
  urlPrefix = localhost8000;
}

if (0 === document.domain.indexOf("192.168")) {
  urlPrefix = "http://" + document.location.hostname + ":" + document.location.port + "/";
}

function isPreprod() {
  return urlPrefix === preprod;
}

function isLocalhost() {
  return urlPrefix === localhost || urlPrefix === localhost8000;
}

module.exports = {
  urlPrefix: urlPrefix,
  isPreprod: isPreprod,
  isLocalhost: isLocalhost
};
