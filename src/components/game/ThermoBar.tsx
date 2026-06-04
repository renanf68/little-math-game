import styled from "styled-components";
import { ReactComponent as thermo } from "../../images/little-thermo.svg";

const BoxStyled = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: fill-available;
  max-width: 156px;
  height: 32px;
  padding: 0 12px 0 10px;
  background-color: ${(props) => props.theme.colors.lighterPink};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.lightPink};
  border-radius: 10px;
`;

const PowerWrapper = styled.div`
  position: relative;
  width: fill-available;
  height: 8px;
`;
const PowerBar = styled.div`
  width: fill-available;
  height: 8px;
  background-color: white;
  border-radius: 8px;
`;

interface DifficultyFillProps {
  userLevel: number;
}

const DifficultyFill = styled.div<DifficultyFillProps>`
  position: absolute;
  top: 0;
  width: ${(props) => `${(props.userLevel / 17) * 100}%`};
  height: 8px;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: ${(props) => (props.userLevel >= 17 ? "8px" : "8px 0 0 8px")};
`;

const ThermoIcon = styled(thermo)`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

interface ThermoBarProps {
  userLevel: number;
}

export const ThermoBar = ({ userLevel }: ThermoBarProps) => {
  return (
    <BoxStyled>
      <ThermoIcon />
      <PowerWrapper>
        <PowerBar />
        <DifficultyFill userLevel={userLevel} />
      </PowerWrapper>
    </BoxStyled>
  );
};
