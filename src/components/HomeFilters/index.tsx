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

  const isActiveFilter = (inputFilter: string) => {
    return activeFilters?.includes(inputFilter);
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
          <ArrowDownIcon
            width={24}
            height={24}
            fill={isActiveFilter('orderBy') ? colors?.main : colors?.lightGray}
          />
        }
        selected={isActiveFilter('orderBy')}
        onPress={() => handleChangeActiveFilters('orderBy')}
      />

      <QuickFilter
        label="Pra retirar"
        leftIcon={
          <PickupIcon
            width={16}
            height={61}
            fill={isActiveFilter('pickup') ? colors?.main : colors?.lightGray}
          />
        }
        selected={isActiveFilter('pickup')}
        onPress={() => handleChangeActiveFilters('pickup')}
      />

      <QuickFilter
        label="Entrega grátis"
        selected={isActiveFilter('freeDelivery')}
        onPress={() => handleChangeActiveFilters('freeDelivery')}
      />

      <QuickFilter
        label="Vale-refeição"
        rightIcon={
          <ArrowDownIcon
            width={24}
            height={24}
            fill={
              isActiveFilter('mealTicket') ? colors?.main : colors?.lightGray
            }
          />
        }
        selected={isActiveFilter('mealTicket')}
        onPress={() => handleChangeActiveFilters('mealTicket')}
      />

      <QuickFilter
        label="Distância"
        rightIcon={
          <ArrowDownIcon
            width={24}
            height={24}
            fill={isActiveFilter('distance') ? colors?.main : colors?.lightGray}
          />
        }
        selected={isActiveFilter('distance')}
        onPress={() => handleChangeActiveFilters('distance')}
      />

      <QuickFilter
        label="Entrega Parceira"
        selected={isActiveFilter('partnerDelivery')}
        onPress={() => handleChangeActiveFilters('partnerDelivery')}
      />

      <QuickFilter
        label="Super Restaturantes"
        selected={isActiveFilter('superRestaurants')}
        onPress={() => handleChangeActiveFilters('superRestaurants')}
      />

      <QuickFilter
        label="Filtros"
        rightIcon={
          <FilterIcon
            width={16}
            height={16}
            fill={isActiveFilter('filters') ? colors?.main : colors?.lightGray}
          />
        }
        selected={isActiveFilter('filters')}
        onPress={() => handleChangeActiveFilters('filters')}
      />
    </ScrollView>
  );
};

export default HomeFilters;
