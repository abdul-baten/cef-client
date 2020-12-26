export interface IError {
  code: number;
  message: string;
}

export interface IUiError {
  error_column_number: string;
  error_component: string;
  error_line_number: string;
  error_message: string;
  error_time: string;
  error_url: string;
}
