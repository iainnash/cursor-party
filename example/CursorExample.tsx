import { useSharedCursors, types } from "../src";

export const CursorExample = () => {
  const { cursors, setContext } = useSharedCursors<{ emoji: string }>({
    pageName: 'main',
    showMyCursor: true,
  });

  return (
    <div
      onMouseDown={() => {
        setContext({ emoji: "ww" });
      }}
    >
      {cursors.map(
        ({ uid, x, y, context }: types.CursorDataType<{ emoji: string }>) => (
          <div
            key={uid}
            style={{
              transform: `translateX(${x}px) translateY(${y}px)`,
              width: "33px",
              height: "33px",
              backgroundColor: "red",
              position: "absolute",
              borderRadius: 300,
            }}
          >
            {context?.emoji || "?"}!!
          </div>
        )
      )}
    </div>
  );
};
