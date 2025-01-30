import Image from "next/image"


function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row-reverse min-h-screen">
    <section className="hidden w-1/2 items-center justify-center bg-green-500 p-10 lg:flex xl:w-2/5">
      <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
        {/* <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={224}
          height={82}
          className="h-auto ml-auto"
        /> */}

        <div className="space-y-5 text-white text-center">
          <h1 className="text-3xl font-bold text-center">{'نظم حملاتك التسويقيه بالذكاء الصناعي معنا الان'}</h1>
          <p className="text-lg font-medium text-center">
            {'استخدم بياناتك لبناء حملات تسويقية قوية وفعالة مع منصة التسويق بالذكاء الصناعي الخاصة بنا.'}
          </p>
        </div>
        {/* <Image
          src="/assets/images/files.png"
          alt="Files"
          width={342}
          height={342}
          className="transition-all hover:rotate-2 hover:scale-105"
        /> */}
      </div>
    </section>

    <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
      <div className="mb-16 lg:hidden">
        {/* <Image
          src="/assets/icons/logo-full-brand.svg"
          alt="logo"
          width={224}
          height={82}
          className="h-auto w-[200px] lg:w-[250px]"
        /> */}
      </div>

      {children}
    </section>
  </div>
  )
}

export default layout
