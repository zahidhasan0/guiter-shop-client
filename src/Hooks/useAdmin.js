import { useEffect, useState } from "react";

const useAdmin = (email) => {
  //   const [isAdmin, setIsAdmin] = useState(false);
  //   const [adminLoading, setAdminLoading] = useState(true);
  //   useEffect(() => {
  //     fetch(
  //       `https://doctors-portal-server-seven-chi.vercel.app/users/admin/${email}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setIsAdmin(data.isAdmin);
  //         setAdminLoading(false);
  //       });
  //   }, [email]);
  //   return [isAdmin, adminLoading];
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    fetch(``)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data.isAdmin);
        setAdminLoading(false);
      });
  }, []);
  return [isAdmin, adminLoading];
};

export default useAdmin;
