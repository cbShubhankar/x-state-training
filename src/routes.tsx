import React, { Fragment, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export interface IProps {
  children: JSX.Element;
}
export type TGeneralRoute = {
  exact?: boolean;
  path: string;
  guard?: ({ children }: IProps) => JSX.Element;
  layout?: ({ children }: IProps) => JSX.Element;
  component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
};

export type TRoutes = Array<TGeneralRoute>;

async function importError(e: unknown) {
  if (
    (e &&
      "message" in (e as { message?: string }) &&
      (e as { message?: string }).message?.includes(
        "dynamically imported module"
      )) ||
    (e as { message?: string }).message?.includes("non-existent module")
  ) {
    console.log("reloading");
    window.location.reload();
  }
  return {
    default: () => <div></div>,
  };
}

const routes: TGeneralRoute[] = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("./screens/Todos").catch(importError)),
  },
  {
    exact: true,
    path: "/my-profile",
    component: lazy(() => import("./MyProfile/index").catch(importError)),
  },
  // {
  //   exact: true,
  //   path: "/404",
  //   component: lazy(() => import("./src/screens/Todos").catch(importError)),
  // },
  //   {
  //     exact: true,
  //     path: "*",
  //     component: () => <Navigate to="/404" />,
  //   },
];

export const renderRoutes = () => (
  <Suspense>
    <Routes>
      {routes.map((route, i) => {
        const { path, component, layout, guard } = route;
        const Component = component;
        const Layout = layout || Fragment;
        const Guard = guard || Fragment;
        return (
          <Route
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            path={path}
            element={
              <Guard>
                <Layout>
                  {/* we need to pass key because component make unique */}
                  <Component key={i} />
                </Layout>
              </Guard>
            }
          ></Route>
        );
      })}
    </Routes>
  </Suspense>
);
