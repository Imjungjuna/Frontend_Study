'use client'

export default function MyStudy() {
  return (
    <main id="main" className="w-full">
      <section id="mystudy-header" className="box-border h-32 w-full bg-[#333b3d] py-8">
        <div id="mystudy-header__content" className="mx-auto box-border text-white lg:w-3/5">
          <h2 id="mystudy-header__title" className="h-6 text-[28px] font-semibold">
            내가 신청하거나 개설한 스터디를 확인해보세요
          </h2>
          <p id="mystudy-header__sub-title" className="mt-6 text-lg font-medium">
            강의 수강에서 더 나아가 함께 스터디까지!
          </p>
        </div>
      </section>

      <section id="mystudy-body" className="mx-auto my-0 box-border flex max-w-7xl flex-row px-8">
        <div id="mystudy-left-side" className="mr-10 mt-11 box-border w-40">
          <nav id="mystudy-body__navigation" className="m-0 box-border p-0">
            <h6></h6>
            <ul id="mystudy-aside box-border m-0 p-0 list-">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
        <div id="mystudy-body__content" className="box-border flex max-w-full flex-1 flex-col pb-16 pt-8"></div>
      </section>
    </main>
  )
}
