'use client';

import 'swiper/css';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaListUl } from 'react-icons/fa';
import { Mousewheel } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import styles from './ProductsFilters.module.css';

const ProductsFilters = () => {
  return (
    <div className={`${styles.productsFilters}`}>
      <Swiper {...swiperOptions}>
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index} className={`${styles.slide}`}>
            <FilterItem />
          </SwiperSlide>
        ))}
      </Swiper>

      <Dropdown
        classNames={{
          trigger: styles.dropdownTrigger,
        }}
      >
        <DropdownTrigger>
          <FaListUl />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="1">New file</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProductsFilters;

function FilterItem() {
  return <button className={`${styles.filterItem}`}>FilterItem</button>;
}

const swiperOptions: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 50,
  modules: [Mousewheel],
  mousewheel: true,
};
