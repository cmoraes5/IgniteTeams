import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 10px;

    flex-direction: row;
    align-items: center;

    padding: 24px;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `};
`;

export const Icon = styled(MaterialCommunityIcons).attrs(({theme}) => ({
    name: "account-group",
    size: 32,
    color: theme.COLORS.GREEN_700
}))`
    margin-right: 20px;
`;