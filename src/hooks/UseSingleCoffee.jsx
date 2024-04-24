import { useQuery } from "@tanstack/react-query";

const UseSingleCoffee = (id) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["singleCoffee", id],
    queryFn: async () => {
      const response = await fetch(
        `https://espresso-emporium-server-ozq97bwzn.vercel.app/coffees/${id}`,
      );
      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, refetch };
};

export default UseSingleCoffee;
