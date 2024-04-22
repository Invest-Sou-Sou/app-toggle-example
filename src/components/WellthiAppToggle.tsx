// Component: WellthiAppToggle
// Location: /src/components/WellthiAppToggle.tsx
import React from "react";
import { Linking, Pressable } from "react-native";
import { SvgUri } from "react-native-svg";

export const WellthiTogggle = () => {
  const WELLTHI_APP_URL = "https://com-wellthiapp.onelink.me/ODkm/ifgtcoy8";
  const WELLTHI_LOGO_SVG_URL = "https://wellthi.com/assets/images/logo.svg";

  return (
    <Pressable
      hitSlop={{
        left: 10,
        right: 10,
        bottom: 10,
        top: 10,
      }}
      onPress={() => {
        Linking.openURL(WELLTHI_APP_URL);
      }}
    >
      <SvgUri uri={WELLTHI_LOGO_SVG_URL} width={22} height={22} />
    </Pressable>
  );
};
