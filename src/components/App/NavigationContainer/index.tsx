import {createStaticNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {useTranslation} from '../../../features/language';
import {rootNavigator} from './navigators/rootNavigator';

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
