import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["coffees"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, refetch };
};

export default useAllUsers;
