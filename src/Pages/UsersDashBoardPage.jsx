import Swal from "sweetalert2";
import useAllUsers from "../hooks/useAllUsers";

const UsersDashBoardPage = () => {
  const { data, refetch } = useAllUsers();

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E3B577",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-green-xi.vercel.app/users/${id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <section className="bg-log-in-background bg-cover">
      <div className="min-h-[calc(100vh-425px)] bg-gradient-to-b from-[#222222bd] to-[#222222be] ">
        <div className="max-w-screen-4xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center py-20">
            <div className="w-full rounded bg-black  bg-opacity-60 p-6  shadow-2xl  md:max-w-screen-xl md:px-12 md:py-10">
              <h3 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
                Users DashBoard
              </h3>
              <div>
                <div className="overflow-x-auto text-white">
                  <table className="table">
                    {/* head */}
                    <thead className="text-white">
                      <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Joined In</th>
                        <th>Last Loged In</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((user, index) => (
                        <tr key={user._id}>
                          <th>{index + 1}</th>
                          <td>{user?.email}</td>
                          <td>{user?.creationTime}</td>
                          <td>{user?.lastSignInTime}</td>
                          <td>
                            <button
                              onClick={() => handleDeleteUser(user._id)}
                              className="rounded bg-primary px-2 py-1 font-serif text-lg "
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersDashBoardPage;
