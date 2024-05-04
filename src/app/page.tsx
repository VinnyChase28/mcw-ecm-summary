import { api } from "~/trpc/server";
import { DataTable } from "./_components/table/data-table";
import { Payment, columns } from "./_components/table/columns";
import Nav from "./_components/navigation/nav"; // This is your sidebar

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52d",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52c",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52g",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ];
  }

  const data = await getData();

  return (
    <main className="flex min-h-screen flex-row">
      <div className="w-1/4">
        {" "}
        {/* Adjust the width as necessary */}
        <Nav /> {/* Sidebar (Nav component) */}
      </div>
      <div className="container mx-auto w-3/4 py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
