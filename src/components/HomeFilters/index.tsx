import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { colors } from '../../global/styles/colors';
import {
  ArrowDownIcon,
  FilterIcon,
  PickupIcon,
} from '../../global/styles/icons';
import QuickFilter from '../QuickFilter';
import { styles } from './styles';

const HomeFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleChangeActiveFilters = (filterKey: string) => {
    const newActiveFilters = [...activeFilters];
    const foundIndex = newActiveFilters?.findIndex(
      (item) => item === filterKey
    );
    if (foundIndex === -1) {
      newActiveFilters?.push(filterKey);
    } else {
      newActiveFilters?.splice(foundIndex, 1);
    }
    setActiveFilters(newActiveFilters);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.homeFilterListContainer}
    >
      <QuickFilter
        label="Ordenar"
        rightIcon={
          <ArrowDownIcon width={24} height={24} fill={colors?.lightGray} />
        }
        selected={activeFilters?.includes('orderBy')}
        onPress={() => handleChangeActiveFilters('orderBy')}
      />

      <QuickFilter
        label="Pra retirar"
        leftIcon={<PickupIcon width={16} height={61} />}
        selected={activeFilters?.includes('pickup')}
        onPress={() => handleChangeActiveFilters('pickup')}
      />

      <QuickFilter
        label="Entrega grátis"
        selected={activeFilters?.includes('freeDelivery')}
        onPress={() => handleChangeActiveFilters('freeDelivery')}
      />

      <QuickFilter
        label="Vale-refeição"
        rightIcon={
          <ArrowDownIcon width={24} height={24} fill={colors?.lightGray} />
        }
        selected={activeFilters?.includes('mealTicket')}
        onPress={() => handleChangeActiveFilters('mealTicket')}
      />

      <QuickFilter
        label="Distância"
        rightIcon={
          <ArrowDownIcon width={24} height={24} fill={colors?.lightGray} />
        }
        selected={activeFilters?.includes('distance')}
        onPress={() => handleChangeActiveFilters('distance')}
      />

      <QuickFilter
        label="Entrega Parceira"
        selected={activeFilters?.includes('partnerDelivery')}
        onPress={() => handleChangeActiveFilters('partnerDelivery')}
      />

      <QuickFilter
        label="Super Restaturantes"
        selected={activeFilters?.includes('superRestaurants')}
        onPress={() => handleChangeActiveFilters('superRestaurants')}
      />

      <QuickFilter
        label="Filtros"
        rightIcon={<FilterIcon width={16} height={16} />}
        selected={activeFilters?.includes('filters')}
        onPress={() => handleChangeActiveFilters('filters')}
      />
    </ScrollView>
  );
};

export default HomeFilters;
