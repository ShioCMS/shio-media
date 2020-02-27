import React from 'react';
import { Flex, Text, FormControl, Input } from '@chakra-ui/core';
import styles from './Header.module.css';
import TopHeader from './TopHeader';

function Header({

  isUploading = false,
  onPhotoSelect,
}) {
  return (
    <div>
      <TopHeader></TopHeader>
      <Flex
        px="4"
        py="4"       
      >
        <Flex
          px="0"
          py="0"
          width="100%"
        >
          <div className={styles.shioharaLogoOuter}>
            <div className={styles.shioharaLogoInner}>
              Sh
            </div>
          </div>
          <Text
            as="div"
            fontSize="xl"
            fontWeight="bold"
            className={styles.shTextLogo}
          >
            Shiohara<br/>Stock
            </Text>
          <FormControl display="inline-flex"
            marginLeft="20px" width="calc(100% - 150px)">
            <Input id="search" placeholder="Search" width="100%"/>
          </FormControl>
        </Flex>

      </Flex>
    </div>
  );
};

export default Header;