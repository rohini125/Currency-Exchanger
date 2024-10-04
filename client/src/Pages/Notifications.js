import React, { useState } from 'react';
import { ChakraProvider, Alert, AlertIcon, AlertTitle, AlertDescription, Button, Container, Box } from '@chakra-ui/react';

// Function to notify the user
async function notifyUser(notificationText = "Thank you for enabling notifications") {
  if (!("Notification" in window)) {
    alert("Browser does not support notifications");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification(notificationText);
  } else if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification(notificationText);
    }
  }
}

function Notifications() {
  const [userResponded, setUserResponded] = useState(false);

  // Enable notifications and set response state
  const enableNotifsAndClose = async () => {
    await notifyUser();
    setUserResponded(true);
  };

  // Disable notifications and set response state
  const disableNotifsAndClose = () => {
    setUserResponded(true);
  };

  // If the user has responded, display a message accordingly
  if (userResponded) {
    return Notification.permission === "granted" ? null : <h1>You have disabled notifications</h1>;
  }

  // Display prompt if notifications are not granted
  if (Notification.permission !== "granted") {
    return (
      <ChakraProvider>
        <Container maxW="md" mt="5">
          <Alert status="success" variant="left-accent">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>Notification</AlertTitle>
              <AlertDescription>
                Would you like to enable notifications?
              </AlertDescription>
            </Box>
            <Button colorScheme="teal" size='sm' onClick={enableNotifsAndClose} ml={4}>
              Sure!
            </Button>
            <Button colorScheme="gray" size='sm' onClick={disableNotifsAndClose} ml={2}>
              No thanks!
            </Button>
          </Alert>
        </Container>
      </ChakraProvider>
    );
  }

  return null; // Default case if notifications are already granted
}

export default Notifications;
