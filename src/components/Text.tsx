import styled from "styled-components";
import { BaseTextProps } from "../types";

const TextStyled = styled.p<BaseTextProps<HTMLParagraphElement>>`
  margin-top: ${(props) => props.marginTop ?? 0};
  margin-bottom: ${(props) => props.marginBottom ?? 0};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  font-size: ${(props) =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize.lg};
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color ?? props.theme.colors.gray};
  ${(props) =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;

export const Text = ({
  truncate,
  ...props
}: BaseTextProps<HTMLParagraphElement>) => {
  return <TextStyled truncate={truncate} {...props} />;
};
