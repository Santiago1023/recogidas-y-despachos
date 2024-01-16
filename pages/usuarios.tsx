import { API_ROUTES, fetcher } from "@/service/apiConfig";
import Link from "next/link"
import useSWR from "swr";

const UsersPage = () =>{
    const { data, isLoading, error } = useSWR(API_ROUTES.users, fetcher);

    console.log(data, isLoading, error);

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error al cargar los datos</div>

    return(
        <main className="flex flex-col gap-5">
            <section>
                <Link href="/">
                    <span>Home</span>
                </Link>
                <div className="w-full flex justify-center">
                    <h1>Gestión de usuarios</h1>;
                </div>
            </section>
            <section className="flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.image}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default UsersPage;