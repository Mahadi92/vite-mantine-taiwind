import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { mantineTheme } from "@/_app/config/mantine-theme.config";
import { rootRouter } from "./root.router";

const RootApp = () => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={mantineTheme}>
      <ModalsProvider>
        <Notifications position="top-right" />
        <RouterProvider router={rootRouter} />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default RootApp;
