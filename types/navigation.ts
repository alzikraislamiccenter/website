export interface NavigationLink { label: string; href: string; description?: string }
export type NavigationItem =
  | (NavigationLink & { children?: NavigationLink[]; triggerOnly?: false })
  | ({ label: string; children: NavigationLink[]; triggerOnly: true; href?: never });
