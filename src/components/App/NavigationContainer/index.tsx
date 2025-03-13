import {createStaticNavigation} from '@react-navigation/native';
import {rootNavigator} from './navigators/rootNavigator';
import {useTranslation} from '../../../features/language';
import React, {useMemo} from 'react';

export const NavigationContainer = React.memo(
  ({onReady}: {onReady?: () => void}) => {
    const {t} = useTranslation();

    const StaticNavigation = useMemo(
      () => createStaticNavigation(rootNavigator(t)),
      [t],
    );

    return <StaticNavigation onReady={onReady} />;
  },
);

NavigationContainer.displayName = 'NavigationContainer';
