import { letterClientApi } from "@/lib/client-api/letters";
import { LetterList } from "../component/LetterList/LetterList";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function LetterListPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["letters"],
    queryFn: letterClientApi.getLetters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LetterList />
    </HydrationBoundary>
  );
}
