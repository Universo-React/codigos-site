import Head from 'next/head'
//Componentes
import styleGrids from '../styles/grids.module.css';
import styleMain from '../styles/main.module.css';
import styleMenu from '../styles/menu.module.css';
import styleContent from '../styles/content.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>Universo React | Home</title>
      </Head>
      <main className={styleMain.main}>
        <nav className={styleMenu.sidebar}>
          <div className={styleMenu.logo}>
            <h1>Universo ReactJS</h1>
          </div>
          <ul className={styleMenu.links}>
            
          </ul>
        </nav>
        <section className={styleContent.wrap}>
          <article className={styleContent.content}>
            <div className={styleContent.content_header}>
              <div className={styleGrids.container}>
                <div className={styleGrids.row}>
                  <div className={styleGrids.col-4}>
                    
                  </div>
                  <div className={styleGrids.col-8}>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className={styleContent.content_body}>
              <div className={styleGrids.container}>
                  <div className={styleGrids.row}>
                    <div className={styleGrids.col-12}>
                      
                    </div>
                  </div>
                </div>
              </div>
            <div className={styleContent.content_footer}>
              <div className={styleGrids.container}>
                <div className={styleGrids.row}>
                  <div className={styleGrids.col}>
                    
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <footer className={styleContent.main}>
          
        </footer>
      </main>
    </>
  )
}
