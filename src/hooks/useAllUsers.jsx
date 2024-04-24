import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["coffees"],
    queryFn: async () => {
      const response = await fetch(
        "https://espresso-emporium-server-ozq97bwzn.vercel.app/users",
      );
      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, refetch };
};

export default useAllUsers;
