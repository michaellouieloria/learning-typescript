import { MatchReader } from './MatchReader';
//import { CsvFileReader  } from './CsvFileReader';
import { Summary } from './Summary';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReports';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// )

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
