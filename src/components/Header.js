import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/core';
import styles from './Header.module.css';

function Header({

  isUploading = false,
  onPhotoSelect,
}) {
  return (
    <Flex
      px="4"
      py="4"
      justify="space-between"
    >
<Flex
      px="0"
      py="0"
      justify="space-between"
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
        Shiohara Stock
            </Text>
            </Flex>
      <Flex align="end">
        <Button
          size="md"
          variant="outline"
          variantColor="blue"
          isLoading={isUploading}
          loadingText="Uploading..."
        >
          Upload Photo
                </Button>
      </Flex>
    </Flex>
  );
};

export default Header;