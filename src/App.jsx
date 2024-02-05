import { createSignal } from 'solid-js'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      {/* <div class="w-20 d-flex-between h-20">
        <p>hello</p>
        <p>dfb</p>
      </div>
    <details class="d-accrodian">
      <summary class="d-accrodian-head">What is an accordion</summary>
      <p class="d-accrodian-content">An accordion is a UI element that consists of collapsible panels. Clicking on a panel's header will expand or collapse its content.</p>
    </details>
    <details class="d-accrodian">
      <summary class="d-accrodian-head">How do I use an accordion?</summary>
      <p class="d-accrodian-content">You can use accordions to display FAQs, product descriptions, or any other type of content that can be organized into separate sections.</p>
    </details>
    <details class="d-accrodian">
      <summary class="d-accrodian-head">Benefits of using accordions?</summary>
      <p class="d-accrodian-content">Accordions can improve website usability by making content easier to find and save space by hiding non-essential content.</p>
    </details>
    <div className="flex">
      <div className="d-loading"></div>
      <div className="d-loading ml-2 border-[red] border-t-[transparent]"></div>
      <div className="d-loading ml-2 border-[green] border-t-[transparent]"></div>
      <div className="d-loading ml-2 border-[yellow] border-t-[transparent]"></div>
      <div className="d-loading ml-2 border-[black] border-t-[transparent]"></div>
      <div className="d-loading ml-2 border-[11px]"></div>
      <div className="d-loading ml-2 w-[70px] h-[70px]"></div>
    </div>
      <div className=" flex flex-wrap">
        <button className="d-btn ml-2 my-2">d-btn</button>
        <button className="d-btn-danger ml-2 my-2">d-btn-danger</button>
        <button className="d-btn-green ml-2 my-2">d-btn-green</button>
        <button className="d-btn-blue ml-2 my-2">d-btn-blue</button>
        <button className="d-btn-yellow ml-2 my-2">d-btn-yellow</button>
      </div>
      <div className=" flex flex-wrap">
        <button className="d-btn-c ml-2 my-2">d-btn-c</button>
        <button className="d-btn-c-danger ml-2 my-2">d-btn-c-danger</button>
        <button className="d-btn-c-green ml-2 my-2">d-btn-c-green</button>
        <button className="d-btn-c-blue ml-2 my-2">d-btn-c-blue</button>
        <button className="d-btn-c-yellow ml-2 my-2">d-btn-c-yellow</button>
      </div>
      <div className=" flex flex-wrap">
        <button className="d-btn-g ml-2 my-2">d-btn-g</button>
        <button className="d-btn-g-danger ml-2 my-2">d-btn-g-danger</button>
        <button className="d-btn-g-green ml-2 my-2">d-btn-g-green</button>
        <button className="d-btn-g-blue ml-2 my-2">d-btn-g-blue</button>
        <button className="d-btn-g-yellow ml-2 my-2">d-btn-g-yellow</button>
      </div>
      <div className=" flex flex-wrap">
        <button className="d-btn-gc ml-2 my-2">d-btn-gc</button>
        <button className="d-btn-gc-danger ml-2 my-2">d-btn-gc-danger</button>
        <button className="d-btn-gc-green ml-2 my-2">d-btn-gc-green</button>
        <button className="d-btn-gc-blue ml-2 my-2">d-btn-gc-blue</button>
        <button className="d-btn-gc-yellow ml-2 my-2">d-btn-gc-yellow</button>
      </div>
      <div className="flex flex-wrap">
        <span class="d-text-fantasy text-5xl">JDNED</span>
        <span class="d-text-warm text-5xl">JDNED</span>
        <span class="d-text-green text-5xl">JDNED</span>
        <span class="d-text-dark text-5xl">JDNED</span>
        <span class="main-text text-5xl">advdv</span>
      </div>
  {/* <div class="second h-[200px] w-[60vw]">
      <h1 class='d-slider-title'>SLIDER ⭐</h1>
      <div class="d-slider">
          <div className="cardss"></div>
          <div className="cardss"></div>
          <div className="cardss"></div>
          <div className="cardss"></div>
          <div className="cardss"></div>
      </div>
  </div> */}
  {/* <div class="blob-container flex">
    <div class="d-blob1"></div>
    <div class="d-blob2"></div>
    <div class="d-blob3"></div>
  </div>
  <div className="bg-[image:url(https://th.bing.com/th/id/R.cda23017b0b6289a856e6b826ce1ff5a?rik=dhi3RdDjIctU7g&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f8500000%2fGreat-Mountains-mountains-and-waterfalls-8560225-1600-1200.jpg&ehk=sBBXEHgMvyKQ6uxFMS14WVvnGuU2XIZYI17ow2ClOKA%3d&risl=&pid=ImgRaw&r=0)] parallax d-flex-center">
    <h1 className='d-btn'>Scroll me</h1>
  </div>
  <p className='py-10 bg-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet veritatis consequatur, magnam deleniti doloremque, repellendus, accusantium nulla modi fugiat tempore quia. Quasi provident aspernatur cum, officiis omnis eum tempora.</p>
  <div className="bg-[image:url(/kk.png)] parallax"></div>
  <div >
  
  </div>  */}
  <div class="d-snap w-[800px] h-[300px]">
    <div class="d-snap-items bg-slate-500">Page 1</div>
    <div class="d-snap-items bg-slate-600">Page 2</div>
    <div class="d-snap-items bg-slate-700">Page 3</div>
    <div class="d-snap-items bg-slate-800">Page 4</div>
  </div>
  </>
  )
}

export default App
