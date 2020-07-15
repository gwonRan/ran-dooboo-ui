import { Image } from 'react-native';
import React, { ReactElement } from 'react';
// ReactElement
import styled from 'styled-components/native';

interface Props {
  label: string;
  keys: number;
  borderRadius?: number | undefined;
  outline?: string;
  width?: number;
  height?: number;
  disabled: boolean;
  setChipData?: any;
  chipData: any;
  children: React.ReactElement;
  deleteIcon: any;
}

const handleClick = (index, chipData, setChipData) => {
  return setChipData(chipData.filter((chipes) => chipes.id !== index));
};

const Chip = (props: Props): ReactElement => {
  const { chipData, setChipData, borderRadius, outline, deleteIcon } = props;
  console.log(deleteIcon);
  return (
    <ChipBox>
      {
        chipData.map((chipDatas, index: number) => {
          return (
            <Chips
              borderRadius={borderRadius}
              style={outline ? { borderWidth: 1, borderColor: '#cccccc' } : { backgroundColor: '#609FFF' }}>
              {
                chipDatas.profile
                  ? <Image
                    source={chipDatas.profile ? chipDatas.profile : undefined}
                    style={{ width: 20, height: 20, borderRadius: 100 }}
                  /> : undefined
              }
              <TextBox style=
                {[chipDatas.profile ? { marginLeft: 5 } : undefined,
                outline ? { color: 'black' } : { color: 'white' }]}
              >
                {chipDatas.label}
              </TextBox>
              {deleteIcon
                ? <DeleteButton onClick={(): string[] => handleClick(index, chipData, setChipData)}>
                  <Image
                    source={deleteIcon}
                    style={{ width: 18, height: 18 }}
                  />
                </DeleteButton> : undefined
              }
            </Chips>
          );
        })
      }
    </ChipBox >
  );
};

const ChipBox = styled.View`
    flex-Direction: row;
`;

const Chips = styled.View`
    border-radius: ${({ borderRadius }) => borderRadius};
    padding: .3em .4em;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin-right: 3;
`;

const TextBox = styled.Text`
    font-size: 15;
`;

const DeleteButton = styled.View`
    margin-left: 3;
    align-content: center;
    justify-content: center;
    opacity: .2;
`;

export default Chip;
