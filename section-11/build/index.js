"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
//import { CsvFileReader  } from './CsvFileReader';
var Summary_1 = require("./Summary");
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReports';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// )
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
