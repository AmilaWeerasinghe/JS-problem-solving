import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();
    return (
        <>
        {navigation.state === 'loading' && <p>loading...</p>}
        <MainNavigation/>
        <main>
          <Outlet/>
        </main>
        </>
    )
}

export default Root;