import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundWhite};
  `}
`;

export const Content = styled.View`
  height: 70%;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.backgroundWater};
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.textWhite};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    margin-top: 20px;
    color: ${theme.colors.textWhite};
  `}
`;
