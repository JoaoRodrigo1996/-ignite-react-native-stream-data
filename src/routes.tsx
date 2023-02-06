import { AnimatePresence } from "framer-motion";
import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";

import { useAuth } from "../src/hooks/useAuth";

import { Home } from "../src/screens/Home";
import { SignIn } from "../src/screens/SignIn";

export function Routes() {
  const theme = useTheme();
  const { user } = useAuth();

  return (
    <View style={{ backgroundColor: theme.colors.black, flex: 1 }}>
      <AnimatePresence exitBeforeEnter>
        {user.id ? <Home key="home" /> : <SignIn key="signIn" />}
      </AnimatePresence>
    </View>
  );
}
