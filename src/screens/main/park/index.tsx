import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import { EmptyParkItem, ParkItem } from '../../../components';
import { withAppTheme } from '../../../components/HOC';
import { ScreensEnum } from '../../../constants';
import { useGetSlots } from '../../../hooks';
import { ThemedComponent, TParkItem } from '../../../types';
import ParkHeader from './park-header';

const ParkScreen: ThemedComponent = ({ theme }) => {
  const navigation = useNavigation();
  const { slots: parkingSlots } = useGetSlots();

  const handleGoToAddAutomobile = useCallback(
    (slot: TParkItem) =>
      navigation.navigate(
        ScreensEnum.main.addAutomobile as unknown as never,
        {
          slot,
        } as unknown as never
      ),
    [navigation]
  );

  const handleGoToSlotDetails = useCallback(
    (slot: TParkItem) =>
      navigation.navigate(
        ScreensEnum.main.slotDetails as unknown as never,
        {
          slot,
        } as unknown as never
      ),
    [navigation]
  );

  const handleSlotClicked = useCallback(
    (slot: TParkItem) => {
      if (slot.isAvailabel) {
        handleGoToAddAutomobile(slot);
        return;
      }

      handleGoToSlotDetails(slot);
    },
    [handleGoToAddAutomobile, handleGoToSlotDetails]
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: theme.palette.common.white,
        paddingBottom: 120, // to avoid bottomBar cut out
      }}
      horizontal={false}
      stickyHeaderHiddenOnScroll
      stickyHeaderIndices={[0]}
    >
      <ParkHeader />
      {parkingSlots.map((slot) => (
        <TouchableOpacity key={slot.id} onPress={() => handleSlotClicked(slot)}>
          {slot.isAvailabel ? (
            <EmptyParkItem slot={slot} />
          ) : (
            <ParkItem slot={slot} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default withAppTheme(ParkScreen);
