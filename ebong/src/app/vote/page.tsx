import { VoteProfileList } from "../component/VoteProfileList/VoteProfileList";
import { voteProfileClientApi } from "@/lib/client-api/vote-profiles";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function VoteResultPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["voteProfiles"],
    queryFn: voteProfileClientApi.getVoteProfiles,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <VoteProfileList />
    </HydrationBoundary>
  );
}
