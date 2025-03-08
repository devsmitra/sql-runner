export const PageLoader = () => {
    return (
      <main className="bg-slate-100 h-[100%] grid grid-cols-12 gap-[1px]">
        <aside className="col-span-3 bg-base-100 flex items-center justify-center">
          <span className="loading loading-ring size-12"></span>
        </aside>
        <section className="col-span-9 bg-base-100">
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-ring size-12"></span>
          </div>
        </section>
      </main>
    );
  };
  