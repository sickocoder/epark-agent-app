import { useNavigation } from '@react-navigation/native';
import { FC, useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Typography } from '../../../../components';
import { ScreensEnum } from '../../../../constants';
import { UserContext } from '../../../../context';
import { useGetSlots } from '../../../../hooks';
import HomeMainContentCard from './home-main-content-card';

const HomeMainContent: FC = () => {
  const navigation = useNavigation();
  const { userInfo } = useContext(UserContext);

  const { slots } = useGetSlots(userInfo ? userInfo.locationReference : '');

  return (
    <Box>
      <Typography>Adicionado recentemente</Typography>
      {slots
        .filter((slot) => !slot.isAvailabel)
        .map((slot) => (
          <TouchableOpacity
            key={slot.slotId}
            onPress={() => {
              navigation.navigate(
                ScreensEnum.main.slotDetails as unknown as never,
                {
                  slot,
                } as unknown as never
              );
            }}
          >
            <HomeMainContentCard slotInfo={slot} />
          </TouchableOpacity>
        ))}
    </Box>
  );
};

export default HomeMainContent;
