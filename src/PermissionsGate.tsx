import { cloneElement, useState } from "react";
import { PERMISSIONS } from "./permission-maps";
// import { useGetRole } from "./useGetRole";

const hasPermission = ({ permissions, scopes }: any) => {
  const scopesMap: any = {};
  scopes.forEach((scope: any) => {
    scopesMap[scope] = true;
  });

  return permissions.some((permission: any) => scopesMap[permission]);
};

export default function PermissionsGate({
  children,
  RenderError = () => <></>,
  errorProps = null,
  scopes = [],
}: any) {
  const [token, setToken] = useState<any>();
  setToken("sdssd");
  const { role } = { role: "VIEWER" }; //useGetRole();
  const permissions = PERMISSIONS[role];

  const permissionGranted = hasPermission({ permissions, scopes });

  if (!permissionGranted && !errorProps) return <RenderError />;

  if (!permissionGranted && errorProps)
    return cloneElement(children, { ...errorProps });

  if (!token) {
    window.location.href = "www.google.com";
  }

  return <>{children}</>;
}
