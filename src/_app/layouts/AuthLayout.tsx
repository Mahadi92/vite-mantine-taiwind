import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <section className='auth-banner w-5/12 lg:w-6/12 xl:w-7/12 h-full hidden md:flex items-center p-10 lg:p-[84px]'>
          <div className=''>
            <h1 className='heading'>Welcome to <br /> your new</h1>
            <h1 className='heading font-outline'>epiqscripts</h1>
          </div>
        </section>
        <section className='w-full md:w-7/12 lg:w-6/12 xl:w-5/12 h-full px-10 lg:px-24 flex-center flex-col'>
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default BaseLayout;
