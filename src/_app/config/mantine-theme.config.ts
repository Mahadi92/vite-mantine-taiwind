import { MantineThemeOverride } from "@mantine/core";

export const mantineTheme: MantineThemeOverride = {
  // colorScheme,
  globalStyles: (theme) => ({
    fontFamily: 'Verdana, sans-serif',
    body: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[9]
          : theme.colors.gray[0],
    },
  }),
};
