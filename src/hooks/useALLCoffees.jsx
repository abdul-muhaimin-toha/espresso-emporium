import { useQuery } from "@tanstack/react-query";

const useALLCoffees = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://espresso-emporium-server-ozq97bwzn.vercel.app/coffees",
      );
      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, refetch };
};

export default useALLCoffees;
