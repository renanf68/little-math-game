import React from "react";
import styled from "styled-components";
import { useUserContext } from "../../context";
import { User } from "../../types";
import { getUserAvatar } from "../../utils/ages";
import { LevelBadge } from "../LevelBadge";
import { ScoreBadge } from "../ScoreBadge";
import { Text } from "../Text";

const UserCardStyled = styled.div`
  margin-top: 24px;
  width: fill-available;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 14px;
  background-color: white;
  cursor: pointer;
`;

const UserAvatarBox = styled.div`
  width: 48px;
  min-width: 48px;
  height: 48px;
`;

const UserInfosFlex = styled.div`
  margin-left: 14px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.div`
  flex: 1;
  min-width: 0;
`;

const BoxesFlex = styled.div`
  display: flex;
  flex-shrink: 0;
`;

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  // context
  const { handleUserSelect } = useUserContext();
  // helpers
  const avatar = React.useMemo(() => {
    if (!user?.age) return null;
    return getUserAvatar(user.age);
  }, [user?.age]);
  // UI
  const firstName = user.name.split(" ")[0];
  return (
    <UserCardStyled onClick={() => handleUserSelect(user)}>
      <UserAvatarBox>
        {avatar && <img src={avatar} alt="avatar do usuário" width="100%" />}
      </UserAvatarBox>
      <UserInfosFlex>
        <UserName>
          <Text fontSize="xl" fontWeight="500" truncate>
            {firstName}
          </Text>
        </UserName>
        <BoxesFlex>
          <LevelBadge level={user.level ?? 1} />
          <ScoreBadge score={user.record ?? 0} />
        </BoxesFlex>
      </UserInfosFlex>
    </UserCardStyled>
  );
};
