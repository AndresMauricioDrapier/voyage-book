export default function Layout({ children, params }: { children: React.ReactNode, params: { boardId: string }}) {
  const { boardId } = params;
  return (
      <>
      <h1>Provisional {boardId}</h1>
      {children}
      </>
    );
  }
