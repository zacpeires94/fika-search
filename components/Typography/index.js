import styled from "styled-components";

export const RegularBodyText = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
  ${(props) => {
    if (props.homePageImage) {
      return `
        width: 180px;
        flex-wrap: wrap;
        `;
    }
  }}
`;

export const LargeBrandText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  color: rgb(245, 197, 24);

  ${(props) => {
    if (props.brandLogo) {
      return `
            color: black;
        `;
    }
  }}
`;
