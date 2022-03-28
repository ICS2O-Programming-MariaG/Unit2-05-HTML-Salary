// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: March 28, 2022
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {
  const TAX_RATE = 0.1805;
  let hours = parseFloat(document.getElementById("hours-worked").value);
  let rate = parseFloat(document.getElementById("hourly-rate").value);
  let total = hours * rate;
  let tax = total * TAX_RATE;
  let pay = total - tax;
  //Calculations
  document.getElementById("calculations").innerHTML = "The amount of money you'll take home is " + pay.toFixed(2) + ".<br>The amount of money put to taxes is " + tax.toFixed(2) + ".";
}