import '../src/styles/homePage.css'

function App() {
  return (
    <div className="App font-poppins text-white min-h-screen flex flex-col items-center background">
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="bg-[#dc0100] w-2 rounded-sm"></div>
            <div className="flex flex-col">
              <p className="w-fit text-4xl">SANTIAGO BUITRAGO GIRALDO</p>
              <span className="w-fit text-2xl"><strong className="text-[#dc0100] text-3xl">Front</strong>-end developer</span>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575265/Portafolio/imagen_2024-03-27_163422595_ljznl5.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575373/Portafolio/imagen_2024-03-27_163612296_aheciu.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711574672/Portafolio/imagen_2024-03-27_162430473_cj0bfv.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575168/Portafolio/imagen_2024-03-27_163246760_wuw0pv.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575411/Portafolio/imagen_2024-03-27_163649349_wrnt2u.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575512/Portafolio/imagen_2024-03-27_163830443_kbnc8n.png" />
            <img className="size-8 object-contain" alt="" src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711575606/Portafolio/imagen_2024-03-27_164004538_upbaxw.png" />
          </div>
        </div>
        <div>
          <div className="image-container">
            <img
              className="size-fit rounded-lg"
              src="https://res.cloudinary.com/dlwr6vxib/image/upload/v1711571811/Portafolio/handsome-young-man-with-arms-crossed-white-background-removebg-preview_admoiz.png"
              alt="fotoPerfil"
            />
          </div>
        </div>
      </div>
      <div className='mt-10 w-full flex flex-col items-center justify-center'>
        <div>
          <p className="text-4xl ">Proyectos realizados</p>
        </div>
        <div className='w-full grid grid-cols-2 gap-6 '>
          <div className='w-full flex justify-center'>
            <div className='bg-white w-3/5 rounded-xl h-80 p-10 flex justify-center items-center relative'>
              <div className="bg-[#212121] size-52 rounded-lg absolute -left-1/4">
                <img alt='Imagen del proyecto' src=''/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='bg-white w-4/5 rounded-xl h-80 p-10'>
              <div className="bg-[#212121] w">
                <img alt='Imagen del proyecto' src=''/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='bg-white w-4/5 rounded-xl h-80 p-10'>
              <div className="bg-[#212121] w">
                <img alt='Imagen del proyecto' src=''/>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='bg-white w-4/5 rounded-xl h-80 p-10'>
              <div className="bg-[#212121] w">
                <img alt='Imagen del proyecto' src=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
