import { useLocation } from "react-router-dom";
import pageMap from "../../routes/pageMap";

export default function DynamicPage() {
  const { pathname } = useLocation();

  const PageComponent = pageMap[pathname];

  if (!PageComponent) {
    return <h1 className="text-xl text-red-500">404 – Page Not Found</h1>;
  }

  return <PageComponent />;
}
