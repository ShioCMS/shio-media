import React, { memo, useRef } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Stack,
  Textarea
} from "@chakra-ui/core"

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <div>
      <Button ref={btnRef} variantColor="teal" border="none" onClick={onOpen}>
        Sign Up
        </Button>
      <Drawer
        isOpen={isOpen} placement="bottom"
        onClose={onClose} finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>

          <DrawerCloseButton border="none" />
          <DrawerHeader>Sign up Now</DrawerHeader>

          {/* Form */}
          <DrawerBody >
            <Stack height="30vh">
              <Input w="98%" placeholder="Name" />
              <Input w="98%" placeholder="Email" />
              <Textarea w="98%" h="100%" placeholder="Message" />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variantColor="red" border="none" mr={3} onClick={onClose}>
              Cancel
              </Button>
            <Button variantColor="blue" border="none">Save</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Header