import { useNavigate, useSearchParams } from "react-router";

export default function Admin() {
  const [searchParams] = useSearchParams();
  const isAuth = searchParams.get("auth");
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/login");
  }

  return (
    <div className="text-light">
      {isAuth ? (
        <>
          <h1>Admin dashboard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            possimus ad velit omnis. Possimus perspiciatis commodi rem aliquid.
            Molestias rerum consectetur sunt tenetur explicabo debitis, deserunt
            iste voluptates, amet ipsam error tempora ipsum consequuntur numquam
            dignissimos perferendis natus ipsa quam sapiente qui! Iusto expedita
            quod veniam a, tempora mollitia eaque!
          </p>
        </>
      ) : (
        <h1>Please Log IN!</h1>
      )}
    </div>
  );
}
