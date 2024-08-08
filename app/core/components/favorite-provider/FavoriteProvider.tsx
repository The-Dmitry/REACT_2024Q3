import { ReactNode } from "react";
import { FavoriteContext } from "~/core/context/FavoriteContext";
import { useCollection } from "~/shared/hooks/useCollection";

export default function FavoriteProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { collection, handleCard, clearCollection } = useCollection();

  return (
    <FavoriteContext.Provider
      value={{ collection, handleCard, clearCollection }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
