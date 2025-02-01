import React from "react";
import * as S from "./RollingPage.style.jsx";
import { useCallback, useEffect, useState } from "react";
import { getMessage, getRecipients } from "../../api/api.jsx";
import throttle from "lodash.throttle";
import Button from "../../components/common/Button/Button.jsx";
import { useParams } from "react-router-dom";
import Messages from "./Messages.jsx";
import SecondHeader from "../../components/common/Header/SecondHeader";
//
export default function RollingPage() {
  const { id: queryId } = useParams();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [recipient, setRecipient] = useState({
    id: 0,
    name: "",
    color: "purple",
    img: "",
    messageCount: 0,
    recentMessages: []
  });
  //
  const handleLoad = async () => {
    try {
      const recipientData = await getRecipients(queryId);
      const id = recipientData.id;
      setRecipient(recipientData);
      setIsLoading(true);
      let limit = offset == 0 ? 8 : 9;
      const { results, next } = await getMessage(limit, offset, id);
      setMessages((prevMessages) => [...prevMessages, ...results]);
      setOffset((prevOffset) => prevOffset + limit);
      setIsLoading(false);
      setHasNext(next);
    } catch {
      return;
    }
  };

  useEffect(() => {
    if (!isLoading) {
      handleLoad();
    }

    if (!isLoading && hasNext) {
      window.addEventListener("scroll", infiniteScroll);
    }

    return () => {
      infiniteScroll.cancel();
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [isScrollEnd]);

  const infiniteScroll = useCallback(
    throttle(() => {
      if (!isLoading) {
        const { clientHeight, scrollHeight, scrollTop } =
          document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 4) {
          setIsScrollEnd((prev) => !prev);
        }
      }
    }, 200),
    []
  );
  const handelEditClick = () => {
    setIsEdit(true);
  };
  const handelDeleteClick = () => {
    setIsEdit(false);
  };

  //

  console.log(recipient.color, recipient.img);
  return (
    <>
      <SecondHeader
        name={recipient.name}
        messageCount={recipient.messageCount}
        recentMessages={recipient.recentMessages}
      />
      <div style={{ overflowY: "auto" }}>
        <S.Contents>
          <S.ButtonFlex>
            <S.ButtonContain>
              {isEdit ? (
                <Button style={{ width: "100%" }} onClick={handelDeleteClick}>
                  저장하기
                </Button>
              ) : (
                <Button style={{ width: "100%" }} onClick={handelEditClick}>
                  편집하기
                </Button>
              )}
            </S.ButtonContain>
          </S.ButtonFlex>
          <Messages isEdit={isEdit} messages={messages} />
        </S.Contents>
        <S.Background color={recipient.color} $img={recipient.img} />
      </div>
    </>
  );
}
