import './error-message.css';
import { FC } from "react";
import { ErrorMessageProps } from "../../types";

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return error ? <p className="error-message">{error}</p> : null;
};
