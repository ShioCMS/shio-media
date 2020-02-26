import React from 'react';
import {
  Flex, 
  Button, 
  Text, 
  SimpleGrid, 
  Stack, 
  Avatar, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider
} from '@chakra-ui/core';
import { FaCloudUploadAlt } from "react-icons/fa";

function TopHeader({

  isUploading = false,
  onPhotoSelect,
}) {
  return (
    <SimpleGrid columns={2}>
      <Flex
        px="4"
        py="0"
        bg="#222"
        color="#cacaca"
      >
        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          Photos
            </Text>
        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          Illustration
            </Text>

        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          Vectors
            </Text>

        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          Videos
            </Text>

        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          Models
            </Text>

        <Text
          as="div"
          fontSize="sm"
          fontWeight="regular"
          margin="10px"
        >
          3D
            </Text>
      </Flex>
      <Flex
        px="4"
        py="0"
        bg="#222"
        color="#cacaca"

        justify="space-between"
      >
        <Flex>
        </Flex>
        <Flex align="end"
          marginTop="5px"
          marginBottom="5px">

          <Button
            size="sm"
            bg="#222"
            color="#cacaca"
            isLoading={isUploading}
            loadingText="Uploading..."
            leftIcon={FaCloudUploadAlt}
            marginRight="10px"
          >
            Upload
                </Button>


          <Menu >
            <MenuButton as={Button} size="sm" rightIcon="chevron-down" bg="#222"
              color="#cacaca">
              <Stack isInline marginLeft="15px">
                <Avatar size="xs" name="Alexandre Oliveira" marginRight="10px" />
                <Text margin="5px" marginRight="15px">Alexandre</Text>
              </Stack>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>



        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default TopHeader;