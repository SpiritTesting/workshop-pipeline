export interface ReportCucumberModel {
  description: string;
  elemetns: Element[];
  id: string;
  line: number;
  keyword: string;
  name: string;
  tags: Tag[];
  uri: string;
}

export interface Tag {
  name: string;
  line: number;
}

export interface Element {
  description: string;
  id: string;
  keyword: string;
  line: number;
  name: string;
  steps: Step[];
  tags: Tag[];
}

export interface Step {
  arguments: Argument[];
  keyword: string;
  line: number;
  name: string;
  match: Match;
  hidden: boolean;
  result: Result;
}

export interface Result {
  status: string;
  duration: number
}

export interface Argument {
  name: string;
}

export interface Match {
  location: string;
}
