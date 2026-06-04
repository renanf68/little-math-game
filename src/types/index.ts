import { DefaultTheme } from "styled-components";

export interface BaseTextProps<T> extends React.HTMLAttributes<T> {
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  marginBottom?: string;
  fontSize?: keyof DefaultTheme["fontSize"];
  fontWeight?: string;
  lineHeight?: string;
  textAlign?: string;
  color?: string;
  truncate?: boolean;
}

export type IconType =
  | "play"
  | "plus"
  | "back"
  | "settings"
  | "check"
  | "flash"
  | "broom"
  | "trash";
export interface User {
  name: string;
  age: number;
  record: number;
  level: number;
  power: number;
}

export type SettingsAction = "clear" | "delete";

export type Operation = "+" | "-" | "x" | ":";

export type Question = {
  term1: number;
  term2: number;
  operation: Operation;
  result: number;
};

export type Terms = {
  term1: number;
  term2: number;
};

export interface Match {
  question: Question;
  answered?: boolean;
}

export type FeedBack = {
  isCorrect: boolean;
};

export type Matches = {
  match: number;
  isCorrect?: boolean;
};
