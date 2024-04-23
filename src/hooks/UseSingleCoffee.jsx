import { useQuery } from "@tanstack/react-query";

const UseSingleCoffee = (id) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["singleCoffee", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/coffees/${id}`);
      const data = await response.json();
      return data;
    },
  });

  return { data, isLoading, refetch };
};

export default UseSingleCoffee;
