import * as S from "./SecondHeader.styles";
import share from "../../../assets/icons/share.svg";
import smile from "../../../assets/icons/smile.svg";
import Line from "../Line/Line";
import CircleImages from "../../CircleImages/CircleImages";
import Button from "../Button/Button";
import theme from "../../../styles/theme";
import Emoji from "../../Emoji/Emoji";

export default function SecondHeader({
  recipientId,
  name,
  messageCount,
  recentMessages,
}) {
  const images = recentMessages.map((i) => i.profileImageURL);

  return (
    <>
      <S.Username>To. {name}</S.Username>
      <S.Container>
        <S.Header>
          <S.ToUser>To. {name}</S.ToUser>
          <S.Div>
            <S.WrittenContainer>
              <CircleImages messageCount={messageCount} images={images} />
              <S.Written>
                <span>{messageCount}</span>명이 작성했어요!
              </S.Written>
            </S.WrittenContainer>
            <S.Box>
              <Emoji recipientId={recipientId} />
              <Line width="1px" height="28px" />
              <S.Share>
                <Button outlineSmall style={{ width: "100%" }}>
                  <img src={share} />
                </Button>
              </S.Share>
            </S.Box>
          </S.Div>
        </S.Header>
      </S.Container>
    </>
  );
}
