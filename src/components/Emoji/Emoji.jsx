import * as S from "./Emoji.styles";
import EmojiPicker from "emoji-picker-react";
import Button from "../common/Button/Button";
import Icons from "./Icons";
import { getReactions, postReaction } from "../../api/reactions";
import { useState, useEffect } from "react";
import theme from "../../styles/theme";
import smile from "../../assets/icons/smile.svg";
import { useAutoClose } from "../../hooks/useAutoClose";

export default function Emoji({ recipientId }) {
  const [reactions, setReactions] = useState([]);
  const [emoji, setEmoji] = useState({ emoji: "", type: "increase" });
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleGetReactions = () => {
    if (recipientId) {
      getReactions(recipientId)
        .then((result) => {
          if (!result) return;
          setReactions(result);
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    handleGetReactions();
  }, [recipientId]);

  const handleEmojiClick = async (emojiObject) => {
    setEmoji((prev) => {
      const postEmoji = { ...prev, emoji: emojiObject.emoji };

      postReaction(recipientId, postEmoji)
        .then(() => {
          handleGetReactions();
        })
        .catch((error) => console.error(error));

      return postEmoji;
    });

    setIsOpen(false);
  };

  const topReactions = reactions.slice(0, 3);

  return (
    <S.EmojiContainer>
      {reactions?.length === 0 ? (
        <S.NoneEmoji>이모지를 추가해보세요 😀</S.NoneEmoji>
      ) : (
        <Icons topReactions={topReactions} reactions={reactions} />
      )}
      <S.Emoji ref={ref}>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          outlineMedium
          $font={`${theme.font.H5Regular}`}
          style={{ cursor: "pointer", width: "100%", height: "36px" }}
        >
          <img src={smile} />
          <span>추가</span>
        </Button>
        {isOpen && (
          <S.StyledEmoji>
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </S.StyledEmoji>
        )}
      </S.Emoji>
    </S.EmojiContainer>
  );
}
