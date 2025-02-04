import styled from "styled-components";
import select from "../../assets/icons/select.svg";

export default function SelectableBox({
  items,
  selected,
  onSelect,
  onClick,
  type,
}) {
  const handleClick = (item, index) => {
    const isColorType = type === "color";
    const value = isColorType ? item.key : item;

    onClick("backgroundColor", isColorType ? value : "beige");
    onClick("backgroundImageURL", isColorType ? null : value);
    onSelect(isColorType ? item.key : index);
  };

  if (!Array.isArray(items) || items.length === 0) {
    return <div>선택 가능한 항목이 없습니다.</div>;
  }

  return (
    <Grid>
      {items.map((item, index) => (
        <Box
          key={index} //여기 3줄을 어떻게 할까..
          $color={type === "color" ? item.color : null}
          $backgroundImage={type === "image" ? `url(${item})` : null}
          onClick={() => {
            handleClick(item, index);
          }}
        >
          {selected === (type === "color" ? item.key : index) && (
            <CheckIcon src={select} alt="선택됨" />
          )}
        </Box>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  aspect-ratio: 1 / 1;
  width: 720px;
  gap: 16px;
  margin-top: 10px;
  margin-bottom: 40px;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 481px) and (max-width: 740px) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 741px) and (max-width: 768px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Box = styled.div`
  width: 168px;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  background-color: ${({ $color }) => $color || "transparent"};
  background-image: ${({ $backgroundImage }) => $backgroundImage || "none"};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  ${({ selected }) =>
    selected &&
    `
    opacity: 0.3;
  `}

  @media (max-width: 480px) {
    min-width: 168px;
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 740px) {
    min-width: 168px;
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  @media (min-width: 741px) and (max-width: 768px) {
    min-width: 168px;
    aspect-ratio: 1 / 1;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1280px) {
    min-width: 168px;
    height: 168px;
  }
`;

const CheckIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
