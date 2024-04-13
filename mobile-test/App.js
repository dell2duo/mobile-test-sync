import { RootNavigator } from "./src/navigation/root";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";

const queryClient = new QueryClient({});

export default function App() {
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}
